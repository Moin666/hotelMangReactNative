import React, { useEffect, useState } from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useSelector } from 'react-redux';
import HotelCard from './home/hotelcard';

function Home({navigation}) {

  let reduxData = useSelector(d => d);
  const [selector,setSelector] = useState(['All','Lahore','karachi','Gilgit'])
  const [selectIndex,setSelectIndex] =useState(0)

  const [selectCityData,setSelectCityData] = useState([]) 
  const selectorCity =(ind,city)=>{
    setSelectIndex(ind);
    const cityData = reduxData.entities.hotel.list["data"].filter(item => item.city == city);
    setSelectCityData([...cityData])
    console.log(cityData)
  }

  return (
    <View style={style.main}>
      <View
        style={[style.h150]}
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center">
        <View>
          <Text style={[style.f25, style.fwBold, style.cBlack]}>
            Find Your Hotel
          </Text>
          <Text style={[style.f25, {color: 'green'}, style.fwBold]}>
            in Pakistan{' '}
          </Text>
        </View>
        <View>
          <Fontisto name="person" size={30} color="black" />
        </View>
      </View>
      <View alignItems="center">
        <View
          style={[style.h10, style.w80, style.bw1, style.bRadius15]}
          alignItems="center"
          justifyContent="center">
          <TextInput
            style={[style.w100, style.cBlack, {margin: 'auto'}]}
            placeholder="search . . ."
            placeholderTextColor={'black'}
          />
        </View>
      </View>
      <View
        flexDirection={'row'}
        justifyContent={'space-around'}
        alignItems={'center'}
        style={[style.h10]}>
      {selector.map((item,ind) =>  {return <TouchableOpacity   key={ind} style= {{borderBottomWidth:ind==selectIndex ? 1 : 0,borderBottomColor:ind==selectIndex ? "#008B8B" : "black"}} onPress = {()=>{selectorCity(ind,item)}} > 
        <View>
          <Text style={[style.f16, style.cBlack]}>{item}</Text>
        </View>
        </TouchableOpacity>})}
       
        {/* <View>
          <Text style={[style.f16, style.cBlack]}>Lahore</Text>
        </View>
        <View>
          <Text style={[style.f16, style.cBlack]}>Karachi</Text>
        </View>
        <View>
          <Text style={[style.f16, style.cBlack]}>Gilgit</Text>
        </View>
        <View>
          <Text style={[style.f16, style.cBlack]}>Luxury</Text>
        </View> */}
      </View>

      <FlatList
        contentContainerStyle={{
          justifyContent: 'center',
          marginLeft: 60,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        // data={DATA}
        // data={reduxData.entities.hotel.list["data"]}
        data={selectCityData[0] ? selectCityData : reduxData.entities.hotel.list["data"]}
        renderItem={({item}) => <HotelCard navObj ={navigation}   imgUrl ={item.imgUrl}  title ={item.title} location ={item.location}/>}
      />
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor:"cyan"
  },
  cBlack: {
    color: 'black',
  },
  w100: {
    width: '100%',
  },
  w80: {
    width: '80%',
  },
  h150: {
    height: 150,
  },
  h120: {
    height: 120,
  },
  h20: {
    height: 20,
  },
  h200: {
    height: 200,
  },
  h100: {
    height: 100,
  },
  h300: {
    height: 300,
  },
  h320: {
    height: 320,
  },
  h400: {
    height: 400,
  },
  h350: {
    height: 350,
  },
  h10: {
    height: 10,
  },
  h10: {
    height: 60,
  },
  f20: {
    fontSize: 20,
  },
  f16: {
    fontSize: 16,
  },
  f25: {
    fontSize: 25,
  },
  fwBold: {
    fontWeight: 'bold',
  },
  bw1: {
    borderWidth: 2,
  },
  bRadius15: {
    borderRadius: 15,
  },
  bRadius20: {
    borderRadius: 20,
  },
  select:{
    borderBottomWidth:2,
    borderBottomColor:"#008B8B"
  }
});

export default Home;
