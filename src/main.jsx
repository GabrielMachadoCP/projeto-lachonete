
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import GlobalStyle from './EstiloGlobal.js'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Erro404 from './routes/Erro404.jsx';
import Cardapio from './routes/Cardapio.jsx';

const router = createBrowserRouter([ 
  {path: "/", element: <App/> , errorElement: <Erro404/>, 
    children:[
      {path: "/", element: <Home/>},
      {path: "/cardapio", element: <Cardapio/>},
    ]
  }
]);

//BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <RouterProvider router={router}/>
      <App />
      <GlobalStyle/>
    </>
    
)
