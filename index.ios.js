import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from './src/components/welcome'
import Question from './src/components/question'
import Results from './src/components/results';

const QuizApp = StackNavigator({
  Home: { screen: Welcome },
  Question: { screen: Question },
  Results: { screen: Results },
});

AppRegistry.registerComponent('QuizApp', () => QuizApp);
