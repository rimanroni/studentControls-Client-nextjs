import React from 'react';

const Container = ({children , id}) => {
    return (
        <div _id={id}>
            {children}
        </div>
    );
};

export default Container;