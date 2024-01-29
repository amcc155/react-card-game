// access key: vE1uB0berfAcFQKwEJq1cUEplcnrLmEXe8onLGA3w1Q
// secret key: hFgktnstR6oOQx60pZ7trth8ey2jRBc5XcbN4kSpMm0

import React, { useState, useEffect } from "react";
import { getImageList } from "../services/FetchImage";
import shuffle from "../functions/shuffle";

const Image = ({score, setScore, setGameOver, data, setData, setScoreList, scoreList, setIsWon}) => {
  const [loading, setLoading] = useState(false);
  
  
  const handleImageClick = (clicked, index)=>{
    if(!clicked){
      setScore(score += 1)
      setScoreList(
        [
            ...scoreList,{num: score}
        ]
       
      )
      console.log(scoreList)
     }else if(clicked){
    setGameOver(true)
    if(score === data.length){
        setGameOver(true)
        setIsWon(true)
    }
    setScore(0)
  }
  

    const newData = (data.map((d, i) =>{
    if(i === index){
        return{...d, isClicked : !d.isClicked}
    }else{
        return d
    }
    
 }))
 setData(newData)
 shuffle(newData)
  }
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const imagesWithClicked = await getImageList()
        setData(imagesWithClicked);
        console.log(data)
        setLoading(false)
      } catch (error) {
        console.log("Error has occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="images">
       
      {data.map((image, index) => (
        
        <img onClick={() => handleImageClick(image.isClicked, index)} src={image.urls.regular} />
       
      ))}
    </div>
  );
      }

export default Image;
