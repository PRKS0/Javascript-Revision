// we do not have access of global variable inside function.

// let usrname = "hacker hero"
// function printer(){
//     console.log(username);
// }

// printer()


// but when we declare a child function inside a function, then the child function has access of variable declared in main/parent function
// and this is called lexical scope: inner func has access of variable of outer function.
// if we have two child, these sibling can not access each other variable
// and parent can not access the variable of child

function parent (){
    let user = "prakash"

    function child (){
        console.log(user);
        function grandChild (){
            console.log("accessing variable inside grand-child:", user);
        }
        grandChild()
    }
    child()
}
// parent()

// closure: when we return the child func from parent func, then the whole lexical-scope is returned (means: the child func has variable of parent func, if we return child func, the whole parent func(lexical scope) should be returned to give access of variable)

// example: 
function father (){
    let property = "3 crores"

    function son(){
        console.log("child property: ", property);
    }
    return son;
}

// father()

// real word example

