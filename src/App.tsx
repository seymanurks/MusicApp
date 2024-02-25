import React, {useState} from "react";
import {SafeAreaView, View, Text, FlatList, StyleSheet} from "react-native";
import music_data from "./music-data.json"
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const renderSong = ({item}) => <SongCard song = {item}></SongCard>
  const renderSeperator = () => <View style = {styles.seperator}/>
  const [list, setList] = useState(music_data)

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase()
      const songTitle = song.title.toLowerCase()

      return songTitle.indexOf(searchedText) > -1
    })
    setList(filteredList)
  }

  return(
    <SafeAreaView style = {styles.container}>
        <SearchBar onSearch={handleSearch}/>
        <FlatList 
        data = {list}
        renderItem = {renderSong}
        ItemSeparatorComponent={renderSeperator}
        />

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