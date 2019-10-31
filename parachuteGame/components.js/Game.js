import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Easing, Linear, Image, ImageBackground, TouchableWithoutFeedback} from 'react-native';


export default class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      xValue: new Animated.ValueXY({ x: 135, y: 3 }),
      count: 0,
    }
     this.interval = setInterval(this.xValue, {x: 135, y: 3});
  }


  _moveAnimation = () =>{
    let numX = Math.random();
   	numX = Math.floor(numX * 260);
    
    this.setState({
        count: this.state.count + 1
      });

     const downAnimation =
     
      Animated.timing(this.state.xValue,{
      toValue: {x: numX, y: 500},
      duration: 6000,
      easing: Easing.bounce,
      count: this.state.count + 1,  
  } )
  
      Animated.loop(
      downAnimation,
      {
        iterations: 1,
      },  


    ).start(() => _gameOver());
    

     const _gameOver = () => {
    // console.log(Object.keys(this.state.xValue.y))
               if (this.state.xValue.y._value >  400) {
                 this.setState(this.props.gameOver(this.state.count));
                // alert('Game over');
               }
            
    }
  };



   componentWillUnmount(){
    clearInterval(this.interval);
  }
  render() {
    
  return (
    <View style={styles.container}>
<ImageBackground  style= { styles.backgroundImage } source={require('../images/pixelesRosas.jpg')} >
<TouchableWithoutFeedback style={styles.imageView}
onPress={this._moveAnimation}>
<Animated.Image 
source= {require('../images/parachute.png')} 
style= {[styles.imageView, this.state.xValue.getLayout(),
]}></Animated.Image>
</TouchableWithoutFeedback>
 <Text style={styles.score}>Score: {this.state.count}</Text>
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
  
  imageView:{
    display: 'flex',
 width: 50,
 height: 50,
 flexDirection: 'row'
  },

  backgroundImage:{
    flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        
  score: {
    fontSize: 20,
    textAlign: "center"
  }
        
  }
});