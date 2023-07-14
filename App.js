import React, {useState, Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Row from './components/row';
import Button from './components/button';
import {solvePostfix} from './utils/process';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      "infix": null,
      "ans": 0,
    };
  };

  input(value){
    if (this.state.infix === null){
      this.setState({infix: value});
    } else {
      this.setState({infix: this.state.infix + value});
    };
  };
  
  calc(){
    const x = solvePostfix(this.state.infix);
    this.setState({ans: x});
  };

  clear(){
    this.setState({infix: null});
  };
  
  del(){
    const y = this.state.infix.trim().split("");
    y.pop();
    this.setState({infix: y.join("")});
  };

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.ans}>{this.state.ans}</Text>
        <Text style={styles.value}>{this.state.infix}</Text>
        <Row>
          <Button value="C" type="num" process= {() => {this.clear()}}/>
          <Button value={'\u1F600'} type="num" process= {() =>
              {Alert.alert('Max pressed me')}}/>
          <Button value={'\u232B'} type="num" process= {() => {this.del()}}/>
          <Button value={'\u00F7'} type="oper" process= {() => {this.input(' / ')}}/>
        </Row>
        <Row>
          <Button value="9" type="num" process= {() => {this.input('9')}}/>
          <Button value="8" type="num" process= {() => this.input('8')}/>
          <Button value="7" type="num" process= {() => this.input('7')}/>
          <Button value={'\u00D7'} type="oper" process= {() => this.input(' * ')}/>
        </Row>
        <Row>
          <Button value="6" type="num" process= {() => this.input('6')}/>
          <Button value="5" type="num" process= {() => this.input('5')}/>
          <Button value="4" type="num" process= {() => this.input('4')}/>
          <Button value="-" type="oper" process= {() => this.input(' - ')}/>
        </Row>
        <Row>
          <Button value="3" type="num" process= {() => this.input('3')}/>
          <Button value="2" type="num" process= {() => this.input('2')}/>
          <Button value="1" type="num" process= {() => this.input('1')}/>
          <Button value="+" type="oper" process= {() => this.input(' + ')}/>
        </Row>
        <Row>
          <Button value="0" type="num" process= {() => {this.input('0')}}/>
          <Button value="(" type="num" process= {() => {this.input(' ( ')}}/>
          <Button value=")" type="num" process= {() => {this.input(' )')}}/>
          <Button value="=" type="oper" process= {() => {this.calc()}}/>
        </Row>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 18,
    textAlign: "right",
    marginRight: 10,
    marginBottom: 20,
  },
  ans: {
    color: "#fff",
    fontSize: 36,
    textAlign: "right",
    marginRight: 10,
  },
});

export default App;
