import firebase from "./firebase";
import {useHistory} from 'react-router-dom'
const myAuth = firebase.auth();

export const inscription = async (name,email,mdp) => {

      await  myAuth.createUserWithEmailAndPassword(email,mdp);

  return  myAuth.currentUser.updateProfile({
      displayName: name
});
};

export const myLogin = async (email,mdp) => {
 

  return  await  myAuth.signInWithEmailAndPassword(email,mdp);

};
export const  logout=async() =>{

      try {
  
        await myAuth.signOut();
  
  
      } catch (error) {
        console.log(error);
      }
  
    }

export const getCurrentUser = () => {
 

      return    myAuth.currentUser;
    
    };
