import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import FileUpload1 from "../UIComponents/FileUpload/FileUpload1";
import FileUpload2 from "../UIComponents/FileUpload/FileUpload2";

function FileUploadPage() {
  const FileVariants = [
    {
      title: "Drag Drop Upload",
      component: <FileUpload1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";
          import { Paperclip, Upload, X } from "lucide-react";
          
          const FileUpload = () => {
            const [files, setFiles] = useState([]);
            const [isDragging, setIsDragging] = useState(false);
          
            const handleFileChange = (e) => {
              if (e.target.files.length) {
                const newFiles = Array.from(e.target.files);
                setFiles((prev) => [...prev, ...newFiles]);
              }
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
          
              if (e.dataTransfer.files.length) {
                const newFiles = Array.from(e.dataTransfer.files);
                setFiles((prev) => [...prev, ...newFiles]);
              }
            };
          
            const removeFile = (indexToRemove) => {
              setFiles(files.filter((_, index) => index !== indexToRemove));
            };
          
            const wrapperClass =
              "relative border-2 border-dashed rounded-lg p-4 transition-colors " +
              (isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300");
          
            return (
              <div className="w-full max-w-lg mx-auto">
                <div
                  className={wrapperClass}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    multiple
                  />
          
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <Upload className="w-10 h-10 mb-3 text-gray-500" />
                    <p className="mb-1 text-sm font-medium text-gray-700">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                  </div>
                </div>
          
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <Paperclip className="h-4 w-4 flex-shrink-0 text-gray-500" />
                          <span className="text-sm truncate">{file.name}</span>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="flex-shrink-0 ml-2 text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          };
          
          export default FileUpload;`,
        },
      ],
    },
    {
      title: "Image Drop Zone",
      component: <FileUpload2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";
import { Paperclip, Upload, X } from "lucide-react";

const FileSvgDraw = () => {
  return (
    <>
      <svg
        className="w-8 h-8 mb-3 text-primary"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-sm text-primary">
        <span className="font-semibold">Click to upload</span>&nbsp; or drag and drop
      </p>
      <p className="text-xs text-primary">SVG, PNG, JPG or GIF</p>
    </>
  );
};

const ResponsiveFileUploader = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const newFiles = Array.from(e.target.files).filter((file) =>
        file.type.startsWith("image/")
      );
      setFiles((prev) => [...prev, ...newFiles]);
    }
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

    if (e.dataTransfer.files.length) {
      const newFiles = Array.from(e.dataTransfer.files).filter((file) =>
        file.type.startsWith("image/")
      );
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  const dropzoneClass =
    "relative border-2 border-dashed rounded-lg bg-background " +
    (isDragging ? "border-primary bg-primary/5" : "border-primary/40");

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className={dropzoneClass}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          multiple
          accept="image/*"
        />

        <div className="flex flex-col items-center justify-center py-6 text-center">
          <FileSvgDraw />
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative h-20 w-20 rounded-md overflow-hidden border border-gray-200"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1 text-white hover:bg-opacity-70"
                aria-label={"Remove " + file.name}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResponsiveFileUploader;`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">FileUpload Previews</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.
      </p>
      <div className="mt-6 space-y-6">
        {FileVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default FileUploadPage;
