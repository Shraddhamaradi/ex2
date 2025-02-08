// let person=
// {
//     "name":"kle",
//     "id":1,
//     "place":"bgm"
// }
// console.log(person["id"]);

let element=document.getElementById('text')
let changetextBtn=document.getElementById("changeTextBtn")
let changeColorBtn=document.getElementById("changeColorBtn")

changetextBtn.addEventListener("click",function()
{
    element.innerHTML="Text Changed using js"
})

changeColorBtn.addEventListener("click",function()
{
    document.body.style.backgroundColor="blue"
})
