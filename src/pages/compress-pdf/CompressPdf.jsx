import React, { useState } from 'react';
import ToolPage from '../../components/ToolPage/ToolPage.jsx';
import styles from './CompressPdf.module.css';

const CompressPdf = () => {
  const [compressionLevel, setCompressionLevel] = useState('medium');

  const handleFilesSelected = (files) => {
    console.log('Archivos seleccionados:', files);
  };

  const compressIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );

  return (
    <ToolPage
      title="Comprimir PDF"
      description="Reduce el tamaño de tus archivos PDF manteniendo la calidad. Perfecto para compartir por email o web."
      acceptedFileTypes={{
        'application/pdf': ['.pdf']
      }}
      onFilesSelected={handleFilesSelected}
      icon={compressIcon}
      themeColor="#ea580c"
    >
      <div className={styles.options}>
        <h3>Nivel de compresión:</h3>
        <div className={styles.compressionOptions}>
          <label className={styles.radioOption}>
            <input 
              type="radio" 
              value="low" 
              checked={compressionLevel === 'low'}
              onChange={(e) => setCompressionLevel(e.target.value)}
            />
            <span>Baja (mejor calidad)</span>
          </label>
          <label className={styles.radioOption}>
            <input 
              type="radio" 
              value="medium" 
              checked={compressionLevel === 'medium'}
              onChange={(e) => setCompressionLevel(e.target.value)}
            />
            <span>Media (equilibrada)</span>
          </label>
          <label className={styles.radioOption}>
            <input 
              type="radio" 
              value="high" 
              checked={compressionLevel === 'high'}
              onChange={(e) => setCompressionLevel(e.target.value)}
            />
            <span>Alta (menor tamaño)</span>
          </label>
        </div>
      </div>
      <div className={styles.features}>
        <h3>Características:</h3>
        <ul>
          <li>✅ Reduce hasta 90% del tamaño</li>
          <li>✅ Mantiene calidad visual</li>
          <li>✅ Múltiples niveles de compresión</li>
          <li>✅ Procesamiento rápido</li>
          <li>✅ Sin pérdida de funcionalidad</li>
        </ul>
      </div>
    </ToolPage>
  );
};

export default CompressPdf;