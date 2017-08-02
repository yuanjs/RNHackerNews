/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
//import { Examples } from '@shoutem/ui';
import App from './src/app';

export default class HackerNews extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('HackerNews', () => HackerNews);
