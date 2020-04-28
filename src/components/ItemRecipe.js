import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Dimensions, Linking } from 'react-native';
import { Appbar, Card, Title, Button, IconButton, Colors } from 'react-native-paper';
import axios from 'axios'


function ItemRecipe({ route, navigation }) {
    const [mealdata, setMealdata] = useState([]);
    const { idMeal, title } = route.params;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal,
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
                    title={title}

                />
            </Appbar.Header>
            <ScrollView style={{ marginBottom: 50 }}>
                <FlatList
                    data={mealdata}
                    renderItem={({ item }) =>
                        <View >
                            <Card style={styles.card}>
                                <Card.Title title={item.strMeal} subtitle={item.strCategory} />
                                <Card.Cover source={{ uri: (item.strMealThumb) }} />
                                <Card.Content>
                                    <Title>Origin: {item.strArea}</Title>
                                    <View style={styles.viewC}>
                                        <Text style={styles.subhead}>Ingredients List</Text>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Measure</Text>
                                    </View>
                                    {(item.strIngredient1) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient1}</Text>
                                            <Text style={styles.txt}>{item.strMeasure1}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient2) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient2}</Text>
                                            <Text style={styles.txt}>{item.strMeasure2}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient3) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient3}</Text>
                                            <Text style={styles.txt}>{item.strMeasure3}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient4) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient4}</Text>
                                            <Text style={styles.txt}>{item.strMeasure4}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient5) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient5}</Text>
                                            <Text style={styles.txt}>{item.strMeasure5}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient6) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient6}</Text>
                                            <Text style={styles.txt}>{item.strMeasure6}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient7) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient7}</Text>
                                            <Text style={styles.txt}>{item.strMeasure7}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient8) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient8}</Text>
                                            <Text style={styles.txt}>{item.strMeasure8}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient9) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient9}</Text>
                                            <Text style={styles.txt}>{item.strMeasure9}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient10) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient10}</Text>
                                            <Text style={styles.txt}>{item.strMeasure10}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient11) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient11}</Text>
                                            <Text style={styles.txt}>{item.strMeasure11}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient12) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient12}</Text>
                                            <Text style={styles.txt}>{item.strMeasure12}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient13) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient13}</Text>
                                            <Text style={styles.txt}>{item.strMeasure13}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient14) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient14}</Text>
                                            <Text style={styles.txt}>{item.strMeasure14}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient15) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient15}</Text>
                                            <Text style={styles.txt}>{item.strMeasure15}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient16) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient16}</Text>
                                            <Text style={styles.txt}>{item.strMeasure16}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient17) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient17}</Text>
                                            <Text style={styles.txt}>{item.strMeasure17}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient18) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient18}</Text>
                                            <Text style={styles.txt}>{item.strMeasure18}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient19) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient19}</Text>
                                            <Text style={styles.txt}>{item.strMeasure19}</Text>
                                        </View>
                                    }
                                    {(item.strIngredient120) === '' ? null :
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>{item.strIngredient20}</Text>
                                            <Text style={styles.txt}>{item.strMeasure20}</Text>
                                        </View>
                                    }
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Instructions:</Text>
                                    <Text>{item.strInstructions}</Text>

                                </Card.Content>
                                <Card.Actions>
                                    <IconButton
                                        icon="heart-outline"
                                        color={Colors.red500}
                                        size={20}
                                        onPress={() => console.log('Pressed')}
                                    />
                                    {(item.strYoutube) === '' ? null :
                                    <IconButton
                                        icon="youtube"
                                        color={Colors.red500}
                                        size={20}
                                        onPress={ ()=>{ Linking.openURL(item.strYoutube)}}
                                    />
                                    }
                                </Card.Actions>
                            </Card>

                        </View>
                    }
                    keyExtractor={item => item.id}
                />

            </ScrollView>
        </View>
    )
}

export default ItemRecipe;

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        margin: 5,
        marginBottom: 10
    },
    viewC: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subhead: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    txt: {
        fontSize: 16
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }


})
