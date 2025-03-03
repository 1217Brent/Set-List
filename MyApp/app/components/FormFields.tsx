import React, { useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

// Define the type for each card field
interface CardField {
  label: string;
  value: string;
}

// Define the type for the props the component will receive
interface FormFieldsProps {
  CARD_FIELDS: CardField[]; // Expecting an array of CardField objects
  userId: string;
}

const FormFields: React.FC<FormFieldsProps> = ({ userId, CARD_FIELDS }) => {
  // Use useEffect to iterate through ProfileCards and assign values based on the user prop
  useEffect(() => {
    // Log ProfileCards to ensure we're getting the correct prop
    console.log(CARD_FIELDS);
  }, [CARD_FIELDS, userId]); // Run effect when ProfileCards changes

  return (
    <SafeAreaView style={styles.container}>
      {CARD_FIELDS.map((field, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{field.label}</Text>
            <Text style={styles.cardText}>{field.value}</Text>
          </View>
        </View>
      ))}
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