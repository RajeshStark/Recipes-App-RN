import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Searchbar, Appbar, Card, Title, Button, IconButton, Colors } from 'react-native-paper';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

export default function RandomMeal() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState();
    const [mealdata, setMealdata] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://www.themealdb.com/api/json/v1/1/random.php",
            );
            const modifiedData = result.data
            setMealdata(modifiedData.meals);
        };
        fetchData();

    }, []);

    const fetchData = async () => {
        const result = await axios(
            "https://www.themealdb.com/api/json/v1/1/random.php",
        );
        const modifiedData = result.data
        setMealdata(modifiedData.meals);
    };
  
    return (
        <View>
            <Button style={{margin:10}} mode="contained" onPress={fetchData}>try a random meal</Button>
            <Text style={{fontSize:18,marginLeft:10}}>Your Random Meal Recipe: </Text>
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

        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        margin: 5,
        marginBottom: 10
    },
})
