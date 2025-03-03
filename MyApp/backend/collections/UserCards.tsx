import { BaseDocument } from "./BaseDocument";

export interface UserCards extends BaseDocument{
    name: string;
    age: number;
    genre: Array<String>;
    description: string;
    instrument: string;
}
