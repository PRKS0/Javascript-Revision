// the global variable can be accessed inside block but variable inside block can not be accessed outside the block.

const road = "global variable"
function house(){
    console.log(`inside house: ${road}`);

    function room(){
        console.log(`inside room: ${road}`);
        const table = "room variable"
    }
    // console.log(table);          // not accessible 
    room()      // we should run this code for execution of room 
}
house()         // this can't execute room


// different approach of function defining and calling 

// one(9)  => before calling will execute function same as after calling
function one(num){
    console.log(num + 1);
}
one(9)


// two(8)      => before calling give error
const two = function(num){
    console.log(num + 2);
}
two(8)