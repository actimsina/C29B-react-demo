import { useState } from "react";
import Feedback from "./components/Feedback";

function App({ name, age }) {
  const [counter, setCounter] = useState(0)

  // setTimeout(() => setCounter(counter + 1), 1000)

  console.log(`Rendering ${counter} ...`)

  const handlePlus = () => setCounter(counter + 1)


  return (
    <>
      <h2>Hello {name}, You're {age} years old.</h2>
      <h2>{counter}</h2>
      <button onClick={handlePlus}>Plus</button>

      <Feedback />
    </>
  );
}

export default App;
