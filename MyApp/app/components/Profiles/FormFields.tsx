import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import CARD_FIELDS from "@/app/constants/ProfileCardConstants";

const FormFields: React.FC<CARD_FIELDS> = ({ userId, name, age, genre, instrument, description }) => {
  const [card, setCard] = useState<CARD_FIELDS>({
    userId: "",
    name: "",
    age: "",
    genre: [],
    instrument: "",
    description: "",
  });

  useEffect(() => {
    setCard({ userId, name, age, genre, instrument, description });
  }, [userId, name, age, genre, instrument, description]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{card.name}</Text>
          <Text style={styles.cardText}>Age: {card.age}</Text>
          <Text style={styles.cardText}>Genre: {card.genre.join(", ")}</Text>
          <Text style={styles.cardText}>Instrument: {card.instrument}</Text>
          <Text style={styles.cardText}>Description: {card.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  cardBody: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: "#555",
  },
});

export default FormFields;
