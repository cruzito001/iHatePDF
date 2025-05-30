import React, { useState } from 'react';
import ToolPage from '../../components/ToolPage/ToolPage.jsx';
import styles from './SplitPdf.module.css';

const SplitPdf = () => {
  const [splitMode, setSplitMode] = useState('pages');
  const [pageRanges, setPageRanges] = useState('');

  const handleFilesSelected = (files) => {
    console.log('Archivos seleccionados:', files);
  };

  const splitIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
    </svg>
  );

  return (
    <ToolPage
      title="Dividir PDF"
      description="Extrae páginas específicas de tu PDF o divide el documento en múltiples archivos más pequeños."
      acceptedFileTypes={{
        'application/pdf': ['.pdf']
      }}
      onFilesSelected={handleFilesSelected}
      icon={splitIcon}
      themeColor="#0891b2"
    >
      <div className={styles.options}>
        <h3>Modo de división:</h3>
        <div className={styles.splitOptions}>
          <label className={styles.radioOption}>
            <input 
              type="radio" 
              value="pages" 
              checked={splitMode === 'pages'}
              onChange={(e) => setSplitMode(e.target.value)}
            />
            <span>Una página por archivo</span>
          </label>
          <label className={styles.radioOption}>
            <input 
              type="radio" 
              value="ranges" 
              checked={splitMode === 'ranges'}
              onChange={(e) => setSplitMode(e.target.value)}
            />
            <span>Rangos personalizados</span>
          </label>
        </div>
        {splitMode === 'ranges' && (
          <div className={styles.rangeInput}>
            <label>Rangos de páginas (ej: 1-3, 5, 7-10):</label>
            <input 
              type="text" 
              value={pageRanges}
              onChange={(e) => setPageRanges(e.target.value)}
              placeholder="1-3, 5, 7-10"
              className={styles.textInput}
            />
          </div>
        )}
      </div>
      <div className={styles.features}>
        <h3>Características:</h3>
        <ul>
          <li>✅ División por páginas individuales</li>
          <li>✅ Rangos personalizados</li>
          <li>✅ Mantiene calidad original</li>
          <li>✅ Descarga como ZIP</li>
          <li>✅ Procesamiento rápido</li>
        </ul>
      </div>
    </ToolPage>
  );
};

export default SplitPdf;