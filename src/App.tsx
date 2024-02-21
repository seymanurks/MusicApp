import React from "react";
import {SafeAreaView, View, Text, FlatList, StyleSheet} from "react-native";
import music_data from "./music-data.json"
import SongCard from "./components/SongCard";

const App = () => {
  const renderSong = ({item}) => <SongCard song = {item}></SongCard>

  const renderSeperator = () => <View style = {styles.seperator}/>

  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.container}>
        <FlatList 
        data = {music_data}
        renderItem = {renderSong}
        ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  seperator: {
    borderWidth: 1,
    borderColor: "lightgray"
  }
})