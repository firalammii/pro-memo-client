import React, { createContext, useState } from 'react';
export const Context = createContext();

const ContextPovider = ({ children }) => {

    const [closeModal, setCloseModal] = useState(false);
    function toggleCloseModal () {
        setCloseModal(prev => !prev);
    }

    return (
        <Context.Provider value={{
            closeModal, toggleCloseModal
        }}>
            {children}
        </Context.Provider>
    );
};

export default ContextPovider;