$(document).ready(function() {
    //burger-popup
    $('.burger-butt').click(function(){
        if( $('.pop-up-wrapper').css('display')== 'block'){
            $('.pop-up-wrapper').css({display: 'none'})
        }
        else {
            $('.pop-up-wrapper').css({display: 'block'})
        }
        
    })
})

let validate = () => {
    let email = document.getElementById('email')
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let repeat_password = document.getElementById('repeat_password')
    let dateob = document.getElementById('dateob')
    let nationality = document.getElementById('nationality')
    let check = document.getElementById('check')
    let errorM = []

    vEmail(email,errorM)
    vUsername(username,errorM)
    vPassword(password,errorM)
    vRepeat_password(password,repeat_password,errorM)
    vDateob(dateob,errorM)
    vNationality(nationality,errorM)
    vCheck(check,errorM)


    if(!errorM.length){
        alert('Succesfull Sign Up!')
    }else{
        alert(errorM.join('\n'))
    }
}

let vEmail = (email, errorM) =>{
    if(email.value === ''){
        errorM.push('Email required')
    }
    else if(!email.value.endsWith('@gmail.com')){
        errorM.push('Email must end with @gmail.com')
    }
}

let vUsername = (username, errorM) =>{
    if(username.value === ''){
        errorM.push('Username required')
    }
    else if(username.value.length < 8){
        errorM.push('Username is less than 8 characters')
    }
}

let vPassword = (password, errorM) =>{
    if(password.value === ''){
        errorM.push('Password required')
    }
}

let vRepeat_password = (password,repeat_password, errorM) =>{
    if(repeat_password.value === ''){
        errorM.push('Repeat password required')
    }
    else if(repeat_password.value != password.value){
        errorM.push('Repeat password is different from password')
    }
}

let vDateob = (dateob, errorM) =>{
    if(dateob.value === ''){
        errorM.push('Date of birth required')
    }
}

let vNationality = (nationality, errorM) =>{
    if(nationality.value === ''){
        errorM.push('Nationality required')
    }
}

let vCheck = (check, errorM) =>{
    if(!check.checked){
        errorM.push('You need to agree to continue')
    }
}