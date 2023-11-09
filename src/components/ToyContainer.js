import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonate }) {
  const toyItems = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} onDonate={onDonate} />;
  });

  return <div id="toy-collection">{toyItems}</div>;
}

export default ToyContainer;
