import {CLEAR_POKEMONS, GET_POKEMON, SEARCH_POKEMONS, SET_LOADING} from '../types';

const handlers = {
  [SEARCH_POKEMONS]: (state, {payload}) => ({...state, pokemons: payload, loading: false}),
  [GET_POKEMON]: (state, {payload}) => ({...state, pokemon: payload, loading: false}),
  [SET_LOADING]: state => ({...state, loading: true}),
  [CLEAR_POKEMONS]: state => ({...state, pokemons: []}),
  DEFAULT: state => state
}

export const PokeReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}