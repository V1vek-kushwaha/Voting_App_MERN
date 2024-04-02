import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
  const [currentUser, setCurrentUser] = useState();


 async function signIn (aadhaarNum,password){
    // console.log("signIn",aadhaarNum,password);
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}user/login`,{
      method:'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body:JSON.stringify({
        aadhaarCardNumber: aadhaarNum,
        password: password,
      })
    });

    const resData = await res.json();
    if(!resData.success){
      return {error : resData.message};
    }
    return resData;
  }
  function signUp (name,age,email,mobile,address,aadhaarNum,password){
    console.log("signUp")
   
  }
  function resetPassword (aadhaarNum){
    console.log("resetPassword")

  }
  function signOut (){
    console.log("signOut")

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

  }

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );



}