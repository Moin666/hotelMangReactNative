import React from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useSelector } from 'react-redux'

function HotelCard({navObj,imgUrl,title,location}) {
    const data = useSelector(d => d)

  return (
    <TouchableOpacity style={{height:300,alignContent:'center',justifyContent:'center'}}  onPress={()=>{navObj.navigate("innercard",{imgData:imgUrl})}}     >

    <View style={[style.h320, {marginRight:40}]} alignItems="center" >
      <View>
        <Image
          style={{width: 250, height: 200, borderRadius: 20}}
          source={{
            //   uri: 'https://preview.colorlib.com/theme/unwind/images/xroom-1.jpg.pagespeed.ic.2dbJCSi6kW.webp',
              uri: imgUrl,
            }}
            />
      </View>
      <View
        style={[
            style.h120,
            style.bRadius15,
            {width: 250},
            {padding: 10},
            {position: 'absolute', top: 180, zIndex: 1, backgroundColor: 'white'},
        ]}>
        <View flexDirection="row" justifyContent="space-between">
          <Text style={[style.cBlack, style.fwBold]}>{title}</Text>
          <Fontisto name="person" size={30} color="black" />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={[style.cBlack, style.fwBold]}>
       {location}
          </Text>
        </View>
        <View
          flexDirection={'row'}
          justifyContent={'space-around'}
          style={{width: '50%', marginTop: 5}}>
          <Icon name="star" size={20} color="#D5955D" />
          <Icon name="star" size={20} color="#D5955D" />
          <Icon name="star" size={20} color="#D5955D" />
          <Icon name="star" size={20} color="#D5955D" />
          <Icon name="star" size={20} color="#D5955D" />
        </View>
      </View>
    </View>
              </TouchableOpacity>
  );
}


const style = StyleSheet.create({
    main:{
        flex:1,
        // backgroundColor:"cyan"
    },cBlack:{
        color:'black'
    },
    w100:{
        width:"100%"
    },
    w80:{
        width:"80%"
    },
    h150:{
        height:150
    },
    h120:{
        height:120
    },
    h20:{
        height:20
    },
    h200:{
        height:200
    },
    h100:{
        height:100
    },h300:{
        height:300
    },
    h320:{
        height:320
    },
    h400:{
        height:400
    },
    h350:{
        height:350
    },
    h10:{
        height:10
    },
    h10:{
        height:60
    },f20:{
        fontSize:20
    },
    f16:{
        fontSize:16
    },
    f25:{
        fontSize:25
    },fwBold:{
        fontWeight:"bold"
    },bw1:{
        borderWidth:2,

    },bRadius15:{
        borderRadius:15
    },bRadius20:{
        borderRadius:20
    }

})

export default HotelCard;
