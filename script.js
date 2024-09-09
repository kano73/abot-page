'use strict'

document.querySelector('.login.btn').addEventListener(('click'),(event)=>{
    event.preventDefault();
    document.querySelector('.writeview').style.display='none'
    document.querySelector('.singview').style.display='none'
    document.querySelector('.logview').style.display='flex'
});


document.querySelector('.singin.btn').addEventListener(('click'),(event)=>{
    event.preventDefault();
    document.querySelector('.writeview').style.display='none'
    document.querySelector('.logview').style.display='none'
    document.querySelector('.singview').style.display='flex'
});

document.querySelector('.share.btn').addEventListener(('click'),(e)=>{
    e.preventDefault();
    document.querySelector('.writeview').style.display='flex'
    document.querySelector('.logview').style.display='none'
    document.querySelector('.singview').style.display='none'
})

const closeButtons = document.querySelectorAll('.close, .closew');

closeButtons.forEach((item)=>{item.addEventListener(('click'),(event)=>{
    event.preventDefault();
    document.querySelector('.singview').style.display='none'
    document.querySelector('.logview').style.display='none'
    document.querySelector('.writeview').style.display='none'
})});


