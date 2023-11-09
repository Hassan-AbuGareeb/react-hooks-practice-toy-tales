import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [toyData, setToyData] = useState({
    name: "",
    image: "",
    likes: 0,
  });

  function handleSubmit(event) {
    event.preventDefault();
    onAddToy((prev) => [...prev, toyData]);
    console.log(toyData);
    fetch("http://localhost:3001/toys/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: toyData.name,
        image: toyData.image,
        likes: toyData.likes,
      }),
    });
  }

  function handleInputChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    setToyData({ ...toyData, [key]: value });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleInputChange}
          value={toyData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleInputChange}
          value={toyData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
