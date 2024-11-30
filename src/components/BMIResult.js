import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BMIResult = ({ bmi }) => {
    const getBMICategory = (bmi) => {
        if (bmi < 18.5) return "Underweight";
        if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
        if (bmi >= 25 && bmi < 29.9) return "Overweight";
        return "Obesity";
    };

    return (
        <View style={styles.container}>
            <Text style={styles.bmiText}>Your BMI: {bmi.toFixed(1)}</Text>
            <Text style={styles.categoryText}>Category: {getBMICategory(bmi)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },
    bmiText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    categoryText: {
        fontSize: 18,
        color: '#555',
    },
});

export default BMIResult;
