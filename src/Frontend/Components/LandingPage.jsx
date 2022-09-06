import React from 'react'
import { auth } from '../../Backend/firebase_config'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../AuthContext'

import Main from "./Main"

export const LandingPage = () => {
    const { user, handleSignOut } = useAuthContext();
    console.log(user)

    const userLoggedIn = auth.currentUser;
    console.log(userLoggedIn);

    if(!user){
        return <Navigate to='/signin'></Navigate>
    }else{
        return(

            <div className='welcome'>
                <p>Welcome !! {(user.displayName === null) ? 'User': (user.displayName)}</p>
                <button onClick={handleSignOut}>Sign Out</button>
                <Main/>
            </div>
        )
    }
}

