import React, {Component} from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import MovieList from '../components/MovieList';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(){
        const { addMovies } = this.props
        const response = await fetch('https://breakingbadapi.com/api/characters')
        const data = await response.json()
        addMovies(data.Search)
    }

    render(){
        const { movie } = this.props
        return (
                   <View style = {styles.container}>
                        <Text style= {styles.instruction}>Please Choose A Character of Your Choice:</Text>
                        <Image style= { styles.backgroundImage } source={require("../assets/BBadScreenBackground.jpg")}>
                        </Image>
                        <FlatList
                                data = {movie}
                                renderItem = {({ item:movie }) => 
                                    <MovieList movie = {movie}/>
                                }
                                keyExtractor = {(movie) => movie.char_id}
                        />
                   </View>
        )
    }
}

function mapStateToProps(state) {
    return{
        movie: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMovies: (movies) => dispatch({
            type: 'ADD_MOVIES',
            payload: {movies}
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.5,
        resizeMode: 'contain',
    },
    container:{
        paddingTop: '10%',
        paddingBottom: '25%',
        width:'100%',
        height: '100%'
    },
    instruction:{
        paddingTop: '5%',
        paddingBottom: '5%',
        marginLeft:'5%',
        fontSize: 22,
        fontWeight: 'bold',
    },
})