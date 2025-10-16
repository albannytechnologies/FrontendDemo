// const name = "example";
// console.log(`This is the ${name} package.`);

// // TO DECALRE A VARIABLE, USE THE 'const' KEYWORD.

// const booleanVariable = true;
// const numberVariable = 42;
// const stringVariable = "Hello, World!";
// const arrayVariable = [1, 2, 3, 4, 5];
// const objectVariable = { key: "value", anotherKey: 123 };

// objectVariable.key = "newValue";

// objectVariable.anotherKey = "newValue";

// console.log(booleanVariable);
// console.log(numberVariable);
// console.log(stringVariable);
// console.log(arrayVariable);
// console.log(objectVariable);
// arrayVariable.push(6);

// const Man = 35;
// const Boy = 20;

// if (Man > Boy) {
//   console.log("Yes, 35 is grater than 20");
// } else {
//   console.log("No, 35 is not grater than 20");
// }

// function greet(condition) {
//   // THIS IS A FUNCTION  TO GRREET SOMEBODY
//   console.log("Hello, welcome to thE gREETING FUNCTION!");
//   const morning = "Good Morning";
//   const afternoon = "Good Afternoon";
//   const evening = "Good Evening";
//   if (condition === morning) {
//     console.log("That The Person Greeted Good Morning");
//   } else if (condition === afternoon) {
//     console.log(
//       "That The Person Did Not Greeted Good Morning He Greeted Good Afternoon"
//     );
//   } else if (condition === evening) {
//     console.log(
//       "That The Person Did Not Greeted Good Morning He Greeted Good Evening"
//     );
//   }
// }


// greet("Good Morning");
// // greet("Good Afternoon");
// // greet("Good Evening");


// // math object

// const pi = Math.PI;
// const e = Math.E;
// const sqrt2 = Math.SQRT2;


// console.log("Value of Pi:", pi);
// console.log("Value of Euler's Number (e):", e);
// console.log("Square Root of 2:", sqrt2);


const number = 5
const string = "Hello, World!"

const addNumber = number + string

console.log(addNumber)



document.addEventListener("DOMContentLoaded", function () {
  const demoBtn = document.querySelector(".navbar-container .action-btn-light");
  const logoText = document.querySelector(".logo-text");

  demoBtn.addEventListener("click", function () {
    logoText.textContent = "Demo Activated!";
    // Create modal if it doesn't exist
    let modal = document.getElementById("dom-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "dom-modal";
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100vw";
      modal.style.height = "100vh";
      modal.style.background = "rgba(0,0,0,0.5)";
      modal.style.display = "flex";
      modal.style.alignItems = "center";
      modal.style.justifyContent = "center";
      modal.style.zIndex = "1000";
      // Modal content
      const content = document.createElement("div");
      content.style.background = "#fff";
      content.style.padding = "2rem";
      content.style.borderRadius = "8px";
      content.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
      content.innerHTML = `
        <h2>DOM Properties</h2>
        <ul>
          <li><strong>document.title:</strong> ${document.title}</li>
          <li><strong>document.URL:</strong> ${document.URL}</li>
          <li><strong>document.body.childElementCount:</strong> ${document.body.childElementCount}</li>
        </ul>
        <button id="close-modal-btn" style="margin-top:1rem;">Close</button>
      `;
      modal.appendChild(content);
      document.body.appendChild(modal);
      // Close button event
      content.querySelector("#close-modal-btn").onclick = function () {
        modal.remove();
      };
    } else {
      modal.style.display = "flex";
    }
  });
});

// console.log(document)