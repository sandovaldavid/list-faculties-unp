import FacultyPageClient from './page-client';
import { generateBasicMetadata } from '@/libs/seoConfig';

export async function generateMetadata({ params }) {
  const facultyId = params.idFaculty;
  // Generamos los metadatos básicos usando el ID de la facultad como parámetro
  return generateBasicMetadata('facultyDetail', { id: facultyId });
}

export default function FacultyPage(props) {
  return <FacultyPageClient {...props} />;
}