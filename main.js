let tasks = [
    {
        "title": "task1",
        "date": "13/10/2001",
        "isdone": false
    },
     {
        "title": "task-2",
        "date": "13/10/2001",
        "isdone": false
    },
     {
        "title": "task-3",
        "date": "13/10/2001",
        "isdone": false
    },
        {
        "title": "task-3",
        "date": "13/10/2001",
        "isdone": true
    }
]

function gettasksfromstorage(){
    
let retrievedtasks =JSON.parse( localStorage.getItem("tasks"))
if ( retrievedtasks == null ){
    tasks=[]
}else{
    tasks=retrievedtasks
}
}
  gettasksfromstorage()
function creat(){


  document.getElementById("tasks").innerHTML="";
let index = 0
for(task of tasks){
    let content = 
     `
                      <div class="task ${task.isdone? 'done' : ''}" >
                        <!-- task info -->
                         <div style=" width: 70%;">
                            <h2>${task.title}</h2>
                            <div> <span>${task.date}</span> </div>
                         </div>
                         <!--// task info// -->
                          <!-- task actions -->
                         <div style="display: flex; justify-content: space-between; align-items: center; width: 20%; color: white; ">
                             <button onclick=(delettask(${index})) class="circuler" style="background-color: red; color: white; ">
                                   <i class="fa-solid fa-trash"></i> 
                            </button>

                            ${task.isdone? 
                                `               
                                   <button onclick=(toggletaskcompletion(${index})) class="circuler" style="background-color: rgba(100, 4, 4, 1); color: white; ">
                                        <i class="fa-solid fa-xmark"></i>
                                   </button>
                                ` 
                                : 

                                `
                                  <button onclick=(toggletaskcompletion(${index})) class="circuler" style="background-color: rgba(0, 150, 57, 1); color: white; ">
                                         <i class="fa-solid fa-check"></i>
                                  </button>
                                `}
                            
                             <button onclick=(update(${index})) class="circuler" style="background-color: rgb(76, 0, 255); color: white; ">
                                <i class="fa-solid fa-pen"></i>
                            </button>

                         </div>
                         <!-- //task actions// -->
                      </div>
   `   
   document.getElementById("tasks").innerHTML+=content

  index++
}
}

creat()
        document.getElementById("add-btn").addEventListener("click", function(){
     
           let now = new Date()
           let dat= now.getDate() +"/"+(now.getMonth()+1)+"/"+now.getFullYear();


               let taskname =  prompt("add a task name") 
            if(taskname){
                        let taskopj= {
                        "title": taskname,
                           "date":dat,
                           "isdone": false
                     }

                  tasks.push(taskopj)
                     
                  storagetask()

                  creat()
            }

    
 

   })


// delete//

function delettask(index){
     let task = tasks[index]
    let x = confirm("هل انت متاكد من حذف :" +task.title)
 if(x){
     tasks.splice(index,1)
      storagetask()
    creat()
 }

}

function update(index){
    let task = tasks[index]
    let  newtasknam = prompt("الرجاء تحديد عنوان المهمه الجديده",task.title)
     if ( newtasknam){
          task.title =  newtasknam
             storagetask()

    creat()
     }
   
}

function toggletaskcompletion(index){
     let task = tasks[index]
     if (task.isdone){
        task.isdone=false
     }else{
        task.isdone=true
     }
        storagetask()
     creat()
}

// *****storage function******//

function storagetask(){
     let taskstring = JSON.stringify(tasks)
      localStorage.setItem("tasks",taskstring )
}


