1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: 
Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
getElementById(id):
Selects a single element by its ID.
Returns one element.
Fast and specific.

getElementsByClassName(className):
Selects elements by class name.
Returns a live HTMLCollection.
Can return multiple elements.

querySelector(selector):
Selects the first element that matches a CSS selector.
Returns one element.

querySelectorAll(selector):
Selects all elements matching a CSS selector.
Returns a static NodeList.

2. How do you create and insert a new element into the DOM?
ans:
Create element:
const newElement = document.createElement("p");
Add content:
newElement.textContent = "Hello World";
Insert into DOM:
document.body.appendChild(newElement);

3. What is Event Bubbling? And how does it work?
ans:
Event Bubbling is when an event starts from the target element and propagates upward to its parent elements.
Example:
If a button inside a div is clicked:
Button event runs
Then div event runs
Then body
Then document
The event moves from inner element to outer elements.

4. What is Event Delegation? Why is it useful?
ans:
Event Delegation is attaching a single event listener to a parent element to handle events on its child elements.
It works because of event bubbling.

It useful because,
It Improves performance
Works for dynamically added elements
Cleaner and more maintainable code

5. Difference between preventDefault() and stopPropagation()
ans:
preventDefault():
Stops the browser’s default behavior.
stopPropagation():
Stops the event from bubbling to parent elements.
