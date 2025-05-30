import React from 'react';
import ToolPage from '../../components/ToolPage/ToolPage.jsx';
import styles from './PdfToPowerpoint.module.css';

const PdfToPowerpoint = () => {
  const handleFilesSelected = (files) => {
    console.log('Archivos seleccionados:', files);
  };

  const powerpointIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1V3a1 1 0 011-1m8 0H8m0 0v18m0 0h8M9 7h6m-6 4h6m-6 4h4" />
    </svg>
  );

  return (
    <ToolPage
      title="PDF a PowerPoint"
      description="Convierte tus archivos PDF a presentaciones de PowerPoint editables. Cada página se convierte en una diapositiva."
      acceptedFileTypes={{
        'application/pdf': ['.pdf']
      }}
      onFilesSelected={handleFilesSelected}
      icon={powerpointIcon}
      themeColor="#dc2626"
    >
      <div className={styles.features}>
        <h3>Características:</h3>
        <ul>
          <li>✅ Una diapositiva por página PDF</li>
          <li>✅ Mantiene diseño y formato</li>
          <li>✅ Elementos completamente editables</li>
          <li>✅ Preserva imágenes y gráficos</li>
          <li>✅ Listo para presentar</li>
        </ul>
      </div>
    </ToolPage>
  );
};

export default PdfToPowerpoint;