'use strict';

import {View, StyleSheet} from 'react-native';

const Row = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Row;
