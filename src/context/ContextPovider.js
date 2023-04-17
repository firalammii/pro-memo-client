import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextPovider = ({ children }) => {

    const [selected, setSelected] = useState(null);
    const [showPublic, setPublicPosts] = useState(true);

    function editPost (post) {
        if (post === 'clear') setSelected(null);
        else setSelected(post);
    }
    function showPrivatePosts () {
        setPublicPosts(false);
    }
    function showPublicPosts () {
        setPublicPosts(true);
    }

    return (
        <Context.Provider value={{
            selected, editPost, showPublic,
            showPublicPosts, showPrivatePosts,
        }}>
            {children}
        </Context.Provider>
    );
};

export default ContextPovider;