import '../hojas de estilo/Container.css';

const Container = ({ children }) => {
  return(
    <div className='container'>
      { children }
    </div>
  );
}

export default Container;
