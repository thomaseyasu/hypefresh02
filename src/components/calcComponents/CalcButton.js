import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class CalcButton extends React.Component{

    static defaultProps = {
        onPress: function() {},
        title: "",
        color: "white",
        backgroundColor: "red",
        style: {},
    }
    render(){
        var bc = this.props.backgroundColor;
        return(
            <TouchableOpacity onPress={this.props.onPress} 
            style={styles.container}>
                <Text styles={styles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{ 
        alignItems: 'center', justifyContent: 'center', margin: 5, 
        width: 60, height: 40, borderRadius: 10, backgroundColor: 'silver'},
    text:{ fontSize: 30, fontWeight: 'bold', color: 'white'},
});