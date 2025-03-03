import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CARD_FIELDS } from "../constants/ProfileCardConstants";
import FormFields from "./FormFields";
function ProfileCard() {
    return (
        <SafeAreaView>
            <FormFields CARD_FIELDS={CARD_FIELDS} userId={""}/>
        </SafeAreaView>
    );
}

export default ProfileCard;