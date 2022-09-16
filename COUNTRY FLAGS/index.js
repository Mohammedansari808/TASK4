let xhr=new XMLHttpRequest();
let url = "https://restcountries.com/v2/all";
xhr.onreadystatechange=function(){
    let value = (JSON.parse(xhr.response))
    for (let keys of value){
        console.log(keys.name , keys.flags)
    }
    
    
}

xhr.open("GET",url)
xhr.send();
