import "../styles/Scoreboard.css"
const ScoreBoard = ({score, scoreList})=>{
    const scoreNumbers = scoreList.map((score) =>{
        return score.num
     })
     const highestNumber = Math.max(...scoreNumbers)

    return(
        <div className="scoreBoard">
            <p> Current Score:  {score} </p>
          
            <p class = 'highest'>Highest Score: {highestNumber} </p>
            </div>
    )
}
export default ScoreBoard