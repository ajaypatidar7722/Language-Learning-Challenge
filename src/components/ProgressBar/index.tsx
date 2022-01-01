import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type PropgressBarType = {
  progressValue: number;
};

const ProgressBar = ({ progressValue }: PropgressBarType) => {
  return (
    <View style={styles.root}>
      <View style={{ width: `${progressValue}%`, ...styles.progress }} />
    </View>
  );
};

ProgressBar.defaultProps = {
  progressValue: 0,
};

export default ProgressBar;
