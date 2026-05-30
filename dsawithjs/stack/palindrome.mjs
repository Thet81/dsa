
import Stack from "./stack.mjs";

function isPalinDrome (words) {
    let s = new Stack()

    for (let i = 0; i < words.length; i++) {
        s.push(words[i])
    }
    let rword = '';
    
    while (s.length() > 0) {
      rword += s.pop()
    }
    
    if (words === rword) {
        return true
    }else {
        return false
    }
}

console.log(isPalinDrome('racecar'))