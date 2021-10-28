/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import YouTube from 'react-native-youtube';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;

const App = () => {
  const [play, setPlay] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <View style={styles.container}>
      <YouTube
        videoId="KVZ-P-ZI6W4" // The YouTube video ID
        apiKey="AIzaSyB3elTHGudf-LMfJJcBEAg316JdXKCZqaE"
        play={play}
        fullscreen={fullScreen}
        loop
        style={styles.video}
        controls={2}
      />
      <View style={styles.row}>
        <AntDesign
          name={play ? 'pausecircle' : 'play'}
          color={'red'}
          size={25}
          onPress={() => setPlay(!play)}
        />

        <MaterialCommunityIcon
          name={'fullscreen'}
          color={'red'}
          size={25}
          onPress={() => setFullScreen(!fullScreen)}
        />
      </View>
      {fullScreen && (
        <View style={styles.fullScreenRow}>
        <AntDesign
          name={play ? 'pausecircle' : 'play'}
          color={'red'}
          size={25}
          onPress={() => setPlay(!play)}
        />

        <MaterialCommunityIcon
          name={'fullscreen'}
          color={'red'}
          size={25}
          onPress={() => setFullScreen(!fullScreen)}
        />
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  hide: {
    backgroundColor: 'red',
    height: 100,
    width: width,
    zIndex: -1,
    position: 'absolute',
  },
  video: {
    height: 300,
  },
  fullScreen: {
    height: width - 100,
  },
  row: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fullScreenRow: {
    marginHorizontal: 20,
    marginTop: -100,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
