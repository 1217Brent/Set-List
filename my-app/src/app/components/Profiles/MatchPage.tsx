import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import ProfileCard from "./ProfileCard";
import { getAllEvents, getAllUserCards } from "../backend/firebaseFunctions";
import db from "../backend/firebaseConfig";

interface UserCard {
    id: string;
    name: string;
    genre: Array<String>;
    instrument: string;
    description: string;
}

interface BandCard {
    name: string;
    genre: Array<String>;
    description: string;
}

function MatchPage() {
    const [allCards, setAllCards] = useState<UserCard[]>([]);
    const [allBands, setAllBands] = useState<BandCard[]>([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const initial_cards = await getAllUserCards(db);
                const initial_bands = await getAllEvents(db);
                const formattedCards: UserCard[] = initial_cards.map((card: any) => ({
                    id: card.id || "",
                    name: card.name || "Unknown",
                    genre: Array.isArray(card.genre) ? card.genre : [card.genre],
                    instrument: card.instrument || "Unknown",
                    description: card.description || "No description",
                }));
                const formattedBands: BandCard[] = initial_bands.map((card: any) => ({
                    name: card.name || "Unknown",
                    genre: Array.isArray(card.genre) ? card.genre : [card.genre],
                    description: card.description || "No description",
                }));

                setAllCards(formattedCards);
                setAllBands(formattedBands);
            } catch (error) {
                console.error("Error fetching user cards & bands:", error);
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
                        genre={userCard.genre.join(", ")} // Convert array to string
                        instrument={userCard.instrument}
                        description={userCard.description}
                        age={""} // Handle age appropriately
                    />
                </View>
            ))}
            {allBands.map((band, index) => (
                <View key={index}>
                    <Text>{band.name}</Text>
                    <Text>{band.genre.join(", ")}</Text>
                    <Text>{band.description}</Text>
                </View>
            ))}
        </SafeAreaView>
    );
}

export default MatchPage;