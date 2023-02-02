import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Contador() {

    const [contador, setContador] = useState(0);
    const sumar = () => {
        let contador1 = contador;

        contador1++;

        setContador(contador1);
    }

    const restar = () => {
        let contador1 = contador;

        contador1--;

        setContador(contador1);
    }

    const inicializar = () => {
        let contador1 = contador;

        contador1=0;

        setContador(contador1);
    }

    return(
        <>
            <p>Contador: { contador }</p>
            <p>
                <Button variant="outline-success" onClick={sumar}>+</Button>{' '}
                <Button variant="outline-danger" onClick={restar}>-</Button>{' '}
                <Button variant="outline-primary" onClick={inicializar}>Inicializar</Button>
            </p>
        </>
    );
}

export default Contador;