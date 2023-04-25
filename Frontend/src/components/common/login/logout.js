import React from 'react'
import { useHistory } from "react-router-dom";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Logout() {
    
    sessionStorage.removeItem('Usertype')
    sessionStorage.clear()
    //localStorage.removeItem('Usertype')
    const navigate = useHistory();
    navigate.push('/');
    window.location.reload();
    return (<div>
        
        </div>)
 
}

//STEP 3 -- EXPORT IT TO USE IT
export default Logout;