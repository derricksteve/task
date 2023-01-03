var task_number=0;

function addTask(element) {
   if(!element=="add") deletes(element);
    
    else{
        const newTask = "<div id='"+task_number+"'    class='div'><li id='"+task_number+"bah'     class='li'>" + task.value +'</li>'+ "<button onclick='deletes("+task_number+")' class='button'>Supprimer </button><button onclick='modifier("+task_number+")' class='button'>Modifier </button></div><br>";
    listTasks.innerHTML += newTask;
    $(listTasks).listview('refresh');
    task_number++;
    }
}
function resetTasks() {
    listTasks.innerHTML = "";
}
function deletes(task_number){
  
    document.getElementById(task_number).remove();
   

    
}
function modifier(task_number){

    
  
  var val=document.getElementById(task_number+"bah").textContent;

  document.getElementById("add").id = task_number;

  document.getElementById("task").value = val;
  
   

}
// $(".swipetest").on("swiperight",function(){
//     $(".swipetest").addClass("terminatedTasks");
//     $(listTasks).listview('refresh');
// });
