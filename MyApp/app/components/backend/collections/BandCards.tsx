import { BaseDocument } from "./BaseDocument";

interface BandCards extends BaseDocument{
    name: string;
    genre: Array<String>;
    description: string;
}

export default BandCards;
