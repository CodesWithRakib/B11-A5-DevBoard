- Question-1: What are the different ways to select an element in the DOM?
- There are several ways to select elements in the DOM using Javascript . Some of the most common ways are:

getElementById()
getElementsByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()

- Question-2: What is the difference between innerHTML, innerText, and textContent ?
- Difference Between innerHTML, innerText, and textContent in Dom is as follows:

1. innerHTML: It returns the HTML content (inner HTML) of an element.
2. innerText: It returns the text content of the specified node, and all its descendants.
3. textContent: It returns the text content of the specified node, and all its descendants.

- Question-3: What is event delegation in the DOM?
- Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of each child element. The event listener listens for events on the parent and uses event bubbling to catch events triggered by child elements.

- Question-4: What is event bubbling in the DOM?
- Event bubbling is a mechanism in the DOM where an event triggered on a child element bubbles up to its parent and then to higher ancestors, eventually reaching the document object. This allows you to listen for events on a parent element instead of having to add an event listener to each child element.

- Question-5: How do you create, add, and remove elements using JavaScript?
- There are several ways to Creating, Adding, and Removing Elements in JavaScript. Some of the most common ways are:

createElement()
appendChild()
append()
prepend()
removeChild()
remove()
replaceChild()
createTextNode()
insertBefore()
cloneNode()
createDocumentFragment()
insertAdjacentHTML()
insertAdjacentElement()
insertAdjacentText()
before()
after()
replaceWith()
