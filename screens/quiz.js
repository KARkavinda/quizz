import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useEffect} from 'react';
import {useState} from 'react';

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
  };
  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q. {decodeURIComponent(questions[ques].question)}
            </Text>
          </View>

          <View style={styles.options}>
            <View>
              <TouchableOpacity style={styles.optionBution}>
                <Text style={styles.option}>option 1</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.optionBution}>
                <Text style={styles.option}>option 1</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.optionBution}>
                <Text style={styles.option}>option 1</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.optionBution}>
                <Text style={styles.option}>option 1</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottom}>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>skip</Text>
              </TouchableOpacity>
            </View>
            <View>
              {ques != 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}>
                  <Text style={styles.buttonText}>next</Text>
                </TouchableOpacity>
              )}
              {ques == 9 && (
                <TouchableOpacity style={styles.button} onPress={null}>
                  <Text style={styles.buttonText}>Show Results</Text>
                </TouchableOpacity>
              )}
            </View>
            {/* <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Result')}
            style={styles.button}>
            <Text style={styles.buttonText}> END</Text>
          </TouchableOpacity>
        </View> */}
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#800080',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
  },
  optionBution: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#ADD8E6',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});
