import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
});
