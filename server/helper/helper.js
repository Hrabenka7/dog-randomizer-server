function formatParamsResponse(response) {
    var partsURL = response.data.message.split("/");
    var breed = {breed: partsURL[partsURL.length -2]}
    var imageName = {imageName: partsURL[partsURL.length -1]}
    var formattedResponse = { ...response.data, ...breed, ...imageName }
    return formattedResponse;
  }
  
  
function formatBreedData(apiResponseData)
  {  
    var breedData = [];
    for (var breedName in apiResponseData) {
      var subBreeds = apiResponseData[breedName];
      breedData.push ({
        "breedName": breedName,
        "subBreeds": subBreeds
      });
    }
    return breedData;
  
  }

  module.exports = { formatParamsResponse, formatBreedData}