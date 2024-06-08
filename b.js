function hello(){
        var store = JSON.parse(localStorage.getItem("student"));

  var ul = document.getElementById("ul");

//   console.log(store);
  var lis = `
        <li> <span> Name:  </span>  ${store.frist_name}</li>
        <li> <span> Father/name: </span> ${store.second_name}</li>
        <li> <span>Email:  </span>${store.email}</li>
        <li> <span>Note:</span>${store.textarea}</li>

`;

  ul.innerHTML += lis;
}

hello()

function LogOut() {
//   alert('hello')

window.location.href = './index.html'
localStorage.clear('student')
}

// LogOut()
