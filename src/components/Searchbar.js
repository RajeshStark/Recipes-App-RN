import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Searchbar, Appbar, Card, Title, Button, IconButton, Colors } from 'react-native-paper';
import axios from 'axios'

export default function SearchComponent({navigation}) {

  const [searchQuery, setSearchQuery] = useState();
  const [mealdata, setMealdata] = useState([]);

  const Submit = async function () {
    const result = await axios('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchQuery);
 
    const modifiedData = result.data
    setMealdata(modifiedData.meals)

  };

  const _onChangeSearch = query => setSearchQuery(query);
 
  if(mealdata == null || ''){
    return (
      <View>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
        />
        <Searchbar
          placeholder="Search a food item"
          onChangeText={_onChangeSearch}
          style={styles.searchbar}
          value={searchQuery}
          onSubmitEditing={Submit}
        />
      </Appbar.Header>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text>No Data Found</Text>
      </View>
      </View>
      )
  }
 else{
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
        />
        <Searchbar
          placeholder="Search a food item"
          onChangeText={_onChangeSearch}
          style={styles.searchbar}
          value={searchQuery}
          onSubmitEditing={Submit}
        />
      </Appbar.Header>
      <ScrollView style={{ marginBottom: 60 }}>
        <FlatList
          data={mealdata}
          renderItem={({ item }) =>
            <View>
              <Card style={styles.card}>
                <Card.Title title={item.strMeal} subtitle={item.strCategory} />
                <Card.Cover source={{ uri: (item.strMealThumb) }} />
                <Card.Content>
                  <Title>Origin: {item.strArea}</Title>
                </Card.Content>
                <Card.Actions>
                  <IconButton
                    icon="heart-outline"
                    color={Colors.red500}
                    size={20}
                    onPress={() => console.log('Pressed')}
                  />
                  <Button
                    onPress={() => navigation.navigate('ItemRecipe', {
                      idMeal: (item.idMeal),
                      title: (item.strMeal)
                    })} 
                  >
                    <Text style={{color:(Colors.red500)}}>See Recipe</Text>
                  </Button>
                </Card.Actions>
              </Card>
            </View>
          }
          keyExtractor={item => item.id}
        />

      </ScrollView>
    </View>
  );
}
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({

  searchbar: {
    width: (DEVICE_WIDTH) - 60
  },
  card: {
    margin: 5
  }
})
