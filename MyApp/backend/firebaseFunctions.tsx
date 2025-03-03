//I want a function that fetches, deletes, and updates
import { Firestore, collection, doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { UserCards } from "./collections/UserCards";

const COLLECTION_NAME = "user-cards"; // Collection name in Firestore

export const getUserCard = async (db: Firestore, id: string): Promise<UserCards | null> => {
    const docRef = doc(collection(db, COLLECTION_NAME), id); //you are getting the document reference
    const snapshot = await getDoc(docRef); //using the document reference you get the document

    if (snapshot.exists()) { //
        return snapshot.data() as UserCards; //retuning the snapshot data and checking if it is the interface UserCards
    } else {
        console.log(`UserCard with ID ${id} not found`);
        return null;
    }
};

export const updateUserCard = async (db: Firestore, id: string, updates: Partial<UserCards>) => {
    const docRef = doc(collection(db, COLLECTION_NAME), id);
    try {
        await updateDoc(docRef, updates);
    }
    catch (error) {
        console.log("Update User Card Error:", error);
    }
}