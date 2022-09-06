import { Link } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
import { auth } from "../../Backend/firebase_config";
import { StyledNavbar } from "./Styles/Navbar.styles";


export const Navbar = () =>{
    const userLoggedIn = auth.currentUser;
    console.log(userLoggedIn);
    const { handleSignOut } = useAuthContext()

    return (
      <>
            <StyledNavbar>

        <nav>
          <Link to="/" className="Logo">Fridgefy</Link>
          <div className="options">
            
          <Link to="/recipes" className="myrecipies">My recipes</Link>
          <Link to="/shoppinglist" className="myshoppinglist">My Shopping List</Link>
          </div>
          {(!userLoggedIn) ? (
            <div className="signin">
              <Link to="/signup">Sign up</Link>
              <Link to="/signin">Sign in</Link>
            </div>
          ) : (
            <button onClick={handleSignOut}>Sign Out</button>
          )}
          
        </nav>
        </StyledNavbar>

      </>
    );
}
