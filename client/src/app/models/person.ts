export interface Person {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_id: string;
}

export interface PersonToAdd {
    first_name: string;
    last_name: string;
    email: string;
}

export interface SearchPerson extends Person {
  path: string;
}
