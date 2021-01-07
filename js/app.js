let container = document.querySelector('.container-box');
let card = document.querySelector('.card');
let title = document.querySelector('h3');
let shoe = document.querySelector('.card img');
let btn = document.querySelector('.card .btn-save');
let btn_group = document.querySelector('.card .btn-group');
container.addEventListener("mousemove", (e) =>{
let xAxix = (window.innerWidth / 2 -  e.pageX) / 10 ;
let yAxix = (window.innerHeight / 2   - e.pageY) / 10;
card.style.transform = `rotateY(${xAxix}deg) rotateX(${yAxix}deg)`;
title.style.transform = 'translateZ(100px)';
shoe.style.transform = 'translateZ(200px) rotateZ(-45deg)' ;
btn.style.transform = 'translateZ(100px)' ;
btn_group.style.transform = 'translateZ(100px)' ;
title.style.textShadow = '3px 2px 1px #ccc';
});
// mouseEnter
container.addEventListener('mouseenter', (e) => {
    card.style.transition ='none';
});
container.addEventListener('mouseleave', (e) =>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition ='0.5s ease-in';
    title.style.textShadow = '3px 2px 1px transparent';
    shoe.style.transform = 'translateZ(0px) rotateZ(0deg)' ;
btn.style.transform = 'translateZ(0px)' ;
btn_group.style.transform = 'translateZ(0px)' ;
});
