import React from "react";
import './signup.css'
export default function Signup() {
    return (     
        <div className = 'body'>
            <div className = 'Signup-Box'>
            <h1>Sign Up:</h1>
            <div className = 'Special-Box'>
                <input type="text" className = 'signup-button' id ='username' placeholder = 'Create Username'/>
                <input type="text" className = 'signup-button' id ='pw' placeholder = 'Enter Password'/>
                <input type="text" className = 'signup-button' id ='pw2' placeholder = 'Re-enter Password'/>
                <button id = 'button'>Sign Up</button>
            </div>
            </div>
        </div> 
    );
}


/*radio for options in inupts... hold alt, put curssor in different places, make changes */