import { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuid } from 'uuid';

function Cartas() {
  // useEffect (() => {
  //   btnActual.current.disabled = true;

  // }, [])
  const initialState = {
    'id': '',
    'nombre': '',
    'direccion': '',
    'telefono': '',
  }

  const btnActual = useRef(null);

  const [datos, setDatos] = useState(initialState);
  const { nombre, direccion, telefono, id } = datos; // deconstruccion de datos
  const [informacion, setInformacion] = useState([]);
  const [isActive, setIsActive] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const initialState2 = {
      'id': uuid(),
      'nombre': datos.nombre,
      'direccion': datos.direccion,
      'telefono': datos.telefono,
    };
    let inf = informacion;
    inf.push(initialState2);
    setInformacion(inf);
    setDatos(initialState);
    console.log(informacion);
  };

  const handleChange = (e) => {
    setDatos({
      ...datos, [e.target.name]: e.target.value
    });

  }

  const handleEliminar = (e) => {
    let nombreS = e.target.name;
    nombreS = nombreS.slice(1);

    let inf = [];

    for (let i = 0; i < informacion.length; i++) {
      if (informacion[i].id !== nombreS) {
        inf.push(informacion[i]);
      }
    }
    setInformacion(inf);
  }

  const handleModificar = (e) => {
    const id = e.target.name.slice(1)
    //Toggle para que aparezca el botón de modificar
    setIsActive(true)

    for (const info of informacion) {
      if (info.id === id) setDatos(info)
    }

  }
  const handleActualizar = e => {
    const id = datos.id
    let inf = informacion
    const index = inf.findIndex(i => i.id == id)
    const modifiedState = {
      'id': datos.id,
      'nombre': datos.nombre,
      'direccion': datos.direccion,
      'telefono': datos.telefono
    }
    inf[index] = modifiedState
    setInformacion(inf)
    setDatos(initialState)

    setIsActive(false)

  }


  return (
    <Container>
      <Row className="row-cols-3">
        {
          informacion.map(inf => (
            <Col key={inf.id} className='mt-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{inf.nombre}</Card.Title>
                  <Card.Text>id: {inf.id}</Card.Text>
                  <Card.Text>Dirección: {inf.direccion}</Card.Text>
                  <Card.Text>Teléfono: {inf.telefono}</Card.Text>

                  <Button variant="outline-danger" className="me-3" name={'e' + inf.id} onClick={handleEliminar}>Eliminar</Button>
                  <Button variant="outline-success" name={'m' + inf.id} onClick={handleModificar}>Modificar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>



      <Row>
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="nombre" placeholder="Ingresa tu nombre" value={nombre} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="direccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" name="direccion" placeholder="Ingresa tu direccion" value={direccion} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="telefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" name="telefono" placeholder="Ingresa tu telefono" value={telefono} onChange={handleChange} />
            </Form.Group>

            <Button variant="outline-primary " type="submit" name="agregar" className="me-3">
              Agregar
            </Button>
            <Button variant="outline-success" name="id" className={isActive ? 'ms-3 mb-5 mt-3' : 'display-none'} onClick={handleActualizar}>
              Actualizar
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>

    </Container>


  );
}
export default Cartas;