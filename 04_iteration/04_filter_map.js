

// we want to return each value but forEach cannot do this. So here is filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let values = myNums.filter( (num) =>{
    return num>5
} )

// shortcut method
//  let values = myNums.filter( (num) => num>5 )
//  console.log(values);

 // doing using forEach(without reutrn )
 let collector = []
 values.forEach( (num) => {
    if (num>5) {
        collector.push(num)
    }
 } )
// console.log(collector);


// practicing filter more
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // should return book of fenre "hisotry"

const historyBooks = books.filter( (book) => book.genre === "History" )
// console.log(historyBooks);

// should return book published after 2000
const laterBooks = books.filter( (book) => book.publish > 2000 )
// console.log(laterBooks);



// map: (use to make change to every element of array)will return for all the values and work differently than filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const addNums = nums.map( (num) => num<5)
console.log(addNums);