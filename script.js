const parentContainer = document.querySelector('.read-more-container') ;
parentContainer.addEventListener('click' ,event=>{
const current = event.target ; 
const isreadmorebtn = current.className.includes('read-more-btn') ; 
if(!isreadmorebtn) return ; 
const currenttext  =event.target.parentNode.querySelector('.read-more-text') ;
currenttext.classList.toggle('read-more-text--show') ;

current.textContent = current.textContent.includes('Read More') ?
"Read Less" : "Read More..." ; 
})

// var toggleClick = document.querySelector('.toggleBox') ;
// toggleClick.addEventListener('click', ()=>{
//     toggleClick.classList.toggle('active') ;
// })
