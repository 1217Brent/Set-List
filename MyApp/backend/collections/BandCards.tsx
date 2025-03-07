import { BaseDocument } from "./BaseDocument";

export interface BandCards extends BaseDocument{
    name: string;
    genre: Array<String>;
    description: string;
}
