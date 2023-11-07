import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const Contact = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Página de Contato</h1>
            <p>O tema autal é: {theme}</p>
        </div>

    )
}

export default Contact