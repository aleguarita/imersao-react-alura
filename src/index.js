import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
 
// views
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (<div>Erro 404. Desafio: criar uma página melhor</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/cadastro/video" component={CadastroVideo} exact />
        <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
        <Route path="/" component={Home} exact />
        <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);