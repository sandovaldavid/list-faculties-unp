'use client';

import { DEFAULT_OG_IMAGE, getCanonicalUrl } from '@/libs/seoConfig';
import Head from 'next/head';
import FacultyForm from '@/components/facultyForm';

function EditFacultyClientPage({ params }) {
    const facultyId = params.idFaculty;

    // Construir URL canónica dinámica usando la función centralizada
    const canonicalUrl = getCanonicalUrl(`/faculties/edit/${facultyId}`);

    return (
        <>
            <Head>
                <title>Editar Facultad | Sistema de Gestión de Facultades UNP</title>
                <meta
                    name="description"
                    content={`Página de edición para la facultad con ID ${facultyId}`}
                />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Editar Facultad | Sistema de Gestión de Facultades UNP"
                />
                <meta
                    property="og:description"
                    content={`Página de edición para la facultad con ID ${facultyId}`}
                />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={DEFAULT_OG_IMAGE} />
                <meta
                    property="og:image:alt"
                    content="Edición de facultad - Universidad Nacional de Piura"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Editar Facultad | Sistema de Gestión de Facultades UNP"
                />
                <meta
                    name="twitter:description"
                    content={`Página de edición para la facultad con ID ${facultyId}`}
                />
                <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
                <meta
                    name="twitter:image:alt"
                    content="Edición de facultad - Universidad Nacional de Piura"
                />
            </Head>

            <div className="flex justify-center items-center h-full">
                <FacultyForm />
            </div>
        </>
    );
}

export default EditFacultyClientPage;
