import './App.css';
import AuthProvider from './AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Frontend/User/SignUp';
import SignIn from './Frontend/User/SignIn';
import { LandingPage } from './Frontend/Components/LandingPage'
import ProtectRoute from './Frontend/User/ProtectRoute';
import { Navbar } from './Frontend/Components/NavBar';
import { GlobalStyles } from './Frontend/Components/Styles/GlobalStyles';

function App() {
  return (
    <div className="App">
     <GlobalStyles />
      <AuthProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/signup' element={<ProtectRoute><SignUp /></ProtectRoute>}></Route>
            <Route path='/signin' element={<ProtectRoute><SignIn /></ProtectRoute>}></Route>
            <Route path='/' element={<LandingPage />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
