import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = ({navigation, route}) => {
  const params = route.params;
  console.log(params);
  return (
    <View>
      <Text>result</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            url: 'https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text>home</Text>
        </TouchableOpacity>
      </View>
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
  },
  button: {
    backgroundColor: '#800080',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
    maxWidth: '25%',
    alignSelf: 'center',
  },
});
