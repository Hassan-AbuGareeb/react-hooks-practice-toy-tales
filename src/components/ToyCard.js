import React, { useState } from "react";

function ToyCard({ toy, onDonate }) {
  const { name, image, likes, id } = toy;
  const [toyLikes, setLikes] = useState(likes);

  function handleDonateClick() {
    onDonate(id);
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  function handleLikeClick() {
    setLikes((prev) => prev + 1);
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: toyLikes + 1 }),
    });
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{toyLikes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDonateClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
