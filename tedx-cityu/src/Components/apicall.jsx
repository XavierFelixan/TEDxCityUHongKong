export default class API{
    // Insert an article
    static addRegistrant = async (body, url) => {
        return fetch(`${url}/registration`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json',
            mode: 'no-cors' 
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}