let listTask;
let myForm = document.querySelector('.my-form');
let tbody = document.querySelector('.table__tbody');
let addTaskButton = document.querySelector('.my-form__btn');

function remove(array, element) {
  console.log(element);
  const index = array.indexOf(element);
  array.splice(index, 1);
  setData();
}

function getData() {
  listTask = JSON.parse(localStorage.getItem('listTask'));
  if(!listTask){
    listTask = [];
  }
  drawTable();
};

function setData() {
  localStorage.setItem('listTask', JSON.stringify(listTask));
  drawTable();
}

function doneTask() {
  let task = listTask[this.dataset.id];
  task.isDone = true;
  setData();
}

function increaseTask() {
  let task = listTask[this.dataset.id];
  let countPlan = task.countPlan;
  let countDone = task.countDone;
  if(countDone < countPlan){
    countDone += 1;
    task.countDone = countDone;
    setData();
  }
}

function deleteTask() {
  console.log('delete');
  let task = listTask[this.dataset.id];
  remove(listTask, task);
}

function setEvent() {
  if(listTask.length >0) {
    let btnDone = document.querySelectorAll('.btn--done');
    let btnIncrease = document.querySelectorAll('.btn--increase');
    let btnDelete = document.querySelectorAll('.btn--delete');
    for(let i = 0; i < btnDone.length; i++) {
      btnDone[i].addEventListener('click', doneTask);
      btnIncrease[i].addEventListener('click', increaseTask);
    }
    for(let i = 0; i < btnDelete.length; i++) {
      btnDelete[i].addEventListener('click', deleteTask);
    };
  }
}

function drawTable() {
  tbody.innerHTML =  listTask.map((task, id) =>
    `<tr>
      <td>${task.name}</td>
      <td>
        <span class="table__done">${task.countDone}</span>
        <span> / </span>
        <span class="table__planned">${task.countPlan}</span>
        <span class="table__pomodoro">pomodoro</span>
      </td>
      <td class="table__controls">
        ${ task.isDone ? `Finished` : `
          <button class="btn btn--done" data-id="${id}">Done</button>
          <button class="btn btn--increase" data-id="${id}">Increase Pomodoro Count</button>`
        }
        <button class="btn btn--delete" data-id="${id}">Delete Task</button>
      </td>
    </tr>`).join('');

  setEvent();
}

function createTask() {
  let task = {
    name: myForm.elements['name'].value,
    countDone: 0,
    countPlan: myForm.elements['count-plan'].value,
    isDone: false
  }
  if(!task.name) {
    alert('Please enter!');
  }else {
    listTask.push(task);
    setData();
  }
}

getData();

addTaskButton.addEventListener('click', createTask);
