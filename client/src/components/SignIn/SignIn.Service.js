//Imports
// const Router = require('../.././router/index').default;
const store = require('../../store');
const FauxServer = require('../FauxDataBase/FauxServer');
// const Server = require('../.././router/index');

//Exports
// module.exports = {
//   SignInUserPost
// }

//Varaibles
  //public
  //private
//Functions
  //public
  export function SignInUserPost(router,userData){
    // console.log('signing in user');
    FauxServer.get('/user',userData)
      .then((_data)=>{
        // console.log("promise");
        console.log(_data);
        // LoadContactsPage(router);
        store.state.PID = _data.pid;
        localStorage.PID = _data.pid;
        localStorage.DisplayName = _data.DisplayName;

        // console.log(store.state);
        LoadContactsPage(router);
         // _data;
      }).catch((message)=>{
        console.error(message);
      });

      let route = 'http://localhost:8081/api/user';
      $.get(route,userData,(_data)=>{
        console.log(_data);
      });
    // console.log(data);
    // LoadContactsPage(router);
  }
  //private
  export function LoadContactsPage(router) {

    router.push({ path: '/contacts' });
  }
