// Declare Variables
const submitButton = document.querySelector('.btn')


// User Submit
document.addEventListener('DOMContentLoaded', () => {

  submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    let user = {
      name: document.getElementById('full').value,
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      number: document.getElementById('phone').value,
      address: {
        street: document.getElementById('street').value,
        city: document.getElementById('city').value,
        code: document.getElementById('code').value,
      },
      company: document.getElementById('company').value,
      website: document.getElementById('website').value,
    }

    let getLocalStorage = localStorage.getItem('User')

    if(getLocalStorage == null) {
      userInfo = []
    } else {
      userInfo = JSON.parse(getLocalStorage)
    }
    userInfo.push(user)
    localStorage.setItem('User', JSON.stringify(userInfo))
    document.forms[0].reset()

    addUser()
    
  })
})


// Add User
function addUser() {
  let getLocalStorage = localStorage.getItem('User')

    if(getLocalStorage == null) {
      userInfo = []
    } else {
      userInfo = JSON.parse(getLocalStorage)
    }
    let output = '';

  userInfo.forEach((user, index) => {
    output += `
      <div class="user-list">
        <div class="name-container">
          <h2>${user.name}</h2>
        </div>
        <div class="info-container">
          <div>
            <h3>Username:</h3>
            <p>${user.username}</p>
          </div>
          <div>
            <h3>Email:</h3>
            <p>${user.email}</p>
          </div>
          <div>
            <h3>Address:</h3>
            <p>${user.address.street}</p>
            <p>${user.address.city}</p>
            <p>${user.address.code}</p>
          </div>
          <div>
            <h3>Company:</h3>
            <p>${user.company}</p>
          </div>
          <div>
            <h3>Website:</h3>
            <p>${user.website}</p>
          </div>
          <span onclick="deleteUser(${index})"><i class="las la-trash"></i></span>
        </div>
      </div>
      `
      
  })
  document.querySelector('.user-section').innerHTML = output
}

// Delete User
function deleteUser(index) {
  let getLocalStorage = localStorage.getItem('User')
  userInfo = JSON.parse(getLocalStorage)
  userInfo.splice(index, 1)
  localStorage.setItem('User', JSON.stringify(userInfo))
  addUser()
}

// console.log(userInfo)













// const userList = document.querySelector('.user-list')

// const fetchData = function(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(response){
//       // JSON that is returned from the server must be converted to a JS object asynchronously.
//       if (!response.ok) {
//         throw new Error('Not 200 OK');
//       }
//       return response.json();
//     })
//     .then(function(data){

//       console.log(data)

//       let output = '';
//       data.forEach(function(userInfo) {
//         output += `
//         <div class="user-info">
//           <h2>${userInfo.id}</h2>
//           <h2>${userInfo.name}</h2>
//           <h3>Username:</h3>
//           <p>${userInfo.username}</p>
//           <h3>Email:</h3>
//           <p>${userInfo.email}</p>
//           <h3>Address:</h3>
//           <p>${userInfo.address.suite} ${userInfo.address.street}</p>
//           <p>${userInfo.address.city}</p>
//           <p>${userInfo.address.zipcode}</p>
//           <h3>Company:</h3>
//           <p>${userInfo.company.name}</p>
//           <h3>Website:</h3>
//           <p>${userInfo.website}</p>
//         </div>
//         `
//       })

//       userList.innerHTML = output
//     })
//     .catch(function(err){
//       // An error or `reject` from any of the above `.then()` blocks will end up here.
//       document.querySelector('.no-data').innerHTML = `
//         <h2>Oops! There is a problem with displaying user list right now.</h2>
//         <p>Please come back later</p>
//       `
//       console.log(err);
//     });
//   }

//   fetchData()

