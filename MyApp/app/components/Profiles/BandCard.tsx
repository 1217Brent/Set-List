
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { useState } from "react";
import { useEffect } from "react";

interface Band {
    name: string;
    genre: Array<String>;
    members: Array<String>;
}


// template for the band card

function BandCard({name, genre, members}: Band) {
    const [card, setCard] = useState<Band>({
        name: "",
        genre: [""],
        members: [""]
    });
    useEffect(() => {
        setCard({
            name: name,
            genre: genre,
            members: members,
        })
    },[])
    return (
        <SafeAreaView>
            <Text>{card.name}</Text>
            <Text>{card.genre}</Text>
            <Text>{card.members}</Text>
        </SafeAreaView>
    );
}

export default BandCard;