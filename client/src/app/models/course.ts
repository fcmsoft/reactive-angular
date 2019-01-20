
import { Observable } from 'rxjs';
import { Person } from './person';

export interface Course {
    id: String;
    title: String;
    short_description: String;
    detail: String;
    active: boolean;
    teacher?: String;
    teacherDetails?: {} | Person;
    students: Array<String>;
    studentsDetails?: Array<Observable<Person>>;
}
