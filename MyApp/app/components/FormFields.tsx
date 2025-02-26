import React, { useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { CARD_FIELDS } from "../constants/ProfileCardConstants";

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
  //use useEffect to iterate through ProfileCards and assign values based on the user prop
  useEffect(() => {
    // Log ProfileCards to ensure we're getting the correct prop
    console.log(CARD_FIELDS);
  }, [CARD_FIELDS, userId]); // Run effect when ProfileCards changes



  return (
    <SafeAreaView style={styles.container}>
      {CARD_FIELDS.map((field, index) => (
        <SafeAreaView key={index} style={styles.cardField}>
          <View>
            <Text style={styles.label}>{field.label}</Text>
            <Text style={styles.value}>{field.value}</Text>
          </View>
        </SafeAreaView>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  cardField: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    color: "gray",
  },
});

export default FormFields;
