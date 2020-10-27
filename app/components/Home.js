import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
                   <FlatList
                        data = {movie}
                        renderItem = {({ item:movie }) => 
                        <MovieList movie = {movie}/>
                        }
                        keyExtractor = {(movie) => movie.char_id}
                   />
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
    container: {
        fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
        backgroundColor: "orange"
    }
})