# Cine Premium - Sitio Web

Sitio web de tres páginas para un complejo cinematográfico que consume datos de una API JSON.

## Estructura del Proyecto

- **index.html** - Página principal con información del cine, características, video y galería
- **peliculas.html** - Página que muestra los datos JSON de la API (configuración, películas y resumen)
- **contacto.html** - Página de contacto y acerca de nosotros
- **styles.css** - Estilos compartidos para todas las páginas
- **script.js** - JavaScript para consumir la API y mostrar los datos

## Características

### Página 1 (index.html)
- Información sobre el cine
- Sección de características
- Video embebido de YouTube
- Galería de imágenes
- Diseño responsive y moderno

### Página 2 (peliculas.html)
- Consume datos de la API: `https://api.jsonbin.io/v3/b/692df727ae596e708f7d01b4`
- Muestra configuración del cine (salas, películas, asientos)
- Lista todas las películas con sus detalles
- Muestra resumen con estadísticas y última actualización
- Formato de números y moneda en español

### Página 3 (contacto.html)
- Formulario de contacto
- Información de contacto (dirección, teléfono, email, horarios)
- Sección "Acerca de Nosotros"

## Cómo usar

1. Abre `index.html` en tu navegador
2. Navega entre las páginas usando el menú de navegación
3. La página de películas cargará automáticamente los datos de la API

## Hosting

Para hostear el sitio web hasta el 1 de enero de 2026, puedes usar cualquiera de estas opciones:

### Opciones Gratuitas:

1. **GitHub Pages**
   - Sube los archivos a un repositorio de GitHub
   - Activa GitHub Pages en la configuración del repositorio
   - El sitio estará disponible en `https://tuusuario.github.io/nombre-repo`

2. **Netlify**
   - Arrastra la carpeta del proyecto a netlify.com
   - O conecta tu repositorio de GitHub
   - Despliegue automático y gratuito

3. **Vercel**
   - Similar a Netlify, muy fácil de usar
   - Despliegue gratuito con dominio personalizado

4. **Firebase Hosting**
   - Servicio gratuito de Google
   - Instrucciones: https://firebase.google.com/docs/hosting

5. **000webhost / InfinityFree**
   - Hosting gratuito tradicional
   - Sube los archivos vía FTP

### Pasos para GitHub Pages (Recomendado):

```bash
# 1. Inicializa un repositorio git
git init
git add .
git commit -m "Sitio web Cine Premium"

# 2. Crea un repositorio en GitHub y conéctalo
git remote add origin https://github.com/tuusuario/cine-premium.git
git push -u origin main

# 3. En GitHub, ve a Settings > Pages
# 4. Selecciona la rama main y la carpeta /root
# 5. Tu sitio estará disponible en unos minutos
```

## Notas

- El sitio es completamente estático (HTML, CSS, JS)
- No requiere servidor backend
- La API se consume directamente desde el navegador
- Compatible con todos los navegadores modernos
- Diseño responsive (se adapta a móviles y tablets)

## Tecnologías Utilizadas

- HTML5
- CSS3 (con Grid y Flexbox)
- JavaScript (ES6+)
- Fetch API para consumo de datos
