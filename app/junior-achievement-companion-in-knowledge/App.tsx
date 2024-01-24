import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppRootStack} from "./src/app/commons/navigation/RootNavigationStack";

export default function App() {
  return (
      <View style={{flex: 1}}>
        <AppRootStack/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
