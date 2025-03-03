import { Timestamp as FirestoreTimestamp } from "firebase/firestore";

export interface BaseDocument {
    createdAt: FirestoreTimestamp;
    id: string;
}