import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Easing, Linear, Image,} from 'react-native';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0),
      xValue: new Animated.Value(0), 
    }
  }

  _fadeAnimation = () =>{
    Animated.timing(this.state.fadeValue,{
      toValue: (0),
      duration: 2000,
    }).start()
  }

  _moveAnimation = () =>{
 Animated.timing(this.state.xValue,{
      toValue: 250,
      duration: 500,
      asing: Easing.back(),
  }).start()
  }
  render() {
    
  return (
    <View style={styles.container}>

<Animated.Image 
source= {require('./images/parachute.png')} 
style= {[styles.imageView, {left: this.state.xValue}
]}></Animated.Image>

<TouchableOpacity style={styles.button}
onPress={this._moveAnimation}
>
<Text style={styles.buttonText}> Start! </Text>
</TouchableOpacity>
    
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    // direction: 'column',
  },
 
  button:{
    backgroundColor: 'steelblue',
    height: 45,
    marginTop: 45,
    alignSelf: 'flex-end',
  
  },
  buttonText:{
    color: 'white',
    padding: 12 ,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 18,
    
  },
  
  imageView:{
width: 50,
height: 50,

flexDirection: 'column'
  }
});
