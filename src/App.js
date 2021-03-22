import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Comidas, Bebidas, Login, Perfil,
  DetalhesComida, DetalhesBebida } from './pages/index';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/comidas/:id" component={ DetalhesComida } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route path="/perfil" component={ Perfil } />
      <Route path="/bebidas/:id" component={ DetalhesBebida } />
      {/* <Route path="/comidas/:id/in-progress" component={ InProgressComida } />
      <Route path="/bebidas/:id/in-progress" component={ InProgressBebidas } />
      <Route path="/explorar" component={ Explorar } />
      <Route path="/explorar/comidas" component={ Explorar } />
      <Route path="/explorar/bebidas" component={ Explorar } />
      <Route path="/explorar/comidas/ingredientes" component={ Explorar } />
      <Route path="/explorar/bebidas/ingredientes" component={ Explorar } /> 
      <Route path="/receitas-feitas;" component={ Receitas } />
      <Route path="/receitas-favoritas" component={ Receitas } /> */}
      <Route exact path="/" component={ Login } />
    </BrowserRouter>
  );
}

export default App;
