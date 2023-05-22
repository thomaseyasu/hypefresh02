import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class CalcDisplay extends React.Component{

    static defaultProps = {
        display: null,
    }
    render(){
        
        return(
            <View style={styles.container}>
                <Text style={styles.display}>{this.props.display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{ padding: 20, borderBottomColor: 'white', width: '100%',},
    display:{ fontSize: 30, textAlign: 'right'},
});