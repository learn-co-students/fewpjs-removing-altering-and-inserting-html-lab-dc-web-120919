// assigns variable mainElement to main.main via query Selector. Then removes it.
let mainElement = document.querySelector(main.main);
main.remove();

// creates a new node element <h1 id='victory'>
let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "John-Louis is the champion!";