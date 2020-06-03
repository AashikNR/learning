function get_todos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    console.log(todos_str);
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    var btn = document.getElementById("add");
    btn.innerHTML = 'ADD';
    document.getElementById("myform").reset();
    show();
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    var btn = document.getElementById("add");
    btn.innerHTML = 'ADD';
    show();
}

function edit() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    var edita_value = todos[id];
    document.getElementById("task").value = edita_value;
    var btn = document.getElementById("add");
    btn.innerHTML = 'EDIT';
    console.log(edita_value);
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">Delete</button><button class="edit" id="'+i+ '">Edit</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    var remove_data = document.getElementsByClassName('remove');
    for (var i=0; i < remove_data.length; i++) {
        remove_data[i].addEventListener('click', remove);
    };
    var edit_data = document.getElementsByClassName('edit');
    for (var i=0; i < edit_data.length; i++) {
        edit_data[i].addEventListener('click', edit);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();