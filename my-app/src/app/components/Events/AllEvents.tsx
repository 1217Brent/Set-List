import { getAllEvents } from "@/app/components/backend/firebaseFunctions";
import db from "../backend/firebaseConfig";
import { useState, useEffect } from "react";
import EventCards from "@/app/components/backend/collections/constants/EventConstants";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Text, View } from "react-native"; 

function AllEvents() {
    const [events, setEvents] = useState<EventCards[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response: EventCards[] = await getAllEvents(db);
                setEvents(response);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []); 

    return (
        <SafeAreaView>
            {events.map((field, index) => (
                <View key={index} style={{ marginBottom: 16 }}>
                    <Text>Name: {field.name}</Text>
                    <Text>Date: {field.date}</Text>
                    <Text>Location: {field.location}</Text>
                    <Text>Description: {field.description}</Text>
                </View>
            ))}
        </SafeAreaView>
    );
}

export default AllEvents;