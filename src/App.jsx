import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import ProductsContextProvider from './context/ProductsContext';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import AuthContextProvider, { AuthContext } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <div className='container'>
          <NavBar />
          <Routes>
            <Route path='/product/:id' element={<SingleProduct/>} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Login />} />
            <Route
              path='/products'
              element={
                <PrivateRoute>
                  <ProductsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
