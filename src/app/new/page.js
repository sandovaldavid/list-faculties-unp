import FacultyForm from '@/components/facultyForm';
import { generateBasicMetadata } from '@/libs/seoConfig';

export const metadata = generateBasicMetadata('newFaculty');

export default function NewPage() {
    return (
        <div className="flex justify-center items-center h-full">
            <FacultyForm />
        </div>
    );
}
