import React from "react";
import '../styles/EditProfile.css'

export default function EditProfile() {
    return (     
        <div className = 'body'>
            <div className = 'EditProfile-body'>
                <div className = 'EditProfile-box'>
                    <h1>Edit Profile Page</h1>
                    <div className = 'EditProfile-input'>

                        <div className = 'pfp'>
                            <img src = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" id = 'pfp-image' alt="default pfp"></img>
                            <button className = 'button' id = 'pfp-button'>Choose Picture</button>
                        </div>

                        <input type = 'text' className = 'form-control' id = 'username' placeholder = 'Username'></input>
                        <textarea className = 'form-control' id = 'bio-textbox' placeholder = 'User Bio' rows = '3'></textarea>

                        <input type = 'text' className = 'form-control' id = 'firstname' placeholder = 'First Name'></input>
                        <input type = 'text' className = 'form-control' id = 'lastname' placeholder = 'Last Name'></input>

                        <div id = 'private-profile'>
                            <span>Private Profile</span>
                            <label className = "switch">
                                <input type = "checkbox"></input>
                                <span className = "slider round"></span>
                            </label>
                        </div>

                        <button className = 'button' id = 'savechanges'>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}