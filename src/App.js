import './App.css';
import AuthProvider from './AuthContext';
// import { FetchRecipes } from './Backend/FetchRecipes'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SignUp from './Frontend/User/SignUp';
import SignIn from './Frontend/User/SignIn';

function App() {
  return (
    <div className="App">
      {/* <FetchRecipes /> */}
      <AuthProvider>
        <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/signup'>Sign up</Link>
          <Link to='/signin'>Sign in</Link>
          <Link to='/recipes'>My recipes</Link>
          <Link to='/shoppinglist'>My Shopping List</Link>
        </nav>
          <Routes>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
