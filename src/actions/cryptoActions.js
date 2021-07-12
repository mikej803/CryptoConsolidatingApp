import {ADD_TOKEN} from './types';
import {UPDATE_TOKEN} from './types';
import {REMOVE_TOKEN} from './types';
import {UPDATE_TOKEN_INDEX} from './types';

 export const addToken = data => {
   return {
     type: ADD_TOKEN,
     payload: data
   };
 };
 export const updateToken = data => {
   return {
     type: UPDATE_TOKEN,
     payload: data
   };
 };
 export const removeToken = data => {
   return {
     type: REMOVE_TOKEN,
     payload: data
   };
 };
 export const updateTokenIndex = data => {
   return {
     type: UPDATE_TOKEN_INDEX,
     payload: data
   };
 };


 