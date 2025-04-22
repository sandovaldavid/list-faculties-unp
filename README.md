# 📚 Sistema de Gestión de Facultades UNP

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Storage-4285F4?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)

> 🎓 Plataforma integral para la administración académica. Gestiona tus facultades de manera sencilla, moderna y eficiente.

![Version](https://img.shields.io/badge/Version-3.0.0-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/sandovaldavid/list-faculties-unp?style=flat-square)

## 📱 Demo

<div align="center">
  <h3>Vista Desktop</h3>
  <img src="images/mockups/desktop.png" alt="Vista Desktop" width="800"/>
  
  <h3>Vista Mobile</h3>
  <div style="display: flex; justify-content: center; gap: 20px;">
    <img src="images/mockups/mobile-2.png" alt="Vista Mobile 1" width="250"/>
    <img src="images/mockups/mobile.png" alt="Vista Mobile 2" width="250"/>
  </div>
</div>

## 🎯 Descripción General

Aplicación web para la gestión completa de facultades universitarias. Este proyecto proporciona una interfaz CRUD (Crear, Leer, Actualizar, Eliminar) con un diseño moderno, responsivo y optimizado para todos los dispositivos.

Desarrollado como parte del ecosistema académico de la Universidad Nacional de Piura (UNP), este sistema facilita la administración eficiente de la información de las diferentes facultades.

## ✨ Características

| Característica                | Descripción                                                                |
| ----------------------------- | -------------------------------------------------------------------------- |
| ✅ **Creación**               | Agrega nuevas facultades con imágenes y toda su información relevante      |
| 📖 **Visualización**          | Lista completa de facultades con tarjetas interactivas y página de detalle |
| 🔄 **Actualización**          | Edición completa de información e imágenes de facultades existentes        |
| 🗑️ **Eliminación**            | Eliminación segura con confirmación para prevenir errores                  |
| 📱 **Responsive**             | Diseño adaptable a cualquier dispositivo (móvil, tablet, escritorio)       |
| 🖼️ **Gestión de imágenes**    | Soporte para carga, actualización y optimización de imágenes               |
| 🌐 **API RESTful**            | Integración completa con endpoints para todas las operaciones              |
| 🚀 **Rendimiento optimizado** | Renderizado dinámico para máxima velocidad y estabilidad                   |

## 🛠️ Stack Tecnológico

<table>
  <tr>
    <th>Tecnología</th>
    <th>Propósito</th>
    <th>Versión</th>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js" alt="Next.js" /></td>
    <td>Framework Frontend & Backend</td>
    <td>14.2.5</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" /></td>
    <td>Base de Datos</td>
    <td>8.0</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></td>
    <td>Estilos y Diseño</td>
    <td>3.4.1</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" /></td>
    <td>Contenedores</td>
    <td>Latest</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-Cloudinary-4285F4?style=flat-square&logo=cloudinary&logoColor=white" alt="Cloudinary" /></td>
    <td>Almacenamiento de Imágenes</td>
    <td>API v2</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /></td>
    <td>UI Interactiva</td>
    <td>18+</td>
  </tr>
</table>

## 📋 Prerrequisitos

- ✅ Node.js ≥ 18 o Bun runtime
- ✅ Docker & Docker Compose (recomendado)
- ✅ MySQL 8.0
- ✅ npm o bun package manager

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/sandovaldavid/list-faculties-unp.git

# Navegar al directorio del proyecto
cd list-faculties-unp

# Instalar dependencias
npm install
# o con bun
bun install

# Iniciar contenedores Docker en modo desarrollo
docker-compose up web-dev -d

# Iniciar contenedores Docker en modo producción
docker-compose up web-prod -d

# Inicializar base de datos
docker exec -i db_facultades mysql -u user_facultades -ppassword < database/db.sql

# Ejecutar servidor de desarrollo
npm run dev
# o con bun
bun run dev
```

## 💾 Configuración de Base de Datos

El esquema de la base de datos incluye:

```sql
CREATE TABLE faculties (
    id          int primary key auto_increment,
    name        varchar(100) not null,
    description text,
    path_img    VARCHAR(255)
);
```

## 🔐 Variables de Entorno

Crea un archivo `.env` con:

```env
# Base de datos
DB_HOST=localhost
DB_USER=adm
DB_PASSWORD=adm
DB_DATABASE=facultades
DB_PORT=3306

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# URLs
NEXT_PUBLIC_BACKEND_URL=localhost:3000
NEXT_PUBLIC_VERCEL_URL=your-app.vercel.app
```

## 📁 Estructura del Proyecto

```
list-faculties-unp/
├── 📂 src/
│   ├── 📂 app/            # Páginas Next.js
│   ├── 📂 components/     # Componentes React
│   └── 📂 libs/           # Utilidades y configuraciones
├── 📂 database/           # Scripts de base de datos
├── 📂 docker/             # Configuración Docker
│   ├── 📂 deployment/     # Config para producción
│   └── 📂 development/    # Config para desarrollo
├── 📂 docs/               # Documentación
│   ├── 📄 release-v1.0.0.md
│   ├── 📄 release-v2.0.0.md
│   └── 📄 release-v3.0.0.md
└── 📂 public/             # Activos estáticos
```

## 🔄 Endpoints de la API

| Endpoint             | Método | Descripción                  | Auth |
| -------------------- | ------ | ---------------------------- | ---- |
| `/api/faculties`     | GET    | Obtener todas las facultades | No   |
| `/api/faculties`     | POST   | Crear nueva facultad         | No   |
| `/api/faculties/:id` | GET    | Obtener facultad por ID      | No   |
| `/api/faculties/:id` | PUT    | Actualizar facultad          | No   |
| `/api/faculties/:id` | DELETE | Eliminar facultad            | No   |

## 📝 Historial de Versiones

| Versión                            | Fecha      | Características                                                        |
| ---------------------------------- | ---------- | ---------------------------------------------------------------------- |
| [v3.0.0](./docs/release-v3.0.0.md) | Abril 2025 | Mejoras de rendimiento, optimización para Vercel, renderizado dinámico |
| [v2.0.0](./docs/release-v2.0.0.md) | Abril 2025 | Diseño responsivo mejorado, optimización de componentes                |
| [v1.0.0](./docs/release-v1.0.0.md) | Enero 2025 | Lanzamiento inicial con funcionalidades CRUD básicas                   |

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. 🍴 Haz un fork del repositorio
2. 🌿 Crea tu rama de características (`git checkout -b feature/CaracteristicaIncreible`)
3. 💾 Haz commit de tus cambios (`git commit -m 'Añadir alguna CaracteristicaIncreible'`)
4. 📤 Sube la rama (`git push origin feature/CaracteristicaIncreible`)
5. 📩 Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

## 👨‍💻 Autor

### [David Sandoval](https://github.com/sandovaldavid)

- 🌐 Portafolio: [devsandoval.me](https://devsandoval.me)
- 💼 LinkedIn: [@devsandoval](https://linkedin.com/in/devsandoval)
- 💻 GitHub: [@sandovaldavid](https://github.com/sandovaldavid)
- 📧 Email: [contact@devsandoval.me](mailto:contact@devsandoval.me)

---

Desarrollado por [@sandovaldavid](https://github.com/sandovaldavid)


> **Nota**: Este proyecto fue creado con fines educativos y de entretenimiento. Siéntete libre de
> utilizarlo y modificarlo según tus necesidades.
