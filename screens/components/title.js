import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>quizz</Text>
    </View>
  );
};

export default title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: '600',
  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
