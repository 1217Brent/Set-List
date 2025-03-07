import { SafeAreaView } from "react-native-safe-area-context";
import FormFields from "./FormFields";
import { Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// Define your navigation parameter list
type RootStackParamList = {
  ProfileCard: undefined;
  Chat: undefined;
  // Add other routes here if needed
};

interface ProfileCardProps {
    userId: string;
    name: string;
    age: string;
    genre: string[];
    instrument: string;
    description: string;
}

function ProfileCard({ userId, name, age, genre, instrument, description }: ProfileCardProps) {
    // Specify the type for useNavigation
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    function handleNavigation() {
        navigation.navigate('Chat'); // Ensure 'Chat' is a valid route name in your navigator
    }

    return (
        <SafeAreaView>
            <FormFields 
                userId={userId} 
                name={name} 
                age={age}
                genre={genre} 
                instrument={instrument} 
                description={description}  
            />
            <Button title="Send Message!" onPress={handleNavigation} />
        </SafeAreaView>
    );
}

export default ProfileCard;