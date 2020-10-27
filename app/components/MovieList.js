import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground} from 'react-native';

export default function MovieList ({movie}){
    return(
        <View style={styles.container}>
            <Image source={{uri: movie.img}} style={styles.poster}/>
            <Text style={styles.movieName}>{movie.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    movieName:{
        fontWeight: 'bold',
        fontSize: 15
    },
    container: {
        width: 300,
        padding: 9,
        flexDirection: 'row',
        alignItems: 'center'
    },
    poster:{
        height: 150,
        width: '65%',
        resizeMode: 'contain',
    }
})