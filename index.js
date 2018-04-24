const app = "I don't do much.";

const token = 'b4d1a402112886b8a8f39f58fdf5c26f19455eea'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).
then(json => console.log(json));
