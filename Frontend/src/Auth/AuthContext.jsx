import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
  const [currentUser, setCurrentUser] = useState();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const token = JSON.parse(localStorage.getItem('token'));
 


 async function signIn (aadhaarNum,password){
  try {
    
     const response = await fetch(`${import.meta.env.VITE_BASE_URL}user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        aadhaarCardNumber: aadhaarNum,
        password: password,
      })
  } );

    if (!response.ok) {
      throw new Error('Invalid username or password');
    }
    const userData = await response.json();
   
    localStorage.setItem('userInfo', JSON.stringify(userData.data));
    localStorage.setItem('token', JSON.stringify(userData.token));
    setCurrentUser(userData.token)

    return userData;
  
  } catch (error) {
    alert(error.message);
    

  }
}
const clearLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userInfo');
};
  function signUp (name,age,email,mobile,address,aadhaarNum,password){
    console.log("signUp")
   
  }
  function resetPassword (aadhaarNum){
    console.log("resetPassword")

  }
  function Verify (){
    if(currentUser == token){
        return true;
    }else{
      return false
    }

  }
  function signOut (){
    clearLocalStorage();
   

  }
  function profile (){
    console.log("profile")

  }


  const value ={
    signIn,
    signUp,
    resetPassword,
    signOut,
    profile,
    clearLocalStorage,
    token,
    userInfo

    
   

  }

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );



}