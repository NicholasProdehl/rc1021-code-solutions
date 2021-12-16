const myRequest = new Request('https://jsonplaceholder.typicode.com/users');

fetch(myRequest, { method: 'GET' })
  .then(response => response.json())
  .then(data => console.log(data));
