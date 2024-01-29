const getImageList = async () => {
   
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=animals`,
        {
          headers: {
            Authorization:
              "Client-ID vE1uB0berfAcFQKwEJq1cUEplcnrLmEXe8onLGA3w1Q",
          },
        }
      );
      let dataJson = await response.json();
      console.log(dataJson)
      const imagesWithClicked = dataJson.results.map((image, index) => ({...image, isClicked : false}))
      return(imagesWithClicked)
      
    } catch (error) {
      console.log("Error has occurred:", error);
      throw error;
    }
}
export{getImageList}