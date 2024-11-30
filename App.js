import React from 'react';
import { SafeAreaView } from 'react-native';
import BMIScreen from './src/screens/BMIScreen';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BMIScreen />
        </SafeAreaView>
    );
};

export default App;
