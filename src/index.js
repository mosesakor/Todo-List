import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

const createTodoObject = (title, description, date) => {
  
}

const Dom = () => {
  const newTask = document.getElementById('newTask');
  newTask.onclick = openForm();

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  };
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  };
  
  function resetForm() {
    document.getElementById("form").reset()
  };
}

