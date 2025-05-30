import React from 'react';
import ToolPage from '../../components/ToolPage/ToolPage.jsx';
import styles from './MergePdf.module.css';

const MergePdf = () => {
  const handleFilesSelected = (files) => {
    console.log('Archivos seleccionados:', files);
  };

  const mergeIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  return (
    <ToolPage
      title="Combinar PDF"
      description="Une múltiples archivos PDF en un solo documento. Arrastra los archivos en el orden que desees combinarlos."
      acceptedFileTypes={{
        'application/pdf': ['.pdf']
      }}
      onFilesSelected={handleFilesSelected}
      icon={mergeIcon}
      themeColor="#7c2d12"
    >
      <div className={styles.info}>
        <h3>💡 Consejo:</h3>
        <p>Puedes reordenar los archivos arrastrándolos en la lista para cambiar el orden de combinación.</p>
      </div>
      <div className={styles.features}>
        <h3>Características:</h3>
        <ul>
          <li>✅ Combina múltiples PDFs</li>
          <li>✅ Orden personalizable</li>
          <li>✅ Mantiene calidad original</li>
          <li>✅ Sin límite de archivos</li>
          <li>✅ Procesamiento rápido</li>
        </ul>
      </div>
    </ToolPage>
  );
};

export default MergePdf;