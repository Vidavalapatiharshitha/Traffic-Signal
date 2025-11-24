import React, { useState } from 'react'

function App() {
  const choices = ["Rock", "Paper", "Scissors"];

    const getEmoji = (choice) => {
      switch (choice) {
        case "Rock":
          return "✊";
        case "Paper":
          return "✋";
        case "Scissors":
          return "✌️";
        default:
          return "";
      }
    };

    const [userChoice, setUserChoice] = useState("");
    const [cpuChoice, setCpuChoice] = useState("");
    const [result, setResult] = useState("");

    const handleChoice = (choice) => {
      const random = choices[Math.floor(Math.random() * choices.length)];
      setUserChoice(choice);
      setCpuChoice(random);
      checkWinner(choice, random);
    };

    const checkWinner = (user, cpu) => {
      if (user === cpu) setResult("It's a Draw!");
      else if (
        (user === "Rock" && cpu === "Scissors") ||
        (user === "Paper" && cpu === "Rock") ||
        (user === "Scissors" && cpu === "Paper")
      )
        setResult("You Win!");
      else setResult("You Lose!");
    };

    const resetGame = () => {
      setUserChoice("");
      setCpuChoice("");
      setResult("");
    };

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h1 className="text-4xl font-bold mb-6">Rock Paper Scissors</h1>
        <h2 className="text-lg text-gray-600 mb-8">Make your choice</h2>

        <div className="flex gap-6 mb-10">
          <button
            onClick={() => handleChoice("Rock")}
            className="p-8 bg-blue-500 hover:bg-blue-600 rounded-full text-white text-xl"
          >
            ✊ Rock
          </button>

          <button
            onClick={() => handleChoice("Paper")}
            className="p-8 bg-yellow-500 hover:bg-yellow-600 rounded-full text-white text-xl"
          >
            ✋ Paper
          </button>

          <button
            onClick={() => handleChoice("Scissors")}
            className="p-8 bg-red-500 hover:bg-red-600 rounded-full text-white text-xl"
          >
            ✌️ Scissors
          </button>
        </div>

        <div className="flex gap-6 mb-6">
          <div className="p-6 bg-white shadow rounded-xl w-40">
            <p className="text-3xl">{getEmoji(userChoice)}</p>
            <p className="text-gray-600 mt-2">Your Choice</p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl w-40">
            <p className="text-3xl">{getEmoji(cpuChoice)}</p>
            <p className="text-gray-600 mt-2">CPU Choice</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-green-600">{result}</h2>

        <button
          onClick={resetGame}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          Play Again
        </button>
      </div>
    );
}

export default App
