import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Model,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const DATA = [{id: 1, text: 'Item One'}];

const App = () => {
  const [data, setdata] = useState(DATA);
  const [isRender, setisRender] = useState(false);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>
          Welcom to React Native, My Name is OUM SOKNANG.
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        extraData={isRender}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    alignItems: 'center',
  },
  text: {
    marginVertical: 30,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default App;
