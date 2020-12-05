const jokes = document.querySelector("#jokes")
const button = document.querySelector('button')
const errorM = document.querySelector('#errorMessage')
 const dadJoke = async () => {
     try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com', config)
        // console.log('from DAD jokes: ' + res.data.joke)
        let newLI = document.createElement('li')
        newLI.append(res.data.joke)
        jokes.append(newLI)

     } catch(e){
        errorM.innerHTML = 'Jokes are not available at the moment, please try again later ' + e;
     }
 }
 button.addEventListener('click', dadJoke)