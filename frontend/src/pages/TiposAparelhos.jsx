import React from 'react';

const TiposAparelhos = () => {
    const [tipos, setTipos] = React.useState([]);
    const [novoTipo, setNovoTipo] = React.useState('');

    const adicionarTipo = () => {
        if (novoTipo) {
            setTipos([...tipos, novoTipo]);
            setNovoTipo('');
        }
    };

    const removerTipo = (tipoParaRemover) => {
        setTipos(tipos.filter(tipo => tipo !== tipoParaRemover));
    };

    return (
        <div>
            <h1>Gerenciamento de Tipos de Aparelhos</h1>
            <input 
                type="text" 
                value={novoTipo} 
                onChange={(e) => setNovoTipo(e.target.value)} 
                placeholder="Adicionar novo tipo" 
            />
            <button onClick={adicionarTipo}>Adicionar</button>
            <ul>
                {tipos.map((tipo, index) => (
                    <li key={index}>
                        {tipo} <button onClick={() => removerTipo(tipo)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TiposAparelhos;