import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    
   this.state = {
     input1: '',
     input2: '',
     sonuc: ''

   }
   this.sum = this.sum.bind(this);
   this.subtruction = this.subtraction.bind(this);
   this.division = this.division.bind(this);
   this.multiplication = this.multiplication.bind(this);
  }
  
  sum(){

    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);
    const sonuc = number1 + number2;

    this.setState({
      sonuc: sonuc
    })

  }

  subtraction(){
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);
    const sonuc = number1 - number2;

    this.setState({
      sonuc: sonuc
    })
  }

  division(){
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);
    const sonuc = number1 / number2;

    this.setState({
      sonuc: sonuc
    })
  }

  multiplication(){
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);
    const sonuc = number1 * number2;

    this.setState({
      sonuc: sonuc
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <View style= {styles.header}>
          <Text style={styles.headerText}>Simple Calculator</Text>
        </View>
        <View style={styles.contentWrapper}>

          <TextInput style={styles.input}
          placeholder= 'İlk deger'
          onChangeText = {(text) => {
            this.setState({
              input1: text
            })

          }}
          value={this.state.input1}

          ></TextInput>

          <View style={styles.buttonWrapper}>
            <Button onPress={this.sum}

            color = "#841586"
            title = '+'
            
            ></Button>

              <Button onPress={this.subtraction}

              color = "#841586"
              title = '-'

              ></Button>

              <Button onPress={this.division}

               color = "#841586"
               title = '/'
                          
              ></Button>

              <Button onPress={this.multiplication}

              color = "#841586"
              title = '*'

              ></Button>


          </View>

          <TextInput style={styles.input}
          placeholder= 'İkinci deger'
          onChangeText = {(text) => {
            this.setState({
              input2: text
            })

          }}
          value={this.state.input2}

          ></TextInput>

        <Text style={styles.sampleText}>Sonuc : {this.state.sonuc}</Text>

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',

  },

  buttonWrapper:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },

  contentWrapper:{

    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center'

  },

  input:{
    height: 40,
  },

  sampleText: {
    height: 30,
    fontSize: 14,
  },

  header: {
    height: 100,
    padding: 30,
    shadowColor: '#000000',
    shadowOffset:{width:0, height: 2},
    shadowOpacity:0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  headerText: {
    fontSize: 20,
    alignItems: 'center'
  },

  
})