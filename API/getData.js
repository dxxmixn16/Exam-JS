import url from "./url.js";

 async function getData () {
    try{
        const memeData = await fetch(url);
        if(!memeData.ok) {
           throw new error("Lo siento...", memeData.status);
        }
        const transformData = await memeData.json();
        return transformData.data.memes

    } catch(error){
        console.log(erro.message)
    }
}

export default getData;