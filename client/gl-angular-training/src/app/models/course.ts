import { Teacher } from './teacher';
import { Student } from './student';
import { Observable } from 'rxjs/Observable';

export interface Course {
    id: String;
    title: String;
    short_description: String;
    detail: String;
    active: Boolean;
    teacher?: String;
    teacherDetails?: {} | Teacher;
    students: Array<String>;
    studentsDetails?: Array<Observable<Student>>;
}
