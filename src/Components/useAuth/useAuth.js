import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebaseConfig';


firebase.initializeApp(firebaseConfig);

const useAuth = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password:''
      })
    
      const provider = new firebase.auth.GoogleAuthProvider();
      const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(result =>  {
          const {displayName, photoURL, email} = result.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(signedInUser);
          console.log(displayName, email, photoURL);
        })
        .catch(error => {
          console.log(error);
          console.log(error.message);
        })
      }
    
      const handleSignOut = () => {
        firebase.auth().signOut()
        .then(result => {
          const signedOutUser = {
            isSignedIn : false,
            name:'',
            photo: '',
            email:'',
            password:''
          }
          setUser(signedOutUser);
        })
        .catch(error =>{
    
        })
        //console.log('Clicked Sign Out');
      }
    
     //const is_valid_email = email =>  /^.+@.+\..+$/.test(email);
    
    const handleChange = event =>{
      const newUserInfo = {
        ...user
      };
      //perform validation
    
      /*if(event.target.name === 'email'){
        console.log(is_valid_email(event.target.value));
      }*/
    
      newUserInfo[event.target.name]= event.target.value;
      setUser(newUserInfo);
     // console.log(setUser);
    }
    
      const handleCreateAc = (event) =>{
        if(user.isValid){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res => {
            console.log(res);
            const createdUser = {...user};
            createdUser.isSignedIn = true;
            setUser(createdUser);
          })
          .catch(err => {
            console.log(err);
          })
        }
        //console.log(user.email, user.password);
      } 
    
    
    
      return (
        <div className="App">
          {
            user.isSignedIn ? <button className= "btn" onClick={handleSignOut}>Sign Out</button> :
            <button className= "btn" onClick={handleSignIn}>Sign In</button>
          }
          {
            user.isSignedIn && <div>
            <p>Welcome {user.name} </p>
            <img src={user.photo} alt=""/>
            </div>
          }
          <h1>Email Authentication</h1>
          <form onSubmit={handleCreateAc}>
          <input required onBlur={handleChange} type="name" name="name" id="" placeholder="Name"/>
            <br/>
            <input required onBlur={handleChange} type="email" name="email" id="" placeholder="Email"/>
            <br/>
            <input required onBlur={handleChange} type="password" name="password" id="" placeholder="password"/>
            <br/>
            <input type="submit" value="Create Account"/>
            </form>
        </div>
      )
      }
    

export default useAuth;