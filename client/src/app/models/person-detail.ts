import { Person } from './person';
import { Profile } from './profile';
import { Course } from './course';


export interface PersonDetail extends Person {
    profile: Profile;
    courses?: Array<Course>;
}
