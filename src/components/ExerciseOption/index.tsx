import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type ExerciseOptionProps = {
  options: string[];
  selectedOption: string;
  onSelectOption: Function;
  disabled: boolean;
};

const ExerciseOption = ({
  options,
  selectedOption,
  onSelectOption,
  disabled,
}: ExerciseOptionProps) => {
  return (
    <>
      {options?.map((option: string, index: number) => {
        const isOptionSelected = option === selectedOption;

        return (
          <TouchableOpacity
            key={`${option}+${index}`}
            disabled={disabled}
            style={[
              styles.optionContainer,
              disabled && styles.disabledOptionContainer,
              isOptionSelected && styles.selectedOption,
            ]}
            activeOpacity={0.8}
            onPress={() => onSelectOption(option)}
          >
            <Text
              style={[
                styles.optionText,
                isOptionSelected && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default ExerciseOption;
