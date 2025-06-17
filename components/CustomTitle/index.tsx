import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface CustomTitleProps {
  title: string;
}

const CustomTitle: React.FC<CustomTitleProps> = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'left',
  },
});

export default CustomTitle;
