import {StyleSheet, Dimensions, Text, TouchableOpacity} from 'react-native';

function Button ({type, process, value}){
  const buttonStyles = [style.button] ;
  const textStyles = [style.text];
  if (type === "oper"){
    buttonStyles.push(style.oper);
  };
  return(
    <TouchableOpacity style={buttonStyles} onPress={process}>
       <Text style={textStyles}>{value}</Text>
    </TouchableOpacity>
  );
};

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;


const style = StyleSheet.create({
  "button": {
    "backgroundColor": "#333333" ,
    "flex": 1,
    "height": Math.floor(buttonWidth - 10),
    "alignItems": "center",
    "justifyContent": "center",
    "borderRaduius": Math.floor(buttonWidth),
    "margin": 5
  },
  "text": {
    "color": "#fff",
    "fontSize": 24,
  },
  "oper": {
    "backgroundColor": "#a6a6a6",
    "color": "#060606",
    "width": Math.floor(screen.width / 4 - 10),
    "flex": 0,
    "paddingLeft": 10,
  }
});

export default Button;
