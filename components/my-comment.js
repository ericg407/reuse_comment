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
            <ul id="todos"></ul>
            <p id="demo-date"></p>
        </p>
    </div>
</div>

<br><br>
<form>

    <!--         <input type="submit" value="Add Todo"> -->
    <p>
          photo:<img
            src="https://picsum.photos/200/300?random=1"
            alt="Smiley face"
            width="100"
            height="110"
            style="vertical-align: middle"
            id="photoId"
            class="comment-class"
          />
        </p>
        <p>
        Photo:<input
          class="comment-class"
          id="imageInput"
          name="photo"
          type="text"
          placeholder="image URL"
        />
      </p>
    Name: <input name="name" type="text"><br> Email: <input name="email" type="text"><br> Comment:
    <textarea name="todo" type="text"></textarea><br>
    <p id="demo-id"></p>

    <input
          class="comment-class"
          type="checkbox"
          id="checkid"
          name="checkid"
          value="Agree"
        />
    <label for="checkid"> I agree to have the comment posted</label><br>
    <!-- <input type="submit" value="Add Comment"> -->
    <!-- <button id="submit" onclick="submitAllComments()">Submit</button>-->
    <button id="submit" onclick="myCheckFunction()">Submit</button> 
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
// const checkid = document.getElementById('checkid');

const todoList = document.getElementById('todos');
const emailList = document.getElementById('todos');
const nameList = document.getElementById('todos');
// const emailList = document.getElementById('emails');
// const nameList = document.getElementById('names');

// Side Effects / Lifecycle

const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
const existingEmails = JSON.parse(localStorage.getItem('emails')) || [];
const existingNames = JSON.parse(localStorage.getItem('names')) || [];
const todoData = [];
const emailData = [];
const nameData = [];

existingTodos.forEach(todo => {
    addTodo(todo);
});

existingEmails.forEach(email => {
    addEmail(email);
});

existingNames.forEach(name => {
    addName(name);
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

// Events
// form.onsubmit = (event) => {
//     event.preventDefault();
//     let x = document.getElementById("checkid").checked;

//     if (x == 'true') {
//         // console.log.x;
//         addName(inputName.value);
//         addEmail(inputEmail.value);
//         addTodo(input.value);
//         displayDate();

//     } else {
//         document.getElementById("demo-id").innerHTML = `<h4>Please check box to submit comment</h4>`;
//     }

// addName(inputName.value);
// addEmail(inputEmail.value);
// addTodo(input.value);
// displayDate();
// }

function myCheckFunction() {

    let x = document.getElementById("checkid").checked;

    if (x == true) {
        // console.log.x;
        addName(inputName.value);
        addEmail(inputEmail.value);
        addTodo(input.value);
        displayDate();

    } else {
        document.getElementById("demo-id").innerHTML = `<h4>Please check box to submit comment</h4>`;
    }

}

function displayDate() {
    document.getElementById("demo-date").innerHTML = Date();
}

document.getElementById("clear-all").addEventListener("click", clearAllComments);
// clear the array
function clearAllComments() {
    input.value = '';
    inputEmail.value = '';
    inputName.value = '';
    todoList.innerHTML = '';
    emailList.innerHTML = '';
    nameList.innerHTML = '';

    // todoList.document.getElementById.clear('todos');


    localStorage.removeItem('todos');
    localStorage.removeItem('emails');
    localStorage.removeItem('names');
    localStorage.clear();
    document.getElementById("demo-date").innerHTML = ``;
    // localStorage.setItem();
    // localStorage.clear(existingEmails);
    // localStorage.clear(existingNames);
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