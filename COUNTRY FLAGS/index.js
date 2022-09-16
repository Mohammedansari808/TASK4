let xhh = new XMLHttpRequest()
let url ="https://restcountries.com/v2/all"

xhh.onreadystatechange= function (){
    if (this.readyState===4){
    let data = JSON.parse(xhh.response)
        for (let keys of data){
            console.log(keys.name , keys.flags)
        }
    }
}




xhh.open("GET",url);
xhh.send()