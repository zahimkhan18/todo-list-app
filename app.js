

// addTodo function

function addTodo() {
    var todoParent = document.getElementById("todoParent")
    
    var todoInput = document.getElementById("todoInput")
    if (todoInput.value.length < 2) {
        alert("Enter correct todo value")
        return
    }


  
    var p = document.createElement("p")

    p.innerHTML = todoInput.value


    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute("onClick", "delTodo(this)")
    var editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit"
    editBtn.setAttribute("onClick", "editTodo(this)")

    console.log("deleteBtn", deleteBtn)
    p.appendChild(editBtn)
    p.appendChild(deleteBtn)


    todoParent.appendChild(p)
    todoInput.value = ""
}
// =============================================================================================================

// deleteAll function


function deleteAll() {
    var todoParent = document.getElementById("todoParent")
    console.log(todoParent.innerHTML)
    todoParent.innerHTML = ""
}
// =============================================================================================================

// delete function

function delTodo(ele) {
    console.log("delTodo", ele.parentNode)

    ele.parentNode.remove()
}   
// ==============================================================================================================

// edit function

function editTodo(ele){
    var editvalue = prompt("enter edit value",ele.previousSibling.nodeValue)
    console.log(editvalue)
    ele.previousSibling.nodeValue = editvalue

}

