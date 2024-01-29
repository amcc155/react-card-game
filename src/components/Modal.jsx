import { getImageList } from "../services/FetchImage"
import "../styles/Modal.css"
const Modal = ({gameOver, setGameOver, setData, isWon}) =>{
    const handleButtonClick = async ()=>{
        console.log('ok')
        try{
            const imagesWithClicked = await getImageList()
            setData(imagesWithClicked)
            console.log(gameOver)
         
        }catch(error){
            console.log(error)
        }finally{
            setGameOver(false)
           
        }
    }
    return(
        <>
        {isWon ? (
            <p>You Won</p>
        ) : (
            <p>You Lost</p>
        )}
        
        <div className="modalContainer">
            <div class = 'content'>
        <p> Game Over </p>
        <h1> Test </h1>
      
       <button className="modalBtn" onClick={()=> handleButtonClick()} > Play Again </button>
       </div>
        </div>
        </>
    )
}
export default Modal