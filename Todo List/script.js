document.addEventListener('DOMContentLoaded', function(){

	const task 	= document.getElementById('task');
	const desc 	= document.getElementById('description');
	const btn 	= document.getElementById('btn-add');
	const alert = document.getElementById('div-alert');
	const table = document.getElementById('table')

	let todos = JSON.parse(localStorage.getItem("todo")) || []

	// function editTodo(id){
	// 	console.log('editing', id);
	// 	let newTitle = prompt("New Title")
	// 	let newDesc = prompt("New Description")
	// 	let newTodo = todos.filter(todo => todo.id == id)
		


	// 	newTodo[0].title = newTitle;
	// 	newTodo[0].description = newDesc;
	// 	todos.push(newTodo[0])
	// 	localStorage.setItem("todo", JSON.stringify(todos))
	// }

	function removeTodo(id){
		document.getElementById(id).remove();
		id = parseInt(id)
		todos = todos.filter(todo => todo.id !== id)
		localStorage.setItem("todo", JSON.stringify(todos))

	}

	function addTodo(){
		if (task.value.trim() === "" || desc.value.trim() === "") {
			alert.classList.remove('green');
			alert.removeAttribute('hidden');
			alert.innerText = 'Task name and description are required!';

		} else {
			let todoObj = { 'id': Date.now(),'title': task.value.trim(), 'description': desc.value.trim(), 'completed': false}
			console.log(todoObj);
			todos.push(todoObj)
			localStorage.setItem("todo", JSON.stringify(todos))
			alert.setAttribute('hidden', true);
			task.value = "";
			desc.value = "";
			showTodos()
		}
	}

	btn.onclick = addTodo;

	function showTodos() {
		table.innerHTML = `
		<tbody>
		<tr>
		<td>Tittle</td>
		<td>Description</td>
		<td>Completed</td>
		</tr>
		</tbody>
		`
		todos.forEach(todo =>{
			const row = table.insertRow();
				row.setAttribute('id', todo.id);
				row.innerHTML = `
					<td>${todo.title}</td>
					<td>${todo.description}</td>
					<td><input type="checkbox"></td>
					<td>
					
					</td>
				`;
			// const editBtn = document.createElement('button');
			// 	editBtn.classList.add('edit', 'fas', 'fa-pencil-alt')
			// 	editBtn.onclick = function(){
			// 		editTodo(row.getAttribute('id'))
			// 	}
			// 	row.children[3].appendChild(editBtn)

			const removeBtn = document.createElement('button');
				removeBtn.classList.add('delete', 'fas', 'fa-trash-alt')
				removeBtn.onclick = function(e){
					removeTodo(row.getAttribute('id'));
				}
				row.children[3].appendChild(removeBtn);	
		})
	}

	showTodos()

});