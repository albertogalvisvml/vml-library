# 📘 VML Library - Documentación de Proyectos

Este repositorio contiene la documentación de los proyectos de la agencia **VML**, organizada por clientes y versiones. Utilizamos **Docusaurus** para estructurar y visualizar la documentación.

## 🚀 Instalación en Local


### Clonar el Repositorio
```bash
git clone https://github.com/albertogalvisvml/vml-library.git
cd vml-library
```

### Instalar Dependencias
```bash
npm install
```

### Iniciar el Servidor Local
```bash
npm run start
```
Esto ejecutará el sitio en [`http://localhost:3000`](http://localhost:3000).

## 🏗️ Estructura del Proyecto

```
vml-library/
│── docs/                # Documentación organizada por clientes y versiones
│── static/              # Archivos estáticos como imágenes o PDFs
│── src/                 # Código fuente de Docusaurus
│── docusaurus.config.js  # Configuración principal del sitio
│── sidebars.ts          # Definición de la barra lateral de navegación
│── package.json         # Dependencias del proyecto
└── README.md            # Este archivo
```

## Actualizar Documentación
Para agregar o modificar documentación:
1. Edita o crea archivos `.md` dentro de `docs/`.
2. Si es necesario, actualiza `sidebars.ts` para reflejar cambios en la navegación.
3. Reinicia el servidor local con:
   ```bash
   npm run start
   ```
