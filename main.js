//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(sentence, words) {
    words.map(i => {
        if (sentence.includes(i) == true) {
            console.log( 'Matched ' + i)
        } else {
            console.log( 'No Matches')
        }
    })
}
findWords(dog_string, dog_names)


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i += 2){
        arr.splice(i, 1, 'even index')
    }
    console.log(arr)
}
replaceEvens(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//-------------Python to JS 1---------------
// my_string = 'hello world!'

// def reverse_words(s):
// a = s.split()
// a.reverse()
// return " ".join(a)

// print(reverse_words(my_string))

let my_string = 'hello world i am a human!'

function reverseWords(a_string) {
    a = a_string.split(' ')
    a.reverse()
    console.log(a.join(' '))
}
reverseWords(my_string)

//------------------Python to JS 2-----------
// def chromosome_check(sperm):
//     if 'Y' in sperm.upper():
//         return "Congratulations! You're going to have a son."
//     else:
//         return "Congratulations! You're going to have a daughter."
    
// print(chromosome_check('xx'))

function chromosome_check(sperm) {
    sperm = sperm.toUpperCase()
    if (sperm.includes('Y')) {
        console.log("Congratulations! You're going to have a son.")
    } else {
        console.log("Congratulations! You're going to have a daughter.")
    }
}
chromosome_check('xy')

// ------------------Python to JS 3---------
// def bar_triang(a, b, c):
//     x = (a[0] + b[0] + c[0])/3
//     y = (a[1] + b[1] + c[1])/3
//     return [round(x, 4),round(y,4)]

// print(bar_triang([4, 2], [12, 2], [6, 10]))

function bar_triang(a,b,c) {
    x = (a[0] + b[0] + c[0])/3
    y = (a[1] + b[1] + c[1])/3
    console.log([x.toFixed(4), y.toFixed(4)])
}
bar_triang([4, 2], [12, 2], [6, 10])

// ----------------Python to JS 4----------
// def find(a, y):
//     return a.index(y) if y in a else 'Not found'

// array = [2,3,5,7,11]

// print(find(array, 7))

function find(b, c) {
    if (b.includes(c)) {
        console.log(b.indexOf(c))
    } else {
        console.log('Not found')
    }
}
let b = [2,3,5,7,11]
let c = 7
find(b,c)