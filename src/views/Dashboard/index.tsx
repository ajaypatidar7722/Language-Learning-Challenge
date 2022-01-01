import React from 'react';
import { View } from 'react-native';
import TranslationExercise from '../TranslationExercise';
import { styles } from './styles';

const Dashboard = () => {
  return (
    <View style={styles.root}>
      <TranslationExercise />
    </View>
  );
};

export default Dashboard;
