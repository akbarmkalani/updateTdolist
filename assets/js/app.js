let _inputVlue = document.querySelector(".input-value")
let addBtn = document.querySelector('.btn')
const toDoList = document.getElementById('list')
 const filter= document.getElementById('filter')
// const todos = document.querySelectorAll('.todo');

 //console.log(filterOption);

 filter.addEventListener('change', _filter)
 toDoList.addEventListener('click', deletcompled)

 addBtn.addEventListener('click',  ()=> {
      temp = _inputVlue.value
    
       if((temp == '') ||
       (temp == null)) {
        alert('Please enter your text')
        }else{
            let _li = document.createElement('li')
            _li.classList.add("row","mx-0","px-0","m-3","justify-content-around")
            _li.innerHTML= `
                 <div class="todo col-9 d-flex 
                 align-items-center "> ${temp}</div>
        
                  <i class="bi bi-check2 col-1  d-flex justify-content-center
                  align-items-center" onclick="check(this)" ></i>
              
           
                  <i class="bi bi-trash3 col-1  d-flex justify-content-center
                  align-items-center" ></i>
          
      
            `
             toDoList.appendChild(_li)
             _inputVlue.value = ''
             _inputVlue.focus()
        }

 })

 function deletcompled(event) {
    /* console.log(event.target); */
   const items = event.target
 
    if(items.classList[1] === "bi-trash3"){
        todo =  items.parentElement
        todo.remove()
        //todo.style.height= "0"
    }
   /*  if(items.classList[1] === "bi-check2"){
      todo =  items.parentElement.classList.toggle("completed")
   //   todo.remove()
      //todo.style.height= "0"
  } */
   
 }
  function  _filter(e) {
       const _todo =  toDoList.childNodes

       _todo.forEach(todo => {
        switch (e.target.value) {
          case 'all':
            todo.style.display = 'flex';
            break;
            
          case 'completed':
            if (todo.classList.contains('completed')) {
              todo.style.display = 'flex';
            } else {
              todo.style.display = 'none';
            }
            break;
            case 'uncompleted':
                if (todo.classList.contains('completed')) {
                  todo.style.display = 'none';
                } else {
                  todo.style.display = 'flex';
                }
                break;
        }
      });
    
  }
 function  check(e){
     
   e.previousElementSibling.classList.toggle('completed')


 }


 
  
 
 
 
 
 
 
 
 
 
