import { useState } from 'react';
import Card from './Componentes/Card';
import Container from './Componentes/Container';
import UserForm from './Componentes/UserForm';

function App() {
  const [usuarios, setUsuarios]  = useState([]);

  const submit = usuario => {
    setUsuarios([
      ...usuarios,
// the information in the form is being passed
      usuario,
    ])
  };

  console.log(usuarios)

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
  {/* The information entered is displayed */}
        <Card>
          <ul>
            {usuarios.map(x =>
              <li key={x.email}>{`${x.name} ${x.lastname} ${x.email}`}</li>)
            }
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
