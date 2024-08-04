import React from "react";

function Loader() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-grayscale-950">
      <span
        style={{ fontFamily: "SuperMario" }}
        className="absolute text-xl text-primary-400"
      >
        G
      </span>
      <div className="loader" />
    </div>
  );
}

export default Loader;
