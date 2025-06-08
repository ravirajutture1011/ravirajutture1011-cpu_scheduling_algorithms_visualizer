import React from "react";

const Screen = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <select defaultValue="Pick a color" className="select">
        <option disabled={true}>Pick a color</option>
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>
    </div>
  );
};

export default Screen;
