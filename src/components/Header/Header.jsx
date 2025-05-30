import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Detectar el modo oscuro al cargar
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmenuEnter = (menu) => {
    setActiveSubmenu(menu);
  };

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
  };

  // Cerrar menú al presionar Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (menuOpen) setMenuOpen(false);
        if (activeSubmenu) setActiveSubmenu(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [menuOpen, activeSubmenu]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="/home">
            <img 
              src={isDarkMode ? "/src/assets/i-hate-pdf-blanco.svg" : "/src/assets/i-hate-pdf-negro.svg"}
              alt="iHatePDF Logo" 
              className={styles.logo} 
            />
          </a>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li 
              className={styles.navItem} 
              onMouseEnter={() => handleSubmenuEnter('convertir')}
              onMouseLeave={handleSubmenuLeave}
            >
              <a href="#" className={styles.navLink} aria-haspopup="true" aria-expanded={activeSubmenu === 'convertir'}>Convertir</a>
              {activeSubmenu === 'convertir' && (
                <div className={styles.submenu}>
                  <ul className={styles.submenuList}>
                    <li><a href="/pdf-to-word" className={styles.submenuLink}>PDF a Word</a></li>
                    <li><a href="/pdf-to-excel" className={styles.submenuLink}>PDF a Excel</a></li>
                    <li><a href="/pdf-to-powerpoint" className={styles.submenuLink}>PDF a PowerPoint</a></li>
                    <li><a href="/pdf-to-image" className={styles.submenuLink}>PDF a JPG/PNG</a></li>
                  </ul>
                </div>
              )}
            </li>
            <li className={styles.navItem}>
              <a href="/compress-pdf" className={styles.navLink}>Comprimir</a>
            </li>
            <li className={styles.navItem}>
              <a href="/split-pdf" className={styles.navLink}>Dividir</a>
            </li>
            <li className={styles.navItem}>
              <a href="/merge-pdf" className={styles.navLink}>Combinar</a>
            </li>
            <li className={styles.navItem}>
              <a href="/protect-pdf" className={styles.navLink}>Proteger</a>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <button 
            className={styles.menuToggle} 
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Menú principal"
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
        </div>
      </div>
    </header>
  );
}