const nameInput=document.querySelector(".name")
const nametag=document.querySelector(".name-tag")
const ageInput=document.querySelector(".age")
const agevalue=document.querySelector(".age-value")


// nametag.innerHTML=localStorage.getItem("myName")
// nameInput.addEventListener('input',(e)=>{
  
// localStorage.setItem("myName",e.target.value)
// nametag.innerHTML=localStorage.myName

// })

// agevalue.innerHTML=localStorage.getItem("age")

// ageInput.addEventListener('input',(e)=>{
//     localStorage.setItem("age",e.target.value)
//     agevalue.innerHTML=localStorage.age

// })
const mydata=JSON.parse( localStorage.getItem('myData'))||{}

nameInput.addEventListener("input",(e)=>{
    mydata.name=e.target.value 
    localStorage.setItem('myData',JSON.stringify(mydata))
    nametag.innerHTML=e.target.value
})
ageInput.addEventListener('input',(e)=>{
    mydata.age=e.target.value
    localStorage.setItem("myData",JSON.stringify(mydata))
    agevalue.innerHTML=e.target.value
    })

agevalue.innerHTML=mydata.age
nametag.innerHTML=mydata.name

