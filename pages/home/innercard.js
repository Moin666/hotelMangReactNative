import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

function InnerCard({route}) {

  const{imgData} = route.params;
  return (
    <View style={style.main}>
      <View style={[style.h400]} alignItems="center">
        <View style={{zIndex: 1}}>
          <Image
            style={{
              width: 400,
              height: 350,
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
            source={{
              uri: imgData,
            }}
          />
        </View>
        <View
          style={[
               {height:440},
            style.bRadius15,
            {width: 400},
            {padding: 20},
            {position: 'absolute', top: 325, backgroundColor: 'white'},
          ]}>
          <View
            flexDirection="row"
            justifyContent="space-between"
            style={{marginTop: 20}}>
            <Text style={[style.cBlack, style.fwBold]}>
              Silver Hotel And Spy
            </Text>
            <Fontisto name="person" size={30} color="black" />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={[style.cBlack, style.fwBold, style.f12]}>
              Green Street Central District
            </Text>
          </View>
          <View
            flexDirection={'row'}
            justifyContent={'space-between'}
            style={{marginTop: 15}}>
            <View
              flexDirection="row"
              style={{width: '50%'}}
              justifyContent={'space-between'}
              alignItems={'space-around'}>
              <Icon name="star" size={20} color="#D5955D" />
              <Icon name="star" size={20} color="#D5955D" />
              <Icon name="star" size={20} color="#D5955D" />
              <Icon name="star" size={20} color="#D5955D" />
              <Icon name="star" size={20} color="#D5955D" />
            </View>
            <View>
              <Text style={style.cBlack}>36 reviews</Text>
            </View>
          </View>
          <View style={{marginTop:25}}>
            <Text style={style.cBlack}>industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</Text>
          </View>

          <View flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <View>
            <Text style={[style.cBlack,{fontWeight:'bold'}]}>Price Per Night</Text>
            </View>
            <View style={{padding:5,width:"50%",borderBottomLeftRadius:10,borderTopLeftRadius:10,height:40,backgroundColor:"#D2ECEE"}} justifyContent={'center'}>
                <Text style={style.cBlack}>$320</Text>
            </View>
          </View>

          <View justifyContent={'center'} alignItems={'center'}>
          <TouchableOpacity style={{ height:65,
                      width:"100%"}}>

          <View style={style.btn} >
            <Text style={style.cBlack}>Book Now</Text>
          </View>
          </TouchableOpacity>
          </View>

        </View>
      </View>
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
  f12: {
    fontSize: 12,
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
  btn:{
        height:65,

        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        marginTop:18,
        backgroundColor:"#66CDAA",
        
  }
});

export default InnerCard;
