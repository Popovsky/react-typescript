import React from 'react';

const CenterWrapper: React.FC = ({children}) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh"
        }} >{children}</div>
    );
};

export default CenterWrapper;