// ***           Async Await with Promise            ***
/* async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });
  const error = false;

  if(!error){
    const res = await promise; // wait untill promise is resolved
    return res; 
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}
//console.log(myFunc());
myFunc()
.then(res => console.log(res))
.catch(err => console.log(err));
*/

// ***             Async Await with Fetch            ***
async function getUsers() {
  // await response of the fetch call
  const response = await fetch
  ('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();
  // we only proceed once second promise is resolved
  return data;
}
getUsers().then(users => console.log(users));


