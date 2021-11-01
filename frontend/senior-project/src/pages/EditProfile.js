import React from "react";
import '../styles/EditProfile.css'

export default function EditProfile() {
    return (     
        <div className = 'body'>
            <h1>Edit Profile Page</h1>
            <div className = 'EditProfile-body'>
                <div className = 'EditProfile-box'>
                    <div className = 'EditProfile-input'>
                        <input type = 'text' class = 'form-control' id = 'username' placeholder = 'Username'></input>
                        <input type = 'text' class = 'form-control' id = 'firstname' placeholder = 'First Name'></input>
                        <input type = 'text' class = 'form-control' id = 'lastname' placeholder = 'Last Name'></input>
                    </div>
                </div>
            </div> 
        </div>
    );
}