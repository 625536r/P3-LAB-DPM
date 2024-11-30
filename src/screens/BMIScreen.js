import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import BMIResult from '../components/BMIResult';
import styles from '../styles/BMIStyles';

const BMIScreen = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState(null);

    const calculateBMI = () => {
        const h = parseFloat(height) / 100; // Convert height to meters
        const w = parseFloat(weight);
        if (h > 0 && w > 0) {
            setBMI(w / (h * h));
        } else {
            alert('Please enter valid height and weight!');
        }
    };

    const resetInputs = () => {
        setHeight('');
        setWeight('');
        setBMI(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>BMI Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Height (cm)"
                keyboardType="numeric"
                value={height}
                onChangeText={(value) => setHeight(value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Weight (kg)"
                keyboardType="numeric"
                value={weight}
                onChangeText={(value) => setWeight(value)}
            />
            <View style={styles.buttonContainer}>
                <Button title="Calculate" onPress={calculateBMI} />
                <Button title="Reset" onPress={resetInputs} color="#d9534f" />
            </View>
            {bmi !== null && <BMIResult bmi={bmi} />}
        </View>
    );
};

export default BMIScreen;
