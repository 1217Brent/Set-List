import { getAllUserCards } from "@/backend/firebaseFunctions";
import { useState, useEffect } from "react";
import db from "../../../backend/firebaseConfig";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import ProfileCard from "./ProfileCard";

interface UserCard {
    id: string;
    name: string;
    genre: string[]; // Ensure ProfileCard supports an array or modify it below
    instrument: string;
    description: string;
}

function MatchPage() {
    const [allCards, setAllCards] = useState<UserCard[]>([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const initial_cards = await getAllUserCards(db);

                const formattedCards: UserCard[] = initial_cards.map((card: any) => ({
                    id: card.id || "",
                    name: card.name || "Unknown",
                    genre: Array.isArray(card.genre) ? card.genre : [card.genre], 
                    instrument: card.instrument || "Unknown",
                    description: card.description || "No description",
                }));

                setAllCards(formattedCards);
            } catch (error) {
                console.error("Error fetching user cards:", error);
            }
        };

        fetchCards();
    }, []);

    return (
        <SafeAreaView>
            {allCards.map((userCard) => (
                <View key={userCard.id}>
                    <ProfileCard 
                        userId={userCard.id}
                        name={userCard.name}
                        genre={userCard.genre} // Convert array to string if needed
                        instrument={userCard.instrument}
                        description={userCard.description} age={""}                    />
                </View>
            ))}
        </SafeAreaView>
    );
}

export default MatchPage;
