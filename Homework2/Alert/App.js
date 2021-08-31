import React from 'react';
import {View, SafeAreaView, StyleSheet, Button} from 'react-native';

const App = () => {
  const simpleAlert = () => {
    alert('Alert Successful');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Button title="Simple Alert" onPress={simpleAlert} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
