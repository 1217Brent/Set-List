
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
interface EventCard {
    name: string;
    date: string;
    location: string;
    description: string;
}

const EventComponent: React.FC<EventCard> = ({ name, date, location, description }) => {
    return (
        <SafeAreaView>
            <Text>{name}</Text>
            <Text>{date}</Text>
            <Text>{location}</Text>
            <Text>{description}</Text>
        </SafeAreaView>
    );
}

export default EventComponent;