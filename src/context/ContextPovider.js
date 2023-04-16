import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextPovider = ({ children }) => {

    const [selected, setSelected] = useState(null);

    function editPost (post) {
        if (post === 'clear') setSelected(null);
        else setSelected(post);
    }

    return (
        <Context.Provider value={{
            selected, editPost
        }}>
            {children}
        </Context.Provider>
    );
};

export default ContextPovider;