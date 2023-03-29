Based off of the JavaScript30 course, by Wes Bos.

I've taken this repo and altered the projects and added some things of my own. I will commit serperately for each project, but the whole project will just stay on one branch for now.

When I finish a project, I will add it here in the ReadMe file, so anything that isn't here yet hasn't been touched in the 'Exercises' folder.

I am currently at: Day 02 - Building a clock.

Projects will have 'START' and 'FINISHED' files. I will only be working on the 'START' files, and will also add additional files. The 'FINISHED' files will be a comparison of what the course finished result looked like.

** Disclaimer **: I don't pretend to be an expert programmer. But I'm using this opportunity to express what I'm working on so that I can get better at understanding the material itself. If anyone sees something that is incorrect, especially here in the ReadMe, that I may have misunderstood, I would be grateful for your input to learn from my mistake 🙏🙏 Cheers ☕

Day 01 - Drum Kit:
-Learned about the 'data-' property and how to use it.
-In the past I used "switch" to associate the keys pressed to the audio file. In this project, we used forEach to loop through the keys and add an event listener to each of them, using template literals to identify the keys.
-A solid practice of using the DOM and working with event properties.
-I added a serparate index-keycode.html program, which simply renders the keyCode of whatever key is pressed, using innerHTML.

Day 02 - Clock:
-First, I worked on the logic to rotate a clock hand.
-Learned how to change the origin of an element, so that we rotated it from the one end, instead of it's center axis.
-Used the "transition-timing-function" property for the first time, which was really cool.
-I really enjoy using JS methods, especially the time ones. I enjoy fiting them in many projects. Here, it's about how to render than data. So I did it in two ways: analog and digital.
-Fixed the "hand-strikes-12" glitch. When any of the hands reached the default top position (the 12, or 360 deg + 90 deg = 450 deg), the hand would rotate all the way back like it was winding back (it's very rapid, so not necessarily easy to see, but still looked glitchy). To fix this, the two suggestions were to:
  1. Tally up the degrees, rather than reset them back to 90 (which is our starting default);
  2. Remove the transition when the hand reaches 90 (I used select all to apply this to all the      hands when the second-hand reached 90).
-Then, I reapplied some of the lessons from Day 01, and used innerHTML to render the time digitally.
-I used a ternary operator within a termplate literal to apply a '0' as a placeholder if the value of the time was < 10.


Thank you again to Wes Bos and all other contributors for the awesome lessons and projects I get to practice on. Don't hesitate to reach me and let me know if you have any suggestions.
