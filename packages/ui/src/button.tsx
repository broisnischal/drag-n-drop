import React, { useState } from "react";

const DropZone: React.FC = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [isDropping, setIsDropping] = useState(false);
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior to allow drop
    setIsDraggingOver(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior to allow drop
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior to allow drop
    setIsDraggingOver(false);

    const droppedFiles = Array.from(e.dataTransfer.files);

    setDroppedFiles(droppedFiles);
    console.log("Dropped files:", droppedFiles);
  };

  const handleRemoveFile = (index: number) => {
    const newDroppedFiles = [...droppedFiles];
    newDroppedFiles.splice(index, 1);
    setDroppedFiles(newDroppedFiles);
  };

  const dropZoneStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    width: "200px",
    border: `2px dashed ${isDraggingOver ? "green" : "gray"}`, // Change border color when dragging over
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={dropZoneStyle}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        Drop Here
      </div>

      {isDropping && <p>Drop files here!</p>}

      {droppedFiles.map((file, index) => (
        <div
          key={index}
          style={{
            marginTop: "8px",
            display: "flex",
            alignItems: "center",
            height: "50px",
            width: "200px",
            border: "1px solid black",
            borderRadius: "8px",
            padding: "4px",
          }}
        >
          {/* File icon */}
          <div style={{ marginRight: "8px" }}>
            {file.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "4px",
                }}
              />
            ) : file.type === "application/pdf" ? (
              // <FaFilePdf size={24} />
              <p>Pdf</p>
            ) : (
              // <FaFile size={24} />
              <p>file</p>
            )}
          </div>

          {/* File name */}
          <div style={{ flex: 1 }}>{file.name}</div>

          {/* Remove icon */}
          <button
            onClick={() => handleRemoveFile(index)}
            style={{
              // background: "none",
              // border: "none",
              cursor: "pointer",
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DropZone;
