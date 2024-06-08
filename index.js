var frist_name = document.getElementById('frist_name')
var second_name = document.getElementById('second_name')
var email = document.getElementById('email')
// var radio_1 = document.getElementsByName('type')
// var radio_2 = document.getElementById('radio_2')
var type = document.getElementsByName('type')
var textarea = document.getElementById('textarea')
var checkbox = document.getElementById('checkbox')
var main = document.getElementById('main')

function sumbit(){
    if(frist_name.value === ''){
        var li_1 = document.getElementById('li_1')
        li_1.style.color = 'hsl(0, 66%, 56%)'
        li_1.innerText = 'This field is required'

    }else{
    }


    // if(type.checked === false){
    //     alert('working')
        
    // }else{
    //     alert('not working')
    // }

    if(second_name.value === ''){
        var li_2 = document.getElementById('li_2')
        li_2.style.color = 'hsl(0, 66%, 56%)'
        li_2.innerText = 'This field is required'

    }else{
    }

    if(email.value === ''){
        var li_3 = document.getElementById('li_3')
        li_3.style.color = 'hsl(0, 66%, 56%)'
        li_3.innerText = 'Please enter a valid email address'
    }

    if(checkbox.checked){

    }else{
        
        var li_6 = document.getElementById('li_6') 
        li_6.style.color = 'hsl(0, 66%, 56%)'
        li_6.innerText = ' To submit this form, please consent to being contacted'
    }

    for(var i = 0; i < type.length ; i++){
        type[i].addEventListener('change', function(){
    //    alert()     
     })

     if(textarea.value === ""){
        
        var li_5 = document.getElementById('li_5') 
        li_5.style.color = 'hsl(0, 66%, 56%)'
        li_5.innerText = ' This field is required'
     }
    }


    var User = {
        frist_name: frist_name.value,
        second_name: second_name.value,
        email: email.value,
        checkbox: checkbox.checked,
        textarea: textarea.value
    }

    if(User.frist_name === '' || User.second_name === '' || User.email === '' || User.textarea === '' || User.checkbox === false){
        alert('fill the form')
        return
    }

    var store = localStorage.setItem('student' , JSON.stringify(User))

    window.location.href = './b.html'
}
