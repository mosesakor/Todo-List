import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

const createTodoObject = () => {

  const getUserInput = () => {
    return Object.values(Array.from(document.querySelectorAll('input')).reduce((a, input) => ({...a, [input.id]: input.value}), {}))
  };

  const userInput = getUserInput;

  const todoObject = (title, details, date) => {

  }

};

const project = () => {
  const projects = {}

  projects["Default Project"] = "la"
}



const Dom = () => {

  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const addTask = document.getElementById("addTask");

  openBtn.onclick = openForm;
  closeBtn.onclick = closeForm;
  addTask.onclick;

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  };
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  };
  
  function resetForm() {
    document.getElementById("form").reset()
  };

  return {}
}

Dom();
getUserInput.input();





