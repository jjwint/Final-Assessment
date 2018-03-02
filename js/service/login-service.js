// Your module NEEDS TO BE LINKED IN THIS FILE

// DO NOT ALTER THE CODE IN THIS FILE, except that you must link
// the service to your module at line 71.

(function() {
  function loginService($location, $q) {
  	// DO NOT CHANGE THIS FUNCTION
    var userObj = {};
    
    return {
      checkLogin: checkLogin,
      getProfile: getProfile
    };
    
    function checkLogin(userInfo) {
      // DO NOT CHANGE THIS FUNCTION
      var userList = [
        {
          username: 'indianajones',
          password: 'coolPassword',
          name: 'Indiana Jones',
          email: 'indianajones@gmail.com',
          img: '/images/indianajones.jpg',
          location: 'Portland, OR',
          phone: '333-333-5555'
        },
        {
          username: 'taylorswift',
          password: 'awesomePassword',
          name: 'Taylor Swift',
          email: 'tswift@gmail.com',
          img: '/images/taylorswift.jpg',
          location: 'Detroit, MI',
          phone: '222-444-6666'
        },
        {
          username: 'grantchirpus',
          password: 'greatPassword',
          name: 'Grant Chirpus',
          email: 'grantChirpus@gmail.com',
          img: '/images/grantchirpus.png',
          location: 'Detroit, MI',
          phone: '111-777-3333'
        }
      ];

      var p = new $q(function(resolve, reject) {
        for(var i = 0; i < userList.length; i++) {
          console.log('loop');
          if(userInfo.username === userList[i].username && userInfo.password === userList[i].password) {
            resolve(userList[i]);
            break;
            console.log('true');
          }
        }
      });

      p.then(function(user) {
        userObj = user;
        $location.path('/profile');
      });
    }
  
    function getProfile() {
      // DO NOT CHANGE THIS FUNCTION
      return userObj;
    }
  }
  
  // ONLY ADD ADDITIONAL CODE HERE to link this service to your module.
  angular
    .module("myApp")
    .factory("loginService", loginService);
})();