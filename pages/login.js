import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import HotelCard from './home/hotelcard';
import {useDispatch, useSelector} from 'react-redux';
import {hotelDataLoaded} from '../confiq/store/hotelslice';

function Login({navigation}) {
  const dispatch = useDispatch();
  const reduxData = useSelector(d => d);

  const [hotelCardData, setHotelCardData] = useState([]);
  const [userObj, setUserObj] = useState({});

  const [data, setData] = useState([
    {
      imgUrl:
        'https://preview.colorlib.com/theme/vacationrental/images/xroom-1.jpg.pagespeed.ic.0q4Bp6Qeo7.webp',
      title: 'Silver Hotel And Spy',
      description: 'Luxury',
      location: 'Phase II Mosmiat',
    },
    {
      imgUrl:
        'https://preview.colorlib.com/theme/vacationrental/images/xroom-3.jpg.pagespeed.ic.-BqmSKjZKz.webp',
      title: 'Silver Hotel And Spy',
      description: 'Deluxe',
      location: 'Johar',
    },
    {
      imgUrl:
        'https://preview.colorlib.com/theme/roxandrea/images/xroom-6.jpg.pagespeed.ic.jmpfruk5EA.webp',
      title: 'Silver Hotel And Spy',
      description: 'Standard',
      location: 'Johar',
    },
    {
      imgUrl:
        'https://preview.colorlib.com/theme/vacationrental/images/xroom-3.jpg.pagespeed.ic.-BqmSKjZKz.webp',
      title: 'Silver Hotel And Spy',
      description: 'Deluxe',
      location: 'Johar',
    },
    {
      imgUrl:
        'https://preview.colorlib.com/theme/vacationrental/images/xroom-3.jpg.pagespeed.ic.-BqmSKjZKz.webp',
      title: 'Silver Hotel And Spy',
      description: 'Superior',
      location: 'Saddar',
    },
    {
      imgUrl:
        'https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/image/2016/08/main/luxurious-master-bedroom-sun-1114.jpg?itok=fBfiBQ0H',
      title: 'Silver Hotel And Spy',
      description: 'Deluxe',
      location: 'Johar',
    },
  ]);

  const createUser = ({email, password}) => {
    readDatabase();
    
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(e => {
        // navigation.navigate('Home')
        navigation.navigate('Home');
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  ///  Write Data Function
  const realDatabase = () => {
    const newReference = database().ref('/hotelCard').push();
    newReference.set(data).then(() => console.log('Data updated.'));
  };

  ///  read Data Function
  const readDatabase = () => {
    database()
      .ref('/hotelCard')
      .once('value')
      .then(snapshot => {
        let arr = [];
        let data = snapshot.val();
        for (const item in data) {
          arr = data[item];
        }
        setHotelCardData([...arr]);
      });
    dispatch(hotelDataLoaded({data: hotelCardData}));
  };

  const reduxSave = () => {
    dispatch(hotelDataLoaded(hotelCardData));
    console.log(reduxData.entities.hotel.list);
  };

  useEffect(() => {
    readDatabase();
  }, []);

  return (
    <View style={styles.mainDiv}>
      <View style={styles.imgView}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://mui.com/static/images/avatar/3.jpg',
          }}
        />
      </View>
      <View style={styles.center}>
        <Text style={[styles.font, styles.inputColr]}>Login Now</Text>
      </View>
      <View style={[styles.center, {marginTop: 10, fontWeight: 'bold'}]}>
        <Text style={styles.inputColr}>
          Please Enter Below Details To Continue
        </Text>
      </View>
      <View style={styles.btn}>
        <TextInput
          style={styles.inputColr}
          placeholder="Email"
          value={userObj.email}
          onChangeText={e => {
            setUserObj({...userObj, email: e});
          }}
        />
      </View>
      <View style={styles.btn}>
        <TextInput
          style={[styles.inputColr, {width: '100%', height: '100%'}]}
          placeholder="Password"
          secureTextEntry
          value={userObj.password}
          onChangeText={e => {
            setUserObj({...userObj, password: e});
          }}
        />
      </View>
      <View
        style={{
          width: '80%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: 10,
        }}>
        <Text style={{color: 'red'}}>Forget Password ?</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          createUser(userObj);
        }}>
        <View style={styles.btnLogin}>
          <Text style={styles.inputColr}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    height: '100%',
    alignItems: 'center',
    // backgroundColor:'lightgreen'
  },
  imgView: {
    height: '30%',
    // backgroundColor:"orange",
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderWidth: 1,
    borderRadius: 100,
  },
  font: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  btnLogin: {
    height: 60,
    width: 300,
    backgroundColor: 'red',
    marginTop: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputColr: {
    color: 'black',
  },
});

export default Login;
