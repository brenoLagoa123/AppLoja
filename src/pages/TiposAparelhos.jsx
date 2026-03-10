import React, { useState } from 'react';

const TiposAparelhos = () => {
    const [tipo, setTipo] = useState('');
    const [tipos, setTipos] = useState([]);

    const adicionarTipo = () => {
        if (tipo) {
            setTipos([...tipos, tipo]);
            setTipo('');
        }
    };

    const deletarTipo = (tipoParaDeletar) => {
        setTipos(tipos.filter(t => t !== tipoParaDeletar));
    };

    return (
        <div>
            <h1>Tipos de Aparelhos</h1>
            <input 
                type="text" 
                value={tipo} 
                onChange={(e) => setTipo(e.target.value)} 
                placeholder="Adicionar tipo" 
            />
            <button onClick={adicionarTipo}>Adicionar</button>
            <ul>
                {tipos.map((t, index) => (
                    <li key={index}>
                        {t} <button onClick={() => deletarTipo(t)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TiposAparelhos;