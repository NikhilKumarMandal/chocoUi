import React, { useState, useRef, useEffect, useCallback } from 'react';

const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
const MAX_SIZE = 10 * 1024 * 1024;
const ACCEPT_STRING = ALLOWED_TYPES.join(',');

const FileUpload1 = () => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({});
    const [errors, setErrors] = useState({});
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);
    const intervalRefs = useRef({});
    const errorTimeoutRefs = useRef({});

    const validateFile = (file) => {
        const fileErrors = [];
        if (!ALLOWED_TYPES.includes(file.type)) {
            fileErrors.push('File type not supported');
        }
        if (file.size > MAX_SIZE) {
            fileErrors.push(`File size exceeds ${formatFileSize(MAX_SIZE)} limit`);
        }
        return fileErrors;
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const updateSpecificProgress = useCallback((fileName, progress) => {
        setUploadProgress(prev => {
            const updatedProgress = { ...prev, [fileName]: progress };
            const allComplete = files.every(f => updatedProgress[f.name] === 100);
            if (allComplete) {
                setIsUploading(false);
            }
            return updatedProgress;
        });
    }, [files]);

    const clearError = useCallback((fileName) => {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[fileName];
            return newErrors;
        });
        if (errorTimeoutRefs.current[fileName]) {
            clearTimeout(errorTimeoutRefs.current[fileName]);
            delete errorTimeoutRefs.current[fileName];
        }
    }, []);

    const addError = useCallback((fileName, errorMessages) => {
        setErrors(prev => ({ ...prev, [fileName]: errorMessages }));
        if (errorTimeoutRefs.current[fileName]) {
            clearTimeout(errorTimeoutRefs.current[fileName]);
        }
        errorTimeoutRefs.current[fileName] = setTimeout(() => {
            clearError(fileName);
        }, 5000);
    }, [clearError]);

    const removeFile = useCallback((fileName) => {
        if (intervalRefs.current[fileName]) {
            clearInterval(intervalRefs.current[fileName]);
            delete intervalRefs.current[fileName];
        }
        if (errorTimeoutRefs.current[fileName]) {
            clearTimeout(errorTimeoutRefs.current[fileName]);
            delete errorTimeoutRefs.current[fileName];
        }
        setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
        setUploadProgress(prev => {
            const newProgress = { ...prev };
            delete newProgress[fileName];
            const remainingFiles = files.filter(f => f.name !== fileName);
            if (remainingFiles.length === 0 || remainingFiles.every(f => newProgress[f.name] === 100)) {
                 setIsUploading(false);
            }
            return newProgress;
        });
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[fileName];
            return newErrors;
        });
    }, [files]);

    const startUpload = useCallback((filesToUpload) => {
        if (filesToUpload.length === 0) return;
        setIsUploading(true);
        filesToUpload.forEach(file => {
            if (uploadProgress[file.name] === undefined || uploadProgress[file.name] < 100) {
                setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
                let progress = 0;
                if (intervalRefs.current[file.name]) {
                    clearInterval(intervalRefs.current[file.name]);
                }
                intervalRefs.current[file.name] = setInterval(() => {
                    progress += Math.random() * 20 + 5;
                    if (progress >= 100) {
                        progress = 100;
                        if (intervalRefs.current[file.name]) {
                            clearInterval(intervalRefs.current[file.name]);
                            delete intervalRefs.current[file.name];
                        }
                    }
                    updateSpecificProgress(file.name, progress);
                }, 300);
            }
        });
    }, [uploadProgress, updateSpecificProgress]);

    const handleFiles = useCallback((newFiles) => {
        const validFilesToAdd = [];
        const currentFileNames = files.map(f => f.name);
        newFiles.forEach(file => {
            if (currentFileNames.includes(file.name)) {
                console.log(`File "${file.name}" already added.`);
                return;
            }
            const fileErrors = validateFile(file);
            if (fileErrors.length === 0) {
                validFilesToAdd.push(file);
                 if(errors[file.name]) {
                     clearError(file.name);
                 }
            } else {
                addError(file.name, fileErrors);
            }
        });
        if (validFilesToAdd.length > 0) {
            setFiles(prevFiles => [...prevFiles, ...validFilesToAdd]);
            startUpload(validFilesToAdd);
        }
    }, [files, errors, addError, clearError, startUpload]);

    const handleDragEnter = useCallback((e) => {
        e.preventDefault(); e.stopPropagation(); setIsDragging(true);
    }, []);
    const handleDragLeave = useCallback((e) => {
        e.preventDefault(); e.stopPropagation(); setIsDragging(false);
    }, []);
    const handleDragOver = useCallback((e) => {
        e.preventDefault(); e.stopPropagation();
    }, []);
    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    }, [handleFiles]);

    const handleFileInput = useCallback((e) => {
        const selectedFiles = Array.from(e.target.files);
        handleFiles(selectedFiles);
        e.target.value = '';
    }, [handleFiles]);

    useEffect(() => {
        return () => {
            Object.values(intervalRefs.current).forEach(clearInterval);
            Object.values(errorTimeoutRefs.current).forEach(clearTimeout);
        };
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 font-sans">
            {Object.keys(errors).length > 0 && (
                <div className="mb-4 space-y-2">
                    {Object.entries(errors).map(([fileName, errorMessages]) => (
                        <div key={fileName} className="bg-red-50 border border-red-200 rounded-md p-3">
                            <p className="text-sm font-medium text-red-800">{fileName}</p>
                            <ul className="mt-1 list-disc list-inside text-sm text-red-700">
                                {errorMessages.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                             <button
                                 onClick={() => clearError(fileName)}
                                 className="mt-1 text-xs text-red-600 hover:text-red-800"
                             >
                                 Dismiss
                             </button>
                        </div>
                    ))}
                </div>
            )}

            <div
                className={`border-2 border-dashed rounded-lg p-6 sm:p-8 text-center transition-colors duration-200 cursor-pointer ${
                    isDragging
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-400 bg-white'
                }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInput}
                    className="hidden"
                    multiple
                    accept={ACCEPT_STRING}
                />
                <div className="flex flex-col items-center justify-center space-y-3">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"
                    >
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="text-sm text-gray-600">
                        <span className="font-medium text-blue-600">
                           Click to upload
                        </span>
                        <span> or drag and drop</span>
                    </div>
                    <p className="text-xs text-gray-500">
                        {ALLOWED_TYPES.map(t => t.split('/')[1].toUpperCase()).join(', ')} up to {formatFileSize(MAX_SIZE)}
                    </p>
                </div>
            </div>

            {files.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Files to Upload</h3>
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        {files.map((file) => {
                            const progress = uploadProgress[file.name] || 0;
                            const isFileUploading = progress < 100;

                            return (
                                <li key={file.name} className="px-4 py-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                        <div className="flex items-center flex-grow min-w-0 mr-4">
                                            <svg className="h-6 w-6 text-gray-400 flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate" title={file.name}>{file.name}</p>
                                                <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3 flex-shrink-0 mt-2 sm:mt-0">
                                            <div className="w-24 sm:w-32">
                                                {isFileUploading ? (
                                                    <>
                                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-2 bg-blue-500 rounded-full transition-all duration-300 ease-linear"
                                                                style={{ width: `${progress}%` }}
                                                            />
                                                        </div>
                                                        <p className="text-xs text-gray-500 text-right">{Math.round(progress)}%</p>
                                                     </>
                                                ) : (
                                                     <div className="flex items-center text-green-600">
                                                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                                        <p className="text-xs font-medium">Complete</p>
                                                     </div>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => removeFile(file.name)}
                                                disabled={isUploading}
                                                className={`p-1 rounded-full ${isUploading ? 'text-gray-400 cursor-not-allowed' : 'text-red-500 hover:text-red-700 hover:bg-red-100'} transition-colors duration-200`}
                                                aria-label={`Remove ${file.name}`}
                                            >
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FileUpload1;