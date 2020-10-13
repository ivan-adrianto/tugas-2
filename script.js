const navbarLink=document.querySelectorAll('.nav-link');

for (i=0; i<navbarLink.length; i++){
        navbarLink[i].addEventListener ('mouseover', mouseover);
}

for (i=0; i<navbarLink.length; i++){
    navbarLink[i].addEventListener ('mouseout', mouseOut);
}

function mouseover (){    
    this.style.borderStyle= 'solid'
  this.style.borderRadius='5px'
  this.style.borderColor='rgb(54, 163, 233)'
  this.style.backgroundColor='rgb(54, 163, 233)'
    };

function mouseOut (){
    this.style.backgroundColor='rgb(32, 32, 31)'
    this.style.borderWidth='0px'
}


