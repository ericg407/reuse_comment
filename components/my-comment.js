import { doc } from "prettier";

class MyComment extends HTMLElement {
    constructor() {
        super();

    }



    connectedCallback() {
        this.innerHTML = `<h2>Hello world. Show me what you got?</h2>
  
       
    <div class="row">
    <!-- <div class="column left" style="background-color:#FFB695;">
        <h2>Name</h2>
        <p>
            <ul id="names"></ul>
        </p>
    </div>
    <div class="column middle" style="background-color:#96D1CD;">
        <h2>Email</h2>
        <p>
            <ul id="emails"></ul>
        </p>
    </div> -->
    <div class="column right" style="background-color:#74C3E1;">
        <h2>Comments</h2>
        <p>
        <img id="photo" />
            <ul id="todos"></ul>
        </p>
    </div>
</div>

<br><br>
<form>

    <!--         <input type="submit" value="Add Todo"> -->

    Photo: <input name="photo" type="text" placeholder=" enter url"><br> Name: <input name="name" type="text"><br> Email: <input name="email" type="text"><br> Comment:
    
    <textarea id="todo" name ="todo" style="width: 251px; height: 54px;"> ..comment </textarea>
    <!-- <input type="submit" value="Add Comment"> -->
    <button id="submit" onclick="submitAllComments()">Submit</button>
    <button id="clear-all" onclick="clearAllComments()">Clear All</button>

</form>
<br>

      
  `;
    }
}

customElements.define('my-comment', MyComment);



// Get DOM elements
const form = document.querySelector('form');
const input = document.querySelector("[name='todo']");
const inputEmail = document.querySelector("[name='email']");
const inputName = document.querySelector("[name='name']");
const inputPhoto = document.querySelector("[name ='photo']")

const todoList = document.getElementById('todos');
const emailList = document.getElementById('todos');
const nameList = document.getElementById('todos');
const photoList = document.getElementById('photo');
// const emailList = document.getElementById('emails');
// const nameList = document.getElementById('names');

// Side Effects / Lifecycle

const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
const existingEmails = JSON.parse(localStorage.getItem('emails')) || [];
const existingNames = JSON.parse(localStorage.getItem('names')) || [];
const existingPhotos = JSON.parse(localStorage.getItem('photos')) || [];

const todoData = [];
const emailData = [];
const nameData = [];
const photoData = [];


existingNames.forEach(name => {
    addName(name);
});

existingEmails.forEach(email => {
    addEmail(email);
});

existingTodos.forEach(todo => {
    addTodo(todo);
});

existingPhotos.forEach(photo => {
    addPhoto(photo);
});



function addTodo(todoText) {
    todoData.push(todoText);
    const li = document.createElement('li')
    li.innerHTML = todoText;
    todoList.appendChild(li);
    localStorage.setItem('todos', JSON.stringify(todoData));
    input.value = ''
}

function addEmail(emailText) {
    emailData.push(emailText);
    const li = document.createElement('li')
    li.innerHTML = emailText;
    emailList.appendChild(li);
    localStorage.setItem('emails', JSON.stringify(emailData));
    inputEmail.value = ''

}

function addName(nameText) {
    nameData.push(nameText);
    const li = document.createElement('li')
    li.innerHTML = nameText;
    nameList.appendChild(li);
    localStorage.setItem('names', JSON.stringify(nameData));
    inputName.value = ''

}

function addPhoto(photoText) {
    nameData.push(photoText);
    const li = document.createElement('li')
    li.innerHTML = photoText;
    photoList.appendChild(li);
    localStorage.setItem('photos', JSON.stringify(photoText));
    inputPhoto.value = ''

}

// Events
form.onsubmit = (event) => {
    event.preventDefault();
    addPhoto(inputPhoto.value);
    addName(inputName.value);
    addEmail(inputEmail.value);
    addTodo(input.value);

}


document.getElementById("clear-all").addEventListener("click", clearAllComments);
// clear the array
function clearAllComments() {
    input.value = ''
    inputEmail.value = ''
    inputName.value = ''
    todoList.innerHTML = "";
    emailList.innerHTML = "";
    nameList.innerHTML = "";
    li.innerHTML = "";
    // todoList.document.getElementById.clear('todos');

    window.localStorage.clear();
    localStorage.clear(existingTodos);
    localStorage.clear(existingEmails);
    localStorage.clear(existingNames);
}




// commentLike() {
//         // make the likes variable to point to the likes <p> tag.
//         // const likes = this.commentDisplay.querySelector(".likes");
//         const likes = document.getElementById("likes");

//         // Increment like count
//         this.likeCount++;

//         // Set the update like count for display.
//         likes.innerHTML = `Likes: ${this.likeCount}`;
//     }