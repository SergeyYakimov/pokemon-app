import React, {useReducer} from 'react';
import {PokeContext} from './pokeContext';
import {PokeReducer} from './pokeReducer';
import {CLEAR_POKEMONS, GET_POKEMON, SEARCH_POKEMONS, SET_LOADING} from '../types';

export const PokeState = ({children}) => {
  const initialState = {
    pokemon: {},
    pokemons: [],
    loading: false
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  const search = async value => {
    setLoading();
    //...
    dispatch({
      type: SEARCH_POKEMONS,
      payload: []
    })
  };

  const getPokemon = async name => {
    setLoading();
    //...
    dispatch({
      type: GET_POKEMON,
      payload: {}
    })
  };

  const clearPokemons = () => dispatch({type: CLEAR_POKEMONS});

  const setLoading = () => dispatch({type: SET_LOADING});

  const {pokemon, pokemons, loading} = state;

  return (
    <PokeContext.Provider value={{
      search, getPokemon, clearPokemons, setLoading,
      pokemon, pokemons, loading
    }}>
      {children}
    </PokeContext.Provider>
  )
}