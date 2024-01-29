import "./App.css";
import ScoreBoard from "./components/ScoreBoard.";
import Image from "./components/Image";
import Modal from "./components/modal";
import Header from "./components/Header";
import { useEffect, useState } from "react";
function App() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const[isWon, setIsWon] = useState(false)
  const [data, setData] = useState([]);
  const[scoreList, setScoreList] = useState([])

  return (
    <>
    <Header/>
      <ScoreBoard score={score} scoreList = {scoreList}/>

      {gameOver ? (
        <Modal setGameOver = {setGameOver}
        gameOver={gameOver} 
        setData = {setData}
        isWon = {isWon}/>
      ) : (
        <>
          <Image score={score} setScore={setScore} setGameOver={setGameOver} 
          data = {data}
          setData = {setData}
          setScoreList = {setScoreList}
          scoreList = {scoreList}
          setisWon = {setIsWon}/>
        </>
      )}
    </>
  );
}

export default App;
