/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import YouTube from 'react-native-youtube';

const width = Dimensions.get('window').width;

const App = () => {
  return (
    <View>
      <YouTube
        videoId="KVZ-P-ZI6W4" // The YouTube video ID
        apiKey="AIzaSyB3elTHGudf-LMfJJcBEAg316JdXKCZqaE"
        play // control playback of video with true/false
        fullscreen={false} // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        // onReady={e => this.setState({isReady: true})}
        // onChangeState={e => this.setState({status: e.state})}
        // onChangeQuality={e => this.setState({quality: e.quality})}
        // onError={e => this.setState({error: e.error})}
        style={{alignSelf: 'stretch', height: 300}}
      />
      <View style={styles.hide} />
    </View>
  );
};

const styles = StyleSheet.create({
  hide: {
    backgroundColor: 'red',
    height: 100,
    width: width,
    zIndex: -1,
    position: 'absolute'
  },
});

export default App;
