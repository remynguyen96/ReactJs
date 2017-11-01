import React from 'react';

const person = (paramsPerson) => {
    const styleDiv = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    };
    const styleP = {
        marginRight: '20px',
        fontWeight: '600',
        color: '#BA93FF'
    }
    const inputStyle = {
        width: '60%',
        padding: '5px 25px',
        margin: '20px'
    }

    return (
        <div style={styleDiv}>
            <p style={styleP} onClick={paramsPerson.click}>Name: {paramsPerson.name}</p>
            <p style={styleP}>Age: {paramsPerson.age}</p>
            <p style={styleP}>Phone: {paramsPerson.phone}</p>
            <div style={{width: '100%'}}>{paramsPerson.children}</div>
            <input type="text" style={inputStyle} onChange={paramsPerson.changed} />
        </div>

    )
}

export default person