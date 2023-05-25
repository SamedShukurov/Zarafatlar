alert(
  "Diqqət bu sayt yalnız zarafat məqsədi ilə yaradılmışdır, kimisə təhqir etmək məqsədi ilə yox!!!"
);

console.log("Nə  gəzirsən burda çox bilmiş");
console.log("Get burdan");
let continued = document.querySelector(".continued");

continued.addEventListener("click",()=>{
  continued.classList.add("active")
  //   continued.classList.toggle("active")
  if(continued.className === "active"){
    continued.classList.remove("continued")
  }
  else{
    continued.classList.add("continued")
  }
})