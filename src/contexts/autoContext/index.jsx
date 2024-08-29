import { useContext, useEffect,useState } from "react";
import { auth } from "../../firebase/firebase";   
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider( {children} ){
    //    whenever the user will login, its info is stored in "currentUser" variable
    const [currentUser,setcurrentUser] = useState(null); 
    const [userLoggedIn, setuserLoggedIn] =  useState(false); //   if user logged in then this wil be set to true
    const [loading, setLoading] = useState(true)   //   if its true, it means our code is trying to find out the current Auth state of user

    //   whenevr the Auth state is changing, i.e user is logging in or , logging out then:
    //      -we want to subscribe those event changes by listening them
    //      -using useEffect() hook, we will subscribe to "Auth State Change event" . 

   
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth,initializeUser);
        return unsubscribe;
    },[] )


async function initializeUser(user) {
    if(user){  
        setcurrentUser({...user});
        setuserLoggedIn(true);               
    }
    else{
        setcurrentUser(null);
        setuserLoggedIn(false);
    }
    setLoading(false);
}

const value = {
    currentUser,
    userLoggedIn,
    loading
}
         //   setting value as a prop to AuthContext.Provider
return (
    <AuthContext.Provider value={value}> 
        {!loading && children}
    </AuthContext.Provider>
);
}