import { SafeAreaView } from "react-native-safe-area-context";
import FormFields from "./FormFields";

interface ProfileCardProps {
    userId: string;
    name: string;
    age: string;
    genre: string[]; // Array of strings
    instrument: string;
    description: string;
}

function ProfileCard({ userId, name, age, genre, instrument, description }: ProfileCardProps) {
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
        </SafeAreaView>
    );
}

export default ProfileCard;
