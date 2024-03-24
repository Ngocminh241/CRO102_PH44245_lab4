import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TrackPlayer, { Capability, State } from 'react-native-track-player';

const Bai3 = () => {
  useEffect(() => {
    async function setup() {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SeekTo,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ]
      });
    }
    setup();

    return () => TrackPlayer.destroy();
  }, []);

  const getPlaybackState = async () => {
    return await TrackPlayer.getState();
  };

  const onTogglePlayTrack = async () => {
    const state = await getPlaybackState();
    if (state === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const onSeekTo = (toTime) => {
    TrackPlayer.seekTo(toTime);
  };

  const onSkipToNext = () => {
    TrackPlayer.skipToNext();
  };

  const onSkipToPrevious = () => {
    TrackPlayer.skipToPrevious();
  };

  return (
    <View style={styles.container}>
      <Text>Bai3</Text>
      <Button title="Toggle Play/Pause" onPress={onTogglePlayTrack} />
      <Button title="Skip To Next" onPress={onSkipToNext} />
      <Button title="Skip To Previous" onPress={onSkipToPrevious} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Bai3;
