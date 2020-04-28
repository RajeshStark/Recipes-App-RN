import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import Categories from './Categories';
import RandomMeal from './RandomMeal';

export default function Home({ navigation }) {

  return (
    <View>
      <StatusBar backgroundColor="#6200EE" barStyle="light-content" />
      <Appbar.Header>
        <Appbar.Content
          title="Recipes App"
        />
         <Appbar.Action icon="heart" />
        <Appbar.Action icon="magnify" onPress={() => navigation.navigate('Searchbar')} />
      </Appbar.Header>
      <ScrollView 
      style={{marginBottom:50}}
      showsVerticalScrollIndicator={false}
      >
        <View>
          <Categories />
          <RandomMeal />
        </View>
      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({

});