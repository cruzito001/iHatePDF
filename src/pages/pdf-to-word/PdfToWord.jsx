import React from 'react';
import ToolPage from '../../components/ToolPage/ToolPage.jsx';
import styles from './PdfToWord.module.css';

const PdfToWord = () => {
  const handleFilesSelected = (files) => {
    console.log('Archivos seleccionados:', files);
    // Aquí implementarías la lógica de conversión
  };

  const wordIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  return (
    <ToolPage
      title="PDF a Word"
      description="Convierte tus archivos PDF a documentos de Word editables de forma rápida y sencilla. Mantiene el formato original y permite edición completa."
      acceptedFileTypes={{
        'application/pdf': ['.pdf']
      }}
      onFilesSelected={handleFilesSelected}
      icon={wordIcon}
    >
      <div className={styles.features}>
        <h3>Características:</h3>
        <ul>
          <li>✅ Conversión rápida y precisa</li>
          <li>✅ Mantiene formato original</li>
          <li>✅ Texto completamente editable</li>
          <li>✅ Soporte para imágenes y tablas</li>
          <li>✅ Procesamiento local seguro</li>
        </ul>
      </div>
    </ToolPage>
  );
};

export default PdfToWord;