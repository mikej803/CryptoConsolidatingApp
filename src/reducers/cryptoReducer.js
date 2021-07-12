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
            return {
                ...state,
                tokens: [...state.tokens, action.payload]
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