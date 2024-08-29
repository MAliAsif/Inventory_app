// import React from 'react'

// import { onSnapshot, collection  } from "firebase/firestore";
// import { useEffect, useState } from "react";
// //  From firebase.js file, importing default "Firestore" .   handle name of datbase = db
// import { db } from "./firebase";  



// const MyComp = () => {


//     const [data,setData] = useState([])

//     useEffect( ()=>
//         onSnapshot(collection(db,"test"),(snapshot)=>
//             setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//     )
//      , [] );
 

//   return (
   
//     <ul>
//     {data.map((color) => (
//       <li key={color.id}>
//         {color.item} {color.model}
//       </li>
//     ))}
//   </ul>
//   )
// }

// export default MyComp

import { useEffect, useState } from "react";
import { onSnapshot, collection, setDoc, doc, addDoc } from "firebase/firestore";
import db from "./firebase";

const MyComp = () => {
  const [data, setData] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "test"), (snapshot) =>
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

const handleNew = async () => {
  const collectionRef = collection(db , "test" )
  const payload = {item: "Apple" , model: "MacBook-pro-new"}
  await addDoc(collectionRef,payload);
}



  return (
    <>
    <ul>
      {data.map((color) => (
        <li key={color.id}>
          {color.item} {color.model}
        </li>
      ))}
    </ul>

    
      <button onClick={handleNew}>New</button>
       

    </>
  );
};

export default MyComp;
