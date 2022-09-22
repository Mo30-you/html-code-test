var counter = 1 ;
let anyNumber = () =>{
    let set =document.querySelector("#set")
    set.textContent= `change ${counter++} limed`
} 


 let setIV= setInterval(
     anyNumber ,1000
     )
setTimeout(()=>clearInterval(setIV),10000)
