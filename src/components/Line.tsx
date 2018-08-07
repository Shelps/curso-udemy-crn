import * as React from 'react';
import { Text, View , StyleSheet} from 'react-native';

export interface Props {
    label: string,
    content: string
};

const Line = (props: Props) => {

  return (
    <View style={styles.line}>
      <Text
        style={
          [styles.cell,
          styles.cellLabel,
          props.label.length > 8 ? styles.longLabel: null
          ]}>{props.label}</Text>

      <Text
        style={[styles.cell, styles.cellContent]} >{props.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    line: {
      flexDirection: 'row',
      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      borderColor: "#C5C5C5",
    },
    cell: {
      fontSize: 18,
      paddingLeft: 5,
    },
    cellLabel: {
      flex: 1,
      fontWeight: "bold"
    },
    cellContent: {
      flex: 3,
      fontStyle: 'italic',
    },
    longLabel: {
      fontSize: 13
    }
});

export default Line;
