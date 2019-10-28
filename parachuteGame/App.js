import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Easing, Linear, Image, ImageBackground} from 'react-native';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      xValue: new Animated.Value(3), 
    }
  }


  _moveAnimation = () =>{

     const downAnimation =
      Animated.timing(this.state.xValue,{
      toValue: 450,
      duration: 6000,
      easing: Easing.bounce,  
  } )
  
      Animated.loop(
      downAnimation,
      {
        iterations: 1,
      },  


    ).start(() => _gameOver());

     const _gameOver = () => {
  //  console.log(Object.keys(this.state.xValue))
               if (+this.state.xValue._value === +450) {
                alert('Game over');
            }
            
    }
  }



  _stopAnimation = () =>{
     (this.state.xValue).stopAnimation()
  }


  _gameOver = () => {
   
                alert('Game over');
            
  }
  render() {
  return (
    <View style={styles.container}>
<ImageBackground  style= { styles.backgroundImage } source={require('./images/pixelesRosas.jpg')} >
<TouchableOpacity style={styles.imageView}
onPress={this._stopAnimation}
>
<Animated.Image 
source= {require('./images/parachute.png')} 
style= {[styles.imageView, {top: this.state.xValue},
]}></Animated.Image>
</TouchableOpacity>
<TouchableOpacity style={styles.button}
onPress={this._moveAnimation}
>
<Text style={styles.buttonText}> Start! </Text>
</TouchableOpacity>
   </ImageBackground> 
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
    marginTop: 43,
    alignSelf: 'flex-end',
    borderRadius: 5,
      paddingHorizontal: 60,
    //  justifyItems: 'button',
    
  
  },
  buttonText:{
    color: 'white',
    padding: 12,
    paddingHorizontal: 12,
    fontWeight: 'bold',
    fontSize: 18,
    
  },
  
  imageView:{
 width: 50,
 height: 50,
 flexDirection: 'row'
  },

  backgroundImage:{
    flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        
  }
});
