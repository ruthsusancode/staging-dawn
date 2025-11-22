import { useState } from "react";

export default function App() {
  const [IsVisible, setIsVisible] = useState(false);
  const [isRed, setIsRed] = useState(false);

  return (
    <div>
      <h1>Micro Project 5 - Toggle</h1>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>

      <button onClick={() => setIsRed(!isRed)}>Toggle Color</button>

      {isVisible && (
        <p style={{ color: isRed ? "red" : "blue" }}>
          This is the toggled message!
        </p>
      )}
    </div>
  );
}
