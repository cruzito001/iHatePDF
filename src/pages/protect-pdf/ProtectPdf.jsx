import React, { useState } from 'react';
import ToolPage from '../../components/ToolPage/ToolPage.jsx';
import styles from './ProtectPdf.module.css';

const ProtectPdf = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [permissions, setPermissions] = useState({
    print: true,
    copy: true,
    modify: false,
    annotate: true
  });

  const handleFilesSelected = (files) => {
    console.log('Archivos seleccionados:', files);
  };

  const protectIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );

  return (
    <ToolPage
      title="Proteger PDF"
      description="Añade contraseña y configura permisos para proteger tus documentos PDF de accesos no autorizados."
      acceptedFileTypes={{
        'application/pdf': ['.pdf']
      }}
      onFilesSelected={handleFilesSelected}
      icon={protectIcon}
      themeColor="#991b1b"
    >
      <div className={styles.security}>
        <h3>Configuración de seguridad:</h3>
        <div className={styles.passwordSection}>
          <div className={styles.inputGroup}>
            <label>Contraseña:</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa una contraseña segura"
              className={styles.passwordInput}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Confirmar contraseña:</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirma la contraseña"
              className={styles.passwordInput}
            />
          </div>
        </div>
        <div className={styles.permissions}>
          <h4>Permisos:</h4>
          <label className={styles.checkboxOption}>
            <input 
              type="checkbox" 
              checked={permissions.print}
              onChange={(e) => setPermissions({...permissions, print: e.target.checked})}
            />
            <span>Permitir impresión</span>
          </label>
          <label className={styles.checkboxOption}>
            <input 
              type="checkbox" 
              checked={permissions.copy}
              onChange={(e) => setPermissions({...permissions, copy: e.target.checked})}
            />
            <span>Permitir copiar texto</span>
          </label>
          <label className={styles.checkboxOption}>
            <input 
              type="checkbox" 
              checked={permissions.modify}
              onChange={(e) => setPermissions({...permissions, modify: e.target.checked})}
            />
            <span>Permitir modificaciones</span>
          </label>
          <label className={styles.checkboxOption}>
            <input 
              type="checkbox" 
              checked={permissions.annotate}
              onChange={(e) => setPermissions({...permissions, annotate: e.target.checked})}
            />
            <span>Permitir anotaciones</span>
          </label>
        </div>
      </div>
      <div className={styles.features}>
        <h3>Características:</h3>
        <ul>
          <li>✅ Protección con contraseña</li>
          <li>✅ Control de permisos granular</li>
          <li>✅ Encriptación segura</li>
          <li>✅ Compatible con todos los lectores</li>
          <li>✅ Sin pérdida de calidad</li>
        </ul>
      </div>
    </ToolPage>
  );
};

export default ProtectPdf;