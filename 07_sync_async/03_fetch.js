// when we get error:404, we get it through resolve(). there are method like response.ok || response.status to chek https error
// we can pass url along with other data in fetch
// for fetch there is a special task queue called micro task queue which has more prority than other async tasks.

// let's learn more about fetch:
// when we call fetch: it has two part 1.memory reserve 2.network request(node/web)

// network request has two parts: either it can make connection with network or it will fail. 
// if network request is successful then it fire the onfulfilled[]