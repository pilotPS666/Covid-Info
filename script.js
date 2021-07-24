let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');
let header=document.querySelector('header');
let scrollToHome=document.querySelector('.scroll-top');
let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

menu.addEventListener('click', function(){
    this.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})

window.onscroll=function(){
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
    if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
        header.classList.add('bgcolor');
        scrollToHome.style.display='inline-block';
    }
    else {
        header.classList.remove('bgcolor');
        scrollToHome.style.display='none';
    }

    section.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-200;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

