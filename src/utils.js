const apiKey = "$2b$10$YtglDrWiRzphuz5Z9vlh.uA/Ak0ZnHcvSIAUZr0y5B5SK.E/KPFbe"
const collectionId = "6327791ba1610e63862f9268"
const url = `https://api.jsonbin.io/v3/c/${collectionId}/bins`;

export const readData = () => {
    
    const response = fetch(url, {
        method: "GET",
        headers: {
          "X-Master-Key": apiKey,
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));
    
    return response
}

export const readBin =  async (binId) => {

    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': `${apiKey}`
        }
    })

    return response.json()

}