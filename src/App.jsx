import { onSnapshot, collection , query , orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";

import db from "./firebase";
import Dot from "./Dot";

//   importing functions from file utils.jsx 
import { handleNew, handleEdit , handleDelete, handleQueryDelete,updateColorValue } from "./utils";

export default function App() {
  const [colors, setColors] = useState([{ name: "Loading...", id: "initial" }]);

  useEffect(() => {
    const collectionRef = collection(db, "colors");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id : doc.id })))
    );

    return unsub;
  }, []);

  // Function to handle increment
  const handleIncrement = (id, currentValue) => {
    const newValue = parseInt(currentValue) + 1;
    updateColorValue(id, newValue); // Call updateColorValue to update the value in Firestore
  };

  // Function to handle decrement
  const handleDecrement = (id, currentValue) => {
    const newValue = parseInt(currentValue) - 1;
    if (newValue >= 0) { // Ensure the value doesn't go below 0
      updateColorValue(id, newValue); // Call updateColorValue to update the value in Firestore
    }
  };

  return (
    <>
      <h1 className="main-heading">Inventory Tracker App</h1>

      <div className="root">
 
        {/* <button className="button" onClick={handleQueryDelete}>
          Query Delete
        </button> */}

        <table className="product-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
            <br/> 
          </thead>
          <tbody>
            {colors.map((color) => (
              <tr key={color.id}  >
                <td>{color.name}</td>
                <td>{color.value}</td>
                <td>
                  <button
                    className="button1"
                    id="add-btn"
                    onClick={() => handleIncrement(color.id, color.value)}
                  >
                    +
                  </button>
                  <button
                    className="button1"
                    id="remove-btn"
                    onClick={() => handleDecrement(color.id, color.value)}
                  >
                    -
                  </button>
                  <button
                    className="button1"
                    id="edit-btn"
                    onClick={() => handleEdit(color.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="button1"
                    id="del-btn"
                    onClick={() => handleDelete(color.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="add-item-btn" onClick={handleNew}>
          Add Item
        </button>

      </div>
    </>
  );
}
