import React, { useState, useEffect } from "react";
import '../styles/EditProfile.css'

export default function EditProfile({ token }) {

    const[profile_pic, setProfilePic] = useState();
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    const[bio, setBio] = useState();
    const[fname, setFName] = useState();
    const[lname, setLName] = useState();

    function updateProfile() {
        fetch(`http://localhost:3001/profiles?token=${token}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response["user_data"][0]);
        setProfilePic(response["user_data"][0]["profile_pic"]);
      });
    }

    async function editProfile(requestOptions) {
        console.log(requestOptions);
        fetch(`http://localhost:3001/profiles`, requestOptions)
            // method: "PUT",
            // headers: {
            //     "Content-Type": "application/json",
            //     "Accept": "application/json"
            // },
            // body: JSON.stringify({
            //     editProfileJson,
            //     token: token,
            // }),

            .then((response) => response.json())
            .then((response) => response.token);
    }

    useEffect(() => {
        updateProfile();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ profile_pic: profile_pic, username: username, bio: bio, fname: fname, lname: lname, token: token })
        };
        editProfile(requestOptions);
        // await editProfile( {
        //     profile_pic,
        //     username,
        //     bio,
        //     fname,
        //     lname,
        // });
        window.location = "/profile"
    }

    return (     
        <div className = 'body'>
            <div className = 'EditProfile-body'>
                <div className = 'EditProfile-box'>
                    <h1>Edit Profile Page</h1>
                    <div className = 'EditProfile-input text-center'>

                        <div className = 'pfp'>
                            <img src = {profile_pic} id = 'pfp-image' alt="default pfp"></img>
                            <input type = 'text' className = 'form-control text-center mt-3' id = 'profilepic' placeholder = 'Profile Picture Link' onChange = {(e) => setProfilePic(e.target.value)}></input>
                        </div>

                        <input type = 'text' className = 'form-control' id = 'username' placeholder = 'Username' onChange = {(e) => setUsername(e.target.value)}></input>
                        <input type = 'password' className = 'form-control' id = 'password' placeholder = 'Password' onChange = {(e) => setPassword(e.target.value)}></input>
                        <textarea className = 'form-control' id = 'bio-textbox' placeholder = 'User Bio' rows = '3' onChange = {(e) => setBio(e.target.value)}></textarea>

                        <input type = 'text' className = 'form-control' id = 'firstname' placeholder = 'First Name' onChange = {(e) => setFName(e.target.value)}></input>
                        <input type = 'text' className = 'form-control' id = 'lastname' placeholder = 'Last Name' onChange = {(e) => setLName(e.target.value)}></input>
                        
                        <button className = 'button' id = 'savechanges' onClick = {handleSubmit}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
