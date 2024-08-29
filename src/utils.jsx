import {   collection,
    addDoc,
    setDoc,
    doc,
    deleteDoc,
    query,
    where,
    getDocs, serverTimestamp,
    updateDoc
} from "firebase/firestore";
import db from "./firebase";


export const handleNew = async () => {
  const name = prompt("Enter color name");
  const value = 1; // Initialize value to 1

  const collectionRef = collection(db, "colors");

  //      keeping track of time by using servertimestamp() func
  const payload = { name, value , timestamp:serverTimestamp() };

  const docRef = await addDoc(collectionRef, payload);
  console.log("The new ID is: " + docRef.id);
};

            
//   Editing the data base by giving id reference - "setDocs"

export const handleEdit = async (id) => 
    {
  const name = prompt("Enter new item ");
  const value = 1; // Initialize value to 1

  const docRef = doc(db, "colors", id);
  const payload = { name, value , timestamp:serverTimestamp()};

//      setDoc(docRef, payload); . setDoc overrides the entire doc, removing the timestamp. To remain timestamp unchanged, and to edit only specific properties using update doc 
 updateDoc(docRef, payload);

    };

// Simply Deleting the data base by giving id reference - "deleteDoc"

export const handleDelete = async(id) => {
    const docRef = doc(db, "colors", id);
    await deleteDoc(docRef)
}

//   Quering to delete the data
export const handleQueryDelete = async () => {
    const userInputName = prompt("Enter color name");
  
    const collectionRef = collection(db, "colors");
    const q = query(collectionRef, where("name", "==", userInputName));


    const snapshot = await getDocs(q);
  
    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
    results.forEach(async (result) => {
      const docRef = doc(db, "colors", result.id);
      await deleteDoc(docRef);
    });
  };

  // Function to update the value in Firestore
export const updateColorValue = async (id, newValue) => {
  const docRef = doc(db, "colors", id);
  const payload = { value: newValue, timestamp: serverTimestamp() };
  await updateDoc(docRef, payload);
};