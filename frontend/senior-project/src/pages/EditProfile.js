import React, { useState } from "react";
import '../styles/EditProfile.css'

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profilepic: "",
            username: "",
            password: "",
            bio: "",
            fname: "",
            lname: "",
        };

        this.onProfilePicChange = this.onProfilePicChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onBioChange = this.onBioChange.bind(this);
        this.onFNameChange = this.onFNameChange.bind(this);
        this.onLNameChange = this.onLNameChange.bind(this);
    }

    onProfilePicChange(event) {
        this.setState({ profilepic: event.target.value });
    }

    onUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    onBioChange(event) {
        this.setState({ bio: event.target.value });
    }

    onFNameChange(event) {
        this.setState({ fname: event.target.value });
    }

    onLNameChange(event) {
        this.setState({ lname: event.target.value });
    }

    handleSubmit(event) {
        fetch("http://localhost:3001/editprofile", {
            method: "PUT",
            headers: {
                Accept: "application/josn",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                profilepic: this.state.profilepic,
                username: this.state.username,
                password: this.state.password,
                bio: this.state.bio,
                fname: this.state.fname,
                lname: this.state.lname,
            }),
        }).then((response) => {
            console.log(response);
        });
    }

    updateProfile() {
        fetch(`http://localhost:3001/profiles?token=${token}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response["user_data"][0]);
            })
    }
    
    render() {
        return (     
            <div className = 'body'>
                <div className = 'EditProfile-body'>
                    <div className = 'EditProfile-box'>
                        <h1>Edit Profile Page</h1>
                        <div className = 'EditProfile-input'>

                            <div className = 'pfp'>
                                <img src = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" id = 'pfp-image' alt="default pfp"></img>
                                {/* <button className = 'button' id = 'pfp-button'>Choose Picture</button> */}
                                <input type = 'text' className = 'form-control' id = 'profilepic' placeholder = 'Profile Picture Link' onChange = {this.onProfilePicChange}></input>
                            </div>

                            <input type = 'text' className = 'form-control' id = 'username' placeholder = 'Username' onChange = {this.onUsernameChange}></input>
                            <input type = 'password' className = 'form-control' id = 'password' placeholder = 'Password' onChange = {this.onPasswordChange}></input>
                            <textarea className = 'form-control' id = 'bio-textbox' placeholder = 'User Bio' rows = '3' onChange = {this.onBioChange}></textarea>

                            <input type = 'text' className = 'form-control' id = 'firstname' placeholder = 'First Name' onchange = {this.onFNameChange}></input>
                            <input type = 'text' className = 'form-control' id = 'lastname' placeholder = 'Last Name' onChange = {this.onLNameChange}></input>
                            
                            <button className = 'button' id = 'savechanges' onClick = {this.updateProfile}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;