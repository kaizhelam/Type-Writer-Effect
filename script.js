const TypingText = document.querySelector(".TypedText");
const AutoTyping = document.querySelector(".TypeCursor");
 
const textArray = ["Create.", "Design.", "Creative.", "Thinking."];
const typingDelay = 200;
const erasingDelay = 100; 
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", function() { 
    setTimeout(type, newTextDelay + 250);
});
 
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    TypingText.innerHTML += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    setTimeout(erase, newTextDelay);
  }
}
 
function erase() {
 if (charIndex > 0) {
    TypingText.innerHTML = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}