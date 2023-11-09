import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  async function getToys() {
    const resp = await fetch(API);
    const data = await resp.json();
    setToys(data);
  }

  function handleDelete(toyId) {
    const updatedToys = toys.filter((toy) => {
      return toyId !== toy.id;
    });
    setToys([...updatedToys]);
  }

  useEffect(() => {
    getToys();
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonate={handleDelete} />
    </>
  );
}

export default App;
