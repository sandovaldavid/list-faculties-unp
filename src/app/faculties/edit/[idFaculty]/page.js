import EditFacultyClientPage from './page-client';
import { generateBasicMetadata } from '@/libs/seoConfig';

export async function generateMetadata({ params }) {
    const facultyId = params.idFaculty;
    // Generamos los metadatos para la página de edición con el ID específico
    return generateBasicMetadata('editFaculty', { id: facultyId });
}

export default function EditFacultyPage(props) {
    return <EditFacultyClientPage {...props} />;
}
