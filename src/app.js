import getData from "./lib/service.js";
getData(2).then((userData) => {
  console.log(userData);
});
