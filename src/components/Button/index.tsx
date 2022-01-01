import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { BUTTON_TYPES } from '../../constants/buttonTypes';
import { styles } from './styles';

type ButtonProps = {
  title: string;
  onPress: any;
  disabled: boolean;
  buttonType: string;
};

const Button = ({ title, onPress, disabled, buttonType }: ButtonProps) => {
  const isError = buttonType === BUTTON_TYPES.ERROR;
  const isSuccess = buttonType === BUTTON_TYPES.SUCCESS;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.root,
        disabled && styles.disableButton,
        isError && styles.errorButton,
        isSuccess && styles.successButton,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.title,
          isError && styles.errorTitle,
          isSuccess && styles.successTitle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
