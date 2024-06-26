import { backendIp } from "../globals";
import { useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { Navigate } from 'react-router-dom';

function Logout(){
    // BEWARE: Might have to tweak route and or address
    const userContext = useContext(UserContext); 
    useEffect(function(){
        const logout = async function(){
            userContext.setUserContext(null);
            await fetch(`http://${backendIp}:3001/users/logout`);
        }
        logout();
    }, []);

    return (
        <Navigate replace to="/" />
    );
}

export default Logout;
