import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './app/components/Home';
import BreakBad from './app/breakbad';

function addMovies(state, { movies }) {
  return state;
}

function moviesReducer(state = BreakBad.Search, action){
  switch(action.type) {
    case 'ADD_MOVIES': 
      return addMovies(state, action.payload);
    default:
      return state;
  }
}
const store = createStore(moviesReducer)

export default function App() {
  return (
        <Provider store = {store}>
          <Home/>
        </Provider>
      );
}
