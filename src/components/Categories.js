import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { fetchData } from '../api/index';
import { useNavigation } from '@react-navigation/native';


export default function Categories() {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setData(await fetchData())
        }

        fetchAPI()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>
                <View style={styles.ViewContainer}>
                <TouchableOpacity 
                   onPress={() => navigation.navigate('CategoryList', {
                    strCategory: (item.strCategory)
                  })}
                  >
                    <ImageBackground style={styles.img} imageStyle={styles.img} source={{ uri: (item.strCategoryThumb) }}>
                    <Text style={styles.txt}>{item.strCategory}</Text>
                    </ImageBackground>
                </TouchableOpacity>
                </View>
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        margin:5
    },
    ViewContainer:{
        padding:10
    },
    img:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:200,
     
    },
    txt:{
        backgroundColor:'#000',
        color:"#fff",
        fontSize:14,
        padding:5,
        borderRadius:5
    }
})
