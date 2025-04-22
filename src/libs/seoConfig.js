// Configuración SEO centralizada
const SITE_URL = "https://facultades-unp.devsandoval.me";
const SITE_NAME = "Sistema de Gestión de Facultades | UNP";
const DEFAULT_DESCRIPTION = "Sistema CRUD para gestionar facultades de la Universidad Nacional de Piura. Crea, lee, actualiza y elimina información académica.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/og-faculties-unp.png`;
const AUTHOR = "David Sandoval";
const TWITTER_HANDLE = "@dev_sandoval";
const LOCALE = "es_PE";

// Configuración para páginas específicas
const PAGE_METADATA = {
  home: {
    title: "Inicio | Sistema de Gestión de Facultades UNP",
    description: "Página de inicio del sistema de gestión de facultades de la Universidad Nacional de Piura.",
    path: "/",
  },
  faculties: {
    title: "Facultades | Sistema de Gestión de Facultades UNP",
    description: "Explora todas las facultades de la Universidad Nacional de Piura en nuestro sistema de gestión académica.",
    path: "/faculties",
  },
  facultyDetail: {
    title: "Detalles de Facultad | Sistema de Gestión de Facultades UNP",
    description: "Información detallada sobre una facultad específica de la Universidad Nacional de Piura.",
    path: "/faculties/:id",
  },
  newFaculty: {
    title: "Nueva Facultad | Sistema de Gestión de Facultades UNP",
    description: "Crear una nueva facultad en el sistema de gestión académica de la Universidad Nacional de Piura.",
    path: "/new",
  },
  editFaculty: {
    title: "Editar Facultad | Sistema de Gestión de Facultades UNP",
    description: "Modificar la información de una facultad existente en el sistema de la Universidad Nacional de Piura.",
    path: "/faculties/edit/:id",
  },
  about: {
    title: "Acerca de | Sistema de Gestión de Facultades UNP",
    description: "Información sobre el sistema de gestión de facultades de la Universidad Nacional de Piura.",
    path: "/about",
  },
};

// Función para generar URL canónicas
const getCanonicalUrl = (path) => {
  // Asegura que la URL no tenga barras dobles
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
};

// Función para generar metadatos básicos
const generateBasicMetadata = (pageKey, params = {}) => {
  const page = PAGE_METADATA[pageKey];
  if (!page) return {};
  
  // Procesa paths que contienen parámetros
  let path = page.path;
  if (params) {
    Object.keys(params).forEach(key => {
      path = path.replace(`:${key}`, params[key]);
    });
  }
  
  const canonicalUrl = getCanonicalUrl(path);
  
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: LOCALE,
      type: "website",
      images: [{
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${page.title} - Universidad Nacional de Piura`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      images: [DEFAULT_OG_IMAGE],
    },
  };
};

export {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  AUTHOR,
  TWITTER_HANDLE,
  LOCALE,
  generateBasicMetadata,
  getCanonicalUrl,
};