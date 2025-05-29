# Reglas de Desarrollo - iHatePDF 📋

## Estructura y Organización

1. **Estructura de carpetas consistente**
   - Componentes reutilizables en `/src/components`
   - Páginas en `/src/pages`
   - Utilidades y helpers en `/src/utils`
   - Hooks personalizados en `/src/hooks`
   - Estilos globales en `/src/styles`

2. **Nomenclatura**
   - Componentes: PascalCase (ej. `FileUploader.jsx`)
   - Funciones y variables: camelCase (ej. `handleFileUpload`)
   - Constantes globales: UPPER_SNAKE_CASE (ej. `MAX_FILE_SIZE`)
   - Archivos de utilidades: camelCase (ej. `pdfUtils.js`)

3. **Importaciones ordenadas**
   - Primero bibliotecas externas
   - Luego componentes internos
   - Después utilidades y hooks
   - Finalmente estilos

## Estilo de Código

1. **Formateo**
   - Usar 2 espacios para indentación

2. **Comentarios**
   - Comentar funciones complejas
   - Documentar APIs y interfaces públicas
   - Evitar comentarios obvios
   - Usar JSDoc para funciones importantes

3. **Estilo React**
   - Usar JSX sintaxis
   - Usar para estilos el .module.css para estilos locales
   - Preferir componentes funcionales y hooks
   - Un componente por archivo
   - Destructurar props
   - Evitar props drilling (usar Context cuando sea necesario)

## Rendimiento y Optimización

1. **Manejo de archivos PDF**
   - Limitar tamaño máximo de archivos (ej. 50MB)
   - Procesar archivos grandes de forma asíncrona
   - Implementar compresión cuando sea posible
   - Mostrar progreso para operaciones largas

2. **Optimización de React**
   - Usar React.memo para componentes que renderizan frecuentemente
   - Implementar useMemo y useCallback para funciones y valores computados
   - Lazy loading para componentes pesados
   - Evitar re-renders innecesarios

3. **Carga de recursos**
   - Optimizar imágenes y assets
   - Implementar lazy loading para recursos grandes
   - Considerar estrategias de caching para archivos procesados

## Seguridad

1. **Manejo de archivos**
   - Validar tipos de archivos antes de procesarlos
   - No almacenar información sensible de los PDFs
   - Implementar límites de tamaño y cantidad de archivos

2. **Procesamiento local**
   - Procesar todo en el cliente cuando sea posible
   - No enviar datos a servidores externos sin consentimiento
   - Borrar archivos temporales después de su uso

## Testing

1. **Pruebas unitarias**
   - Probar componentes clave de la UI
   - Mantener cobertura de código para funcionalidades críticas

2. **Pruebas de integración**
   - Probar flujos completos (subida → procesamiento → descarga)
   - Verificar compatibilidad con diferentes tipos de PDFs
   - Probar casos límite (archivos muy grandes, formatos inusuales)

## Control de Versiones

1. **Commits**
   - Mensajes descriptivos y concisos
   - Un cambio lógico por commit

2. **Ramas**
   - `main`: código de producción
   - `develop`: desarrollo activo
   - `feature/nombre`: nuevas características
   - `fix/nombre`: correcciones de bugs

## Accesibilidad

1. **Estándares**
   - Seguir WCAG 2.1 nivel AA cuando sea posible
   - Asegurar navegación por teclado
   - Proporcionar textos alternativos para elementos visuales
   - Mantener contraste adecuado

2. **Experiencia de usuario**
   - Mensajes de error claros y útiles
   - Indicadores de progreso para operaciones largas
   - Diseño responsive para todos los tamaños de pantalla
   - Soporte para modo oscuro

## Bibliotecas y Dependencias

1. **Gestión de dependencias**
   - Mantener dependencias actualizadas
   - Evitar bibliotecas abandonadas o poco mantenidas
   - Preferir bibliotecas con buena documentación y comunidad activa
   - Evaluar el tamaño de las dependencias antes de incluirlas

2. **Bibliotecas recomendadas**
   - PDF.js para visualización
   - pdf-lib para manipulación
   - react-dropzone para subida de archivos