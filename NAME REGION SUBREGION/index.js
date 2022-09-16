let xreq = new XMLHttpRequest()
let link = "https://restcountries.com/v2/all"

xreq.onreadystatechange= function(){
    let xarr = JSON.parse(xreq.response)
    if (xreq.readyState === 4){
        for (let key of xarr){
            console.log(`NAME : ${key.name} REGION : ${key.region} SUBREGION : ${key.subregion} 
            POPULATION : ${key.population}`)
        }
    }
}





xreq.open("GET",link)
xreq.send();