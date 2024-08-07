import React from "react";

function Pokemon({ id, name, type }) {
  return (
    <div style={{ border: "2px solid green" }}>
      <h3>{id}</h3>
      <p>Name of Pakemon: {name}</p>
      <p>Type of Pakemon: {type}</p>
    </div>
  );
}

export default Pokemon;
