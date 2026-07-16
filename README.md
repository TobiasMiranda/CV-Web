# CV Web — Tobias

Curriculum Web personal desarrollado con HTML, CSS y JavaScript vanilla.

## 🗂 Estructura

```
cv-web/
├── index.html        → Inicio: presentación, educación y habilidades
├── proyectos.html    → Portfolio de proyectos
├── contacto.html     → Información de contacto
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/             → Carpeta para tu foto y otras imágenes
```

## 🚀 Cómo subir a GitHub (paso a paso)

### 1. Crear cuenta en GitHub
Entrá a [github.com](https://github.com) y creá tu cuenta si no tenés.

### 2. Crear un repositorio
- Clic en **"New repository"** (botón verde)
- Nombre: `cv-web`
- Marcá **"Public"**
- NO marques "Add README" (ya tenemos este)
- Clic en **"Create repository"**

### 3. Subir los archivos (desde la web, sin instalar nada)
- En tu repositorio vacío, clic en **"uploading an existing file"**
- Arrastrá todos los archivos y carpetas del proyecto
- En "Commit changes" escribí: `Agrego CV web inicial`
- Clic en **"Commit changes"**

### 4. Activar GitHub Pages (para tener URL pública)
- Ir a **Settings** de tu repositorio
- En el menú izquierdo, clic en **Pages**
- En "Source" seleccioná **"Deploy from a branch"**
- Branch: **main** / Folder: **/ (root)**
- Clic en **Save**
- En unos minutos tu CV va a estar en: `https://tu-usuario.github.io/cv-web`

## ✏️ Cómo personalizar antes de subir

1. **Tu nombre:** Buscá "Tobias" y "Tu Apellido" en los HTML y reemplazá
2. **Tu foto:** Guardá tu foto en `/img/foto.jpg` y en `index.html` reemplazá el div `.hero-photo-placeholder` por:
   ```html
   <img src="img/foto.jpg" alt="Foto de Tobias" />
   ```
3. **Tu email:** Reemplazá `tu@email.com` en `contacto.html`
4. **Tu institución:** Actualizá el nombre en la sección de Educación en `index.html`
5. **Tus redes:** Reemplazá `tu-usuario` en todos los links de GitHub y LinkedIn

## 💡 Ideas de proyectos para poblar el GitHub

- `apuntes-redes`: subí tus apuntes de la materia en archivos .md
- `sistema-reservas`: subí las imágenes de tu DER y DFD con un README explicativo
- `cv-web`: ¡este mismo proyecto!
