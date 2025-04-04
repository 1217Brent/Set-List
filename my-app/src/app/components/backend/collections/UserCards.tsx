import { BaseDocument } from "./BaseDocument";

interface UserCards extends BaseDocument{
    name: string;
    age: number;
    genre: string[];
    email: string;
    description: string;
    userId: string;
    instrument: string;
}

export default UserCards;