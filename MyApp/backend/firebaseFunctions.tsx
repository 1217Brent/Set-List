import { Firestore, QueryDocumentSnapshot, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { UserCards } from "./collections/UserCards";
import { getDocs } from "firebase/firestore";
import EventCards from "@/app/constants/EventConstants";
import { BandCards } from "./collections/BandCards";

const COLLECTION_NAME = "user-cards"; 
const EVENT_COLLECTION_NAME = "events";
const BAND_COLLECTION_NAME = "band-cards";

export const getUserCard = async (db: Firestore, id: string): Promise<UserCards | null> => {
    const docRef = doc(collection(db, COLLECTION_NAME), id); 
    const snapshot = await getDoc(docRef); 

    if (snapshot.exists()) { 
        return snapshot.data() as UserCards; 
    } else {
        console.log(`UserCard with ID ${id} not found`);
        return null;
    }
};
export const getAllUserCards = async (db: Firestore): Promise<UserCards[]> => {
    const userCardsCollection = collection(db, COLLECTION_NAME);
    try {
        const querySnapshot = await getDocs(userCardsCollection);
        const userCards: UserCards[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => {
            return doc.data() as UserCards;
        });
        console.log("Fetched all user cards successfully.");
        return userCards;
    } catch (error) {
        console.error("Could Not Fetch All Users:", error);
        throw new Error("Could Not Fetch All Users");
    }
};

export const getAllEvents = async (db: Firestore): Promise<EventCards[]> => {
    const eventCollection = collection(db, EVENT_COLLECTION_NAME);
    try {
        const querySnapshot = await getDocs(eventCollection);
        const events: EventCards[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => {
            return doc.data() as EventCards;
        });
        console.log("Fetched all events successfully.");
        return events;
    } catch (error) {
        console.error("Could Not Fetch All Events:", error);
        throw new Error("Could Not Fetch All Events");
    }
}; 

export const getAllBandCards = async (db: Firestore): Promise<BandCards[]> => {
    const bandCollection = collection (db, BAND_COLLECTION_NAME);
    try {
        const querySnapshot = await getDocs(bandCollection)
        const bands: BandCards[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => {
            return doc.data() as BandCards;
        })
        return bands;
    } catch (error) {
        throw new Error("Could not fetch bands");
    }
}

export const updateUserCard = async (db: Firestore, id: string, updates: Partial<UserCards>) => {
    const docRef = doc(collection(db, COLLECTION_NAME), id);
    try {
        await updateDoc(docRef, updates);
    }
    catch (error) {
        console.log("Update User Card Error:", error);
    }
}