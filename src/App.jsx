import { useState, useEffect } from "react";
import GetAdvice from "./components/GetAdvice";
import Count from "./components/Count";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <GetAdvice advice={advice} setAdvice={setAdvice} setCount={setCount} />
        <Count count={count} />
      </div>
    </div>
  );
}
