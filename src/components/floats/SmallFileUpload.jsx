import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UploadCloud,
  X,
  Check,
  FileText,
  Image,
  FileAudio,
  FileVideo,
} from "lucide-react";

const SmallFileUpload = ({
  accept = "*",
  maxSize = 5, // MB
  onFileUpload,
}) => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const fileInputRef = useRef(null);

  const getFileIcon = (type) => {
    if (type.startsWith("image/"))
      return <Image className="w-4 h-4 text-purple-300" />;
    if (type.startsWith("audio/"))
      return <FileAudio className="w-4 h-4 text-purple-300" />;
    if (type.startsWith("video/"))
      return <FileVideo className="w-4 h-4 text-purple-300" />;
    return <FileText className="w-4 h-4 text-purple-300" />;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > maxSize * 1024 * 1024) {
        setFile({ ...selectedFile, error: true });
        setTimeout(() => setFile(null), 2000);
        return;
      }
      setFile(selectedFile);
      setIsUploadComplete(false);
      simulateUpload(selectedFile);
    }
  };

  const simulateUpload = (file) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        clearInterval(interval);
        setUploadProgress(100);
        setTimeout(() => {
          setIsUploadComplete(true);
          onFileUpload?.(file);
        }, 300);
      } else {
        setUploadProgress(Math.min(progress, 100));
      }
    }, 150);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange({ target: { files: e.dataTransfer.files } });
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
    setUploadProgress(0);
    setIsUploadComplete(false);
  };

  return (
    <motion.div
      className={`relative w-full max-w-xs rounded-xl bg-gray-900 shadow-lg overflow-hidden border border-gray-700 ${
        isDragging ? "ring-2 ring-purple-500" : "hover:border-purple-400"
      }`}
      whileHover={{ y: -2, scale: 1.01 }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Hidden file input */}
      <input
        type="disabled"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={accept}
        className="hidden"
      />

      {/* Main container */}
      <div
        className="relative p-4 cursor-pointer"
        onClick={() => fileInputRef.current.click()}
      >
        {/* Background shimmer effect */}
        {isDragging && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-purple-800/20 to-purple-900/10"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {!file ? (
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="p-3 rounded-full bg-purple-900/80 text-purple-300 hover:bg-purple-800 transition-colors">
              <UploadCloud className="w-5 h-5" />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-semibold text-gray-200 hover:text-purple-300 transition-colors">
                Drag & drop files
              </h4>
              <p className="text-xs text-gray-400 mt-1 hover:text-purple-200 transition-colors">
                or{" "}
                <span className="font-medium text-purple-300">
                  click to browse
                </span>
              </p>
              <p className="text-[10px] text-gray-500 mt-2">
                Supported formats: {accept === "*" ? "All" : accept}
              </p>
            </div>
          </div>
        ) : (
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* File info */}
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-purple-900/60 text-purple-300 hover:bg-purple-800/60 transition-colors">
                  {getFileIcon(file.type)}
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-medium text-gray-200 hover:text-purple-300 transition-colors truncate max-w-[160px]">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-400 hover:text-purple-200 transition-colors">
                    {(file.size / (1024 * 1024)).toFixed(1)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={removeFile}
                className="p-1 rounded-full hover:bg-purple-900/50 transition-colors"
              >
                <X className="w-4 h-4 text-gray-400 hover:text-purple-300" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className={`absolute top-0 left-0 h-full ${
                  file.error
                    ? "bg-red-500"
                    : "bg-gradient-to-r from-purple-500 to-purple-400"
                } rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress}%` }}
                transition={{ duration: 0.3 }}
              />
              {uploadProgress > 0 && uploadProgress < 100 && (
                <motion.div
                  className="absolute top-0 h-full w-4 bg-white/30"
                  animate={{
                    x: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    boxShadow: "0 0 10px 5px rgba(192, 132, 252, 0.3)",
                  }}
                />
              )}
            </div>

            {/* Status message */}
            <AnimatePresence>
              {file.error ? (
                <motion.p
                  className="text-xs text-red-400 text-center"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  File exceeds {maxSize}MB limit
                </motion.p>
              ) : isUploadComplete ? (
                <motion.div
                  className="flex items-center justify-center space-x-1 text-purple-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-medium">Upload successful</span>
                </motion.div>
              ) : (
                <p className="text-xs text-gray-400 text-center hover:text-purple-300 transition-colors">
                  Uploading... {Math.round(uploadProgress)}%
                </p>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 opacity-30" />
    </motion.div>
  );
};

export default SmallFileUpload;
