import { useState } from 'react';
import useFormulario from './hooks/useFormulario.jsx';
import Input from './Componentes/Input';
import Card from './Componentes/Card';
import Container from './Componentes/Container';
import Button from './Componentes/Button';

function App() {
  const [usuarios, setUsuarios]  = useState([]);
  const [formulario, handleChange, reset] = useFormulario({
    name: '',
    lastname: '',
    email: '' });

  const submit = e => {
    e.preventDefault();
    setUsuarios([
      ...usuarios,
// the information in the form is being passed
      formulario,
    ])
    reset()
  };

  console.log(formulario, usuarios)

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label='Name'
                name='name'
                value={formulario.name}
                onChange={handleChange}
                placeholder='Enter name' />
              <Input
                label='Lastname'
                name='lastname'
                value={formulario.lastname}
                onChange={handleChange}
                placeholder='Enter lastname' />
              <Input
                label='E-mail'
                name='email'
                value={formulario.email}
                onChange={handleChange}
                placeholder='Enter e-mail' />
              <Button>Submit</Button>
            </form>
          </div>
        </Card>
  {/* The information entered is displayed */}
        <Card>
          {usuarios.map(x =>
          <li key={x.email}>{`${x.name} ${x.lastname} ${x.email}`}</li>)
          }
        </Card>
      </Container>
    </div>
  );
}

export default App;

