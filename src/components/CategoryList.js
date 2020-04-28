import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Dimensions, Image } from 'react-native';
import { Appbar, Divider } from 'react-native-paper';
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';

function CategoryList({ navigation, route }) {
    const [mealdata, setMealdata] = useState([]);
    const { strCategory } = route.params;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + strCategory,
            );
            const modifiedData = result.data
            setMealdata(modifiedData.meals);
        };
        fetchData();

    }, []);



    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
                <Appbar.Content
                    title={strCategory}
                />
            </Appbar.Header>
            <ScrollView style={{ marginBottom: 60}}>
                <FlatList
                    data={mealdata}
                    renderItem={({ item }) =>
                        <TouchableOpacity  onPress={() => navigation.navigate('ItemRecipe', {
                            idMeal: (item.idMeal),
                            title: (item.strMeal)
                          })} >
                            <View style={styles.row}>
                                <Image 
                                  source={{uri: (item.strMealThumb)}}
                                  style={styles.img}
                                />
                                  <Text style={styles.txt}>{item.strMeal}</Text>
                            </View>
                            <Divider />  
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        </View>
    )
}

export default CategoryList

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        margin:10
    },
    img:{
        width: 80,
        height: 80,
        borderRadius:5
    },
    txt:{
        margin:10, 
        fontSize:18,
        width: (DEVICE_WIDTH)/1.8
    }
})
