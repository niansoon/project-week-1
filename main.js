//When page loads
window.addEventListener('load', function() {
    const project = document.querySelector('#taskProject');
    const input = document.querySelector('#taskInput');
    const lists = document.querySelector('#tasks');

    //Prevents page from refreshing after pressing submit
    project.addEventListener('submit', function(event) {
        event.preventDefault();

        //If text box is empty when pressed submit
        const text = input.value;
        if (!text) {
            alert("No task found, please write something!")
            return;
        }

        //Creating DOM Elements (nodes), https://www.w3schools.com/js/js_htmldom_nodes.asp
        //Creating Task
        const task = document.createElement("div"); //Element div
        task.classList.add("task"); //Class task
        
        //Creating Task Content
        const taskContent = document.createElement("div"); //Element div
        taskContent.classList.add("content"); //Class content

        //Creating Task Input        
        const taskInput = document.createElement("input"); //Element input
        taskInput.classList.add("text"); //Class text
        taskInput.type = "text";
        taskInput.value = text;
        taskInput.setAttribute("ReadOnly", "readonly"); //setAttribute(name, value)

        //Append Task Input to Task Content
        taskContent.appendChild(taskInput);
        //Append Task Content to Task
        task.appendChild(taskContent);

        //Creating Actions
        const taskAction = document.createElement("div"); //Element div
        taskAction.classList.add("actions"); //Class actions

        //Creating Edit Button
        const taskEdit = document.createElement("button"); //Element button
        taskEdit.classList.add("edit"); //Class edit
        taskEdit.innerHTML = "Edit"; //Name of Edit button

        //Creating Delete Button
        const taskDelete = document.createElement("button"); //Element button
        taskDelete.classList.add("delete"); //Class delete
        taskDelete.innerHTML = "Delete"; //Name of Delete button

        //Append Edit & Delete to Actions
        taskAction.appendChild(taskEdit);
        taskAction.appendChild(taskDelete);
        //Append Actions to Task
        task.appendChild(taskAction);
        //Append Task to overall Tasks
        lists.appendChild(task);

        input.value = ""; // Text Box becomes empty after submit

        //Making the Edit button work
        taskEdit.addEventListener('click', function() {
            if(taskEdit.innerText.toLowerCase() == "edit") {
                taskInput.removeAttribute("readonly"); //removeAttribute(attrName)
                taskInput.focus(); //Focus on task when press edit
                taskEdit.innerText = "Save";
            }
            else {
                taskInput.setAttribute("ReadOnly", "readonly");
                taskEdit.innerText = "Edit";
            }
        });

        taskDelete.addEventListener('click', function() {
            lists.removeChild(task);
        });
        
    });
});