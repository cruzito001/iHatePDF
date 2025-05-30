import React from 'react';
import ToolPage from '../../components/ToolPage/ToolPage.jsx';
import styles from './PdfToExcel.module.css';

const PdfToExcel = () => {
  const handleFilesSelected = (files) => {
    console.log('Archivos seleccionados:', files);
  };

  const excelIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  );

  return (
    <ToolPage
      title="PDF a Excel"
      description="Convierte tus archivos PDF a hojas de cálculo de Excel editables. Extrae tablas y datos de forma precisa."
      acceptedFileTypes={{
        'application/pdf': ['.pdf']
      }}
      onFilesSelected={handleFilesSelected}
      icon={excelIcon}
      themeColor="#16a34a"
    >
      <div className={styles.features}>
        <h3>Características:</h3>
        <ul>
          <li>✅ Extracción precisa de tablas</li>
          <li>✅ Mantiene formato de celdas</li>
          <li>✅ Datos completamente editables</li>
          <li>✅ Soporte para múltiples hojas</li>
          <li>✅ Preserva fórmulas cuando es posible</li>
        </ul>
      </div>
    </ToolPage>
  );
};

export default PdfToExcel;