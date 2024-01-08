import Input from './Input.jsx';
import Button from './Button.jsx';
import useFormulario from '../hooks/useFormulario.jsx';

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: '',
    lastname: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formulario)
    reset()
  }

  return (
  <form onSubmit={handleSubmit}>
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
  )
}

export default UserForm
