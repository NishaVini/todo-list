
let inputElement = document.getElementById("inputField");

let clickBtn = document.querySelector(".btn");
let todoList = document.querySelector(".todoElement");


todoList.addEventListener("click",(event)=>{
   console.log(event.target);
   if(event.target.classList.contains("deletBtn")){
  
    const todoItem = event.target.closest('.main_todo_list');
    if (todoItem) {
        todoList.removeChild(todoItem);
    }
   }
});




 const addtodo = () => {
 
     creatDivElement = document.createElement("div");
     console.log(creatDivElement);
         creatDivElement.classList.add("main_todo_list");
                creatDivElement.innerHTML= `<li class="in">${inputElement.value}</li> <button class="deletBtn">Delet</button>`;
                console.log(creatDivElement.innerHTML);
      todoList.append(creatDivElement);
            inputElement.value="";
 }


clickBtn.addEventListener( "click", () => {
        if(inputElement.value==""){
            alert(" input element is blanck , please fill the some text");
            }
         else{
                 addtodo();
          
            }
});










