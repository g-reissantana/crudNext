import { createContext, useReducer } from 'react';
import { contactReducer, contactInitialState } from '../reducers/contactReducer';

const initialState = {
    contact: contactInitialState
};

const mainReducer = (state, action) => ({
    contact: contactReducer(state.contact, action)
});

export const Context = createContext({
    state: initialState,
    dispatch: () => null
});

export const ContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );
};