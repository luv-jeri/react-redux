import './App.css';
import Header from './components/header';
import Product from './components/product';
import { Container } from '@mantine/core';
function App() {
  return (
    <div>
      <Header />
      <Container style={{
        marginBlock: 20,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Container>
    </div>
  );
}

export default App;
