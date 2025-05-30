import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './ToolPage.module.css';

const ToolPage = ({ 
  title, 
  description, 
  acceptedFileTypes, 
  onFilesSelected, 
  children,
  icon 
}) => {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    if (onFilesSelected) {
      onFilesSelected(acceptedFiles);
    }
  }, [onFilesSelected]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    multiple: true
  });

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    if (onFilesSelected) {
      onFilesSelected(newFiles);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          {icon}
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.content}>
        <div 
          {...getRootProps()} 
          className={`${styles.dropzone} ${isDragActive ? styles.dragActive : ''}`}
        >
          <input {...getInputProps()} />
          <div className={styles.dropzoneContent}>
            <svg className={styles.uploadIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            {isDragActive ? (
              <p>Suelta los archivos aquí...</p>
            ) : (
              <>
                <p>Arrastra y suelta tus archivos PDF aquí</p>
                <p className={styles.orText}>o</p>
                <button className={styles.selectButton}>Seleccionar archivos</button>
              </>
            )}
          </div>
        </div>

        {files.length > 0 && (
          <div className={styles.fileList}>
            <h3>Archivos seleccionados:</h3>
            {files.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <div className={styles.fileInfo}>
                  <span className={styles.fileName}>{file.name}</span>
                  <span className={styles.fileSize}>{formatFileSize(file.size)}</span>
                </div>
                <button 
                  onClick={() => removeFile(index)}
                  className={styles.removeButton}
                  aria-label="Eliminar archivo"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {files.length > 0 && (
          <div className={styles.actions}>
            <button 
              className={styles.processButton}
              disabled={isProcessing}
              onClick={() => setIsProcessing(true)}
            >
              {isProcessing ? 'Procesando...' : 'Procesar archivos'}
            </button>
          </div>
        )}

        {children && (
          <div className={styles.customContent}>
            {children}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ToolPage;