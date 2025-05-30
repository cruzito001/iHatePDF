import React, { useState } from 'react';
import ToolPage from '../../components/ToolPage/ToolPage.jsx';
import styles from './PdfToImage.module.css';

const PdfToImage = () => {
  const [imageFormat, setImageFormat] = useState('jpg');
  const [quality, setQuality] = useState(300);

  const handleFilesSelected = (files) => {
    console.log('Archivos seleccionados:', files);
  };

  const imageIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  return (
    <ToolPage
      title="PDF a Imagen"
      description="Convierte cada página de tu PDF en imágenes de alta calidad. Elige entre JPG y PNG."
      acceptedFileTypes={{
        'application/pdf': ['.pdf']
      }}
      onFilesSelected={handleFilesSelected}
      icon={imageIcon}
      themeColor="#7c3aed"
    >
      <div className={styles.options}>
        <h3>Opciones de conversión:</h3>
        <div className={styles.optionGroup}>
          <label>Formato de imagen:</label>
          <select 
            value={imageFormat} 
            onChange={(e) => setImageFormat(e.target.value)}
            className={styles.select}
          >
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
          </select>
        </div>
        <div className={styles.optionGroup}>
          <label>Calidad (DPI):</label>
          <select 
            value={quality} 
            onChange={(e) => setQuality(Number(e.target.value))}
            className={styles.select}
          >
            <option value={150}>150 DPI (Baja)</option>
            <option value={300}>300 DPI (Media)</option>
            <option value={600}>600 DPI (Alta)</option>
          </select>
        </div>
      </div>
      <div className={styles.features}>
        <h3>Características:</h3>
        <ul>
          <li>✅ Alta resolución configurable</li>
          <li>✅ Formatos JPG y PNG</li>
          <li>✅ Una imagen por página</li>
          <li>✅ Calidad profesional</li>
          <li>✅ Descarga como ZIP</li>
        </ul>
      </div>
    </ToolPage>
  );
};

export default PdfToImage;