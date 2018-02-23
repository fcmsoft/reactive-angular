import { Person } from './person';
import { Profile } from './profile';
import { Course } from './course';
import { Observable } from 'rxjs/Observable';

export interface Teacher extends Person {
    profile: Profile;
    courses: Array<Course>;
}
