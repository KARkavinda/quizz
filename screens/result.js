import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from './components/title';

const Result = ({navigation, route}) => {
  const params = route.params;
  const {score} = route.params;
  console.log(params);

  const resultBanner =
    score > 40
      ? 'https://cdni.iconscout.com/illustration/premium/thumb/business-victory-3142053-2617867.png?f=webp'
      : 'https://cdni.iconscout.com/illustration/premium/preview/fail-start-up-business-8705433-7016262.png?f=webp&h=700';

  return (
    <View style={styles.container}>
      <Title titleText="RESULTS" />
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    padding: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#800080',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
  },
});
