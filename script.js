const navSelainHome=document.querySelectorAll('.nav-link');

for (i=0; i<navSelainHome.length; i++){
        navSelainHome[i].addEventListener ('mouseover', mouseover);
}

for (i=0; i<navSelainHome.length; i++){
    navSelainHome[i].addEventListener ('mouseout', mouseOut);
}

function mouseover (){    
    this.style.borderStyle= 'solid'
    this.style.borderRadius='5px'
    this.style.borderColor='rgb(54, 163, 233)'
    this.style.backgroundColor='rgb(54, 163, 233)'
    this.style.fontWeight='800';
    };

function mouseOut (){
    this.style.backgroundColor='rgb(32, 32, 31)'
    this.style.borderWidth='0px'
    this.style.fontWeight='400'
}



// navLinkhome
const jumbotron = document.getElementById('jumbotron')
const home = document.querySelector('.nav-link')
jumbotron.addEventListener('mouseover',function (){
    home.style.borderStyle= 'solid'
    home.style.borderRadius='5px'
    home.style.borderColor='rgb(54, 163, 233)'
    home.style.backgroundColor='rgb(54, 163, 233)'
})
jumbotron.addEventListener('mouseout', function (){
    home.style.backgroundColor='rgb(32, 32, 31)'
    home.style.borderWidth='0px'
})

// Nav-link education
const edusection = document.getElementById('education')
edusection.addEventListener('mouseover',function (){
    navSelainHome[1].style.borderStyle= 'solid'
    navSelainHome[1].style.borderRadius='5px'
    navSelainHome[1].style.borderColor='rgb(54, 163, 233)'
    navSelainHome[1].style.backgroundColor='rgb(54, 163, 233)'
})
edusection.addEventListener('mouseout', function (){
    navSelainHome[1].style.backgroundColor='rgb(32, 32, 31)'
    navSelainHome[1].style.borderWidth='0px'
})


// Nav-link Experiences
const workSection = document.getElementById('working-exp')
// const footerSection=document.getElementById('footer')
workSection.addEventListener('mouseover',function (){
    navSelainHome[2].style.borderStyle= 'solid'
    navSelainHome[2].style.borderRadius='5px'
    navSelainHome[2].style.borderColor='rgb(54, 163, 233)'
    navSelainHome[2].style.backgroundColor='rgb(54, 163, 233)'
})
workSection.addEventListener('mouseout', function (){
    navSelainHome[2].style.backgroundColor='rgb(32, 32, 31)'
    navSelainHome[2].style.borderWidth='0px'
// })
// footerSection.addEventListener('mouseover',function (){
//     navSelainHome[2].style.borderStyle= 'solid'
//     navSelainHome[2].style.borderRadius='5px'
//     navSelainHome[2].style.borderColor='rgb(54, 163, 233)'
//     navSelainHome[2].style.backgroundColor='rgb(54, 163, 233)'
// })
// footerSection.addEventListener('mouseout', function (){
//     navSelainHome[2].style.backgroundColor='rgb(32, 32, 31)'
//     navSelainHome[2].style.borderWidth='0px'
})



