## 30+ JavaScript Exercises

*Based off of the JavaScript30 course, by **Wes Bos**.*

I've taken this repo and altered the projects and added some things of my own. I will commit serperately for each individual project, but the whole repo will just stay on one branch for now.

When I finish a project, I will add it here (below) in the ReadMe file, so anything that is **not** here yet hasn't been touched in the 'Exercises' folder by me, and is just part of the original course.

### I am currently at: **Day 06** - Making a search bar.

Each project will have a "START" and "FINISHED" file. I will only be working on the 'START' files, and will also add additional files. The 'FINISHED' files will be a comparison of what the course end result looked like.

** Disclaimer **: I don't pretend to be an expert programmer. But I'm using this opportunity to express what I'm working on so that I can get better at understanding the material itself. If anyone sees something that is off, or it's clear that I missed the piont, I would be grateful for your input to learn from my mistake 🙏🙏 Cheers ☕

#### Day 01 - Drum Kit:
- Learned about the 'data-' property and how to use it.
- In the past I used "switch" to associate the keys pressed to the audio file. In this project, we used forEach to loop through the keys and add an event listener to each of them, using template literals to identify the keys.
- A solid practice of using the DOM and working with event properties.
- I added a serparate index-keycode.html program, which simply renders the keyCode of whatever key is pressed, using innerHTML.

#### Day 02 - Clock:
- First, I worked on the logic to rotate a clock hand.
- Learned how to change the origin of an element, so that we rotated it from the one end, instead of it's center axis.
- Used the "transition-timing-function" property for the first time, which was really cool.
- I really enjoy using JS methods, especially the time ones. I enjoy fiting them in many projects. Here, it's about how to render than data. So I did it in two ways: analog and digital.
- Fixed the "hand-strikes-12" glitch. When any of the hands reached the default top position (the 12, or 360 deg + 90 deg = 450 deg), the hand would rotate all the way back like it was winding back (it's very rapid, so not necessarily easy to see, but still looked glitchy). To fix this, the two suggestions were to:
  1. Tally up the degrees, rather than reset them back to 90 (which is our starting default);
  2. Remove the transition when the hand reaches 90 (I used select all to apply this to all the      hands when the second-hand reached 90).
- Then, I reapplied some of the lessons from Day 01, and used innerHTML to render the time digitally.
- I used a ternary operator within a termplate literal to apply a '0' as a placeholder if the value of the time was < 10.

#### Day 03 - CSS Variables:
- In here we're going to assign variables to our CSS property values so we can have an effect our html elements by declaring on root.
- I learned that  "dataset" contains all of the data attributes from a specific element, which makes it super easy to tap into anything that has "data-" on an element (like how to get a value's suffix, for example).
- How to select a variable by selecting our entire document (:root) and tapping into the property 'name'.
- Now we can update our CSS variables on any element!
-   Photo by [Daniel J. Schwarz](https://unsplash.com/es/@danieljschwarz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/9dnp5vwRUB8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

#### Day 04 - Array Cardio Day 1:
- Working with the fundamentals of JavaScript and Array methods:
  - filter
  - map
  - sort
  - reduce
- Added properties to show more data.
- Got the DOM elements out of web page and filtered to get specific data.
- Learned how to use a *spread* to take all the items out of an iterable (like a node list), and put them into a containing array.

#### Day 05 - Flex Panels Image Gallery:
- Working with Flex. We take some content and create a grid of rows and columns and get some basic positioning.
- Also did some familiar transitioning, and practiced toggling events by adding classes and eventListeners.
- Changed 'click' to mouseover, and adjusted the transitionend.
- Currently, if the mouse hovers in between panel borders, the transitions will glitch a little bit trying to decide which panel to enlarge. One idea that might work to fix this would be to use *setTimeout* to let the transition finish fully. The effect should be that every panel the mouse moves over will fully transition from class 'open' before 'mouseleave' takes effect when mouse leaves the target element.

#### Day 06 - Type Ahead:
- We are using JS to drop down a list of related words from what a user puts into a search bar, or a form.
- Used fetch to retrieve data.
- Learned that when we pushed data into our array, initially it was nested; one big array into another array. The way we pushed data, or the different cities, to be individually placed in our cities array was by using the spread operator. Now it's no longer a nested array.
- Used Regex and the DOM to render everything, including styling properties to highlight what was being searched.



Thank you again to Wes Bos and all other contributors for the awesome lessons and projects I get to practice on. Don't hesitate to reach out to me and let me know if you have any suggestions.
