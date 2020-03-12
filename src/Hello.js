import React from 'react';

function Hello({ name, color, isRequired }) {
    return (
        <div style={{ color }}>
            <h1>{isRequired && <b>*</b>}안녕하세요 {name}</h1>
        </div>
    );
}

Hello.defaultProps = {
    name: "이름없음"
}

export default Hello;