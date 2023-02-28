let taskInput = document.querySelector('.add-tasks input'),
    taskIcon = document.querySelector('.add-tasks i'),
    taskContent = document.querySelector('.tasks-content'),
    taskCountSpan = document.querySelector(".tasks-count span"),
    taskCompletedSpan = document.querySelector(".tasks-completed span");
// Focus On Input
window.onload = function () {
    taskInput.focus()
};
// Function Click On Icon
taskIcon.onclick = function () {
    // IF Input Empty
    if (taskInput.value === '') {
        console.log('felo')
    }
    else {
        let taskContentNoMsg = document.querySelector('.no-tasks')
        if (document.body.contains(document.querySelector('.no-tasks'))) {
            taskContentNoMsg.remove();
        }
        // Create Tasks Span
        let newSpan = document.createElement('span')
        // Create Text To Span
        let spanText = document.createTextNode(taskInput.value)
        // Add Class Name To New Span
        newSpan.classList.add('task-box')
        // Create Delete Span
        let spanDelete = document.createElement('span')
        // Create Text To delete Span
        let deleteText = document.createTextNode('Delete')
        // Add Class Name To Span Delete
        spanDelete.className = 'delete'
        // Add Delete Text To Span Delete
        spanDelete.appendChild(deleteText)
        // Add Span Text To New Span
        newSpan.appendChild(spanText)
        // Add Span Delete To New Span
        newSpan.appendChild(spanDelete)
        // Add New Span To Tasks-Content
        taskContent.appendChild(newSpan)
        // Empty Task Input
        taskInput.value = '';
        // Return Focus To Task Input
        taskInput.focus();
        // Calculate Function
        calculate();
    }
    // console.log(taskIcon)
}
document.addEventListener('click', function (e) {
    if (e.target.className === 'delete') {
        e.target.parentNode.remove()
        if (taskContent.childElementCount === 0) {
            createNoMsg()
        }
        // calculate()
    }
    if (e.target.classList.contains('task-box')) {
        e.target.classList.toggle('finished')
        // calculate()
    }
    // Calculate Function
    calculate()
})
// Function To Create No Tasks Message
function createNoMsg() {
    let spanNoMsg = document.createElement('span'),
        spanTextNoMsg = document.createTextNode('No Tasks To Add');
        spanNoMsg.className = 'no-tasks'
    spanNoMsg.appendChild(spanTextNoMsg)
    taskContent.appendChild(spanNoMsg)
}
function calculate() {
    // Calculate All Tasks
    taskCountSpan.innerHTML = document.querySelectorAll('.tasks-content .task-box').length
    // Calculate Completed Tasks
    taskCompletedSpan.innerHTML = document.querySelectorAll('.tasks-content .finished').length
}



















