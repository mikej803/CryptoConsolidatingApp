import { ADD_TOKEN } from '../actions/types'
import { UPDATE_TOKEN } from '../actions/types'
import { REMOVE_TOKEN } from '../actions/types'
import { UPDATE_TOKEN_INDEX } from '../actions/types'

const initialState = {
    tokens: []
}

export const cryptoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TOKEN:
            return {
                ...state,
                tokens: [...state.tokens, action.payload]
            }
        
        
    
    
        case UPDATE_TOKEN:
            return {
                ...state,
                tokens: [...state.tokens, action.payload]
            }
        
        
    
    
        case REMOVE_TOKEN:
            const newTokens = state.tokens.filter((token, index) => {
                return index !== action.payload;
            });
            
            // OR if you are able to check some sort of token id, you can use this logic below instead

            // const newTokens = state.tokens.filter((token, index) => {
            //         return token.id !== action.payload;
            //     });

            return {
                ...state,
                tokens: newTokens
            }
        
        
    
    
        case UPDATE_TOKEN_INDEX:            
            return {
                ...state,
                tokens: [...state.tokens, action.payload]
            }
        
        default:
            return state;
    }
}

export default cryptoReducer;