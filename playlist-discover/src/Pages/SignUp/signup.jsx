import React, {useState} from 'react';
import './signup.css';
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

  
  // Initialize Firebase

/*
export default function SignUp() {
    const auth = firebase.auth();
    const db = firebase.firestore();

    const instuff = document.getElementsByClassName("in");
    const outstuff = document.getElementsByClassName("out");
    const username = document.getElementById("username");
    const locations = document.getElementById("locations");
    const added = document.getElementById("added");
    const upvotes = document.getElementById("upvotes");
    const profilepic = document.getElementById("profile-pic");
    
   
    
// signup
const doSignUp = () => {
    const email = this.email.value;
    const password = this.password.value;

        // sign up the user and add to the database using unique userID
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return db.collection('users').doc(cred.user.uid).set({
                photoURL: signupForm['signup-photoURL'].value,
                locations: 0,
                added: 0,
                upvotes: 0
            });
        }).then(() => {
            // reset form to blank inputs
            signupForm.reset();
        }).catch(err => {
            alert(err.message);
        })
}
    const signupForm = document.querySelector('#signup-form');
    /*
    signupForm.addEventListener('submit', (e) => {
        // this is to stop the page from refreshing when form is submitted
        e.preventDefault();

        // get user info
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        // sign up the user and add to the database using unique userID
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return db.collection('users').doc(cred.user.uid).set({
                photoURL: signupForm['signup-photoURL'].value,
                locations: 0,
                added: 0,
                upvotes: 0
            });
        }).then(() => {
            // reset form to blank inputs
            signupForm.reset();
        }).catch(err => {
            alert(err.message);
        })
    });
    

    return (
        <div class="signup-container in">
            <h1>Sign Up</h1>
            <form id="signup-form">
                <div className="input-field">
                    <input type="email" id="signup-email" placeholder="Email address" ref={input => this.email = input} required />
                </div>
                <div className="input-field">
                    <input type="password" id="signup-password" placeholder="Password" ref={input => this.password = input} required />
                </div>
                <div className="input-field">
                    <input type="url" id="signup-photoURL" placeholder="photoURL" required />
                </div>
                <button onClick={doSignUp} class="butt">Sign up</button>
            </form>
            
        </div>
    )

}*/

  //firebase.initializeApp();
const LoginForm = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCLgj9054PJz9gh8WhkJkQcr1gY2pzPAIM",
                authDomain: "playlist-e363a.firebaseapp.com",
                projectId: "playlist-e363a",
                storageBucket: "playlist-e363a.appspot.com",
                messagingSenderId: "821399492309",
                appId: "1:821399492309:web:06d8eb435c88e509a7345c",
                // measurementId: "G-85VW1TPZ5T"
      };
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }else {
        firebase.app(); // if already initialized, use that one
      }
      //firebase.analytics();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const doSignUp = () => {
        const auth = firebase.auth();
        const db = firebase.firestore();
    
        
        // const instuff = document.getElementsByClassName("in");
        const outstuff = document.getElementsByClassName("out");
        const username = document.getElementById("username");
        const locations = document.getElementById("locations");
        const added = document.getElementById("added");
        const upvotes = document.getElementById("upvotes");
        const profilepic = document.getElementById("profile-pic");

        //const email = this.email.value;
        //const password = this.password.value;
        const signupForm = document.querySelector('#signup-form');
    
            // sign up the user and add to the database using unique userID
            auth.createUserWithEmailAndPassword(email, password).then(cred => {
                console.log(cred);
                return db.collection('users').doc(cred.user.uid).set({
                    photoURL: signupForm['signup-photoURL'].value,
                    locations: 0,
                    added: 0,
                    upvotes: 0
                });
            }).then(() => {
                console.log("hello");
                // reset form to blank inputs
                //signupForm.reset();
            }).catch(err => {
                alert(err.message);
            })
    }


     

        return (
          <form>
            <input
                type="text"
                className="form-control mb-2 mr-sm-2 mb-sm-0"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>  
            <button 
                onClick={doSignUp}
                type="submit" 
                className="btn btn-primary">SignUp
            </button>
        </form>
        );
      }
   

export default LoginForm