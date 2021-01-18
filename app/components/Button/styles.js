import { StyleSheet } from 'react-native';

import colors from '../../config/colors'

const styles = StyleSheet.create({
  button:{
    backgroundColor : colors.primary,
    borderRadius: 25,
    width : "100%",
    padding : 15,
    justifyContent : 'center',
    alignItems : 'center',
  },
  text :{
    color : colors.white,
    fontSize : 18,
    textTransform : 'uppercase'
  }
})

export default styles