let iconOpen = document.querySelector('.js-icon-open')
let iconClose = document.querySelector('.js-icon-close')
let options = document.querySelector('.js-options-mobile')
let isOpened = false

iconOpen.addEventListener('click', () => {
 if(!isOpened){
  options.classList.add('options-opened')
  console.log('opened')
  isOpened = true
 }
 iconClose.addEventListener('click', () => {
  if(isOpened){
    options.classList.remove('options-opened')
    console.log('closed')
    isOpened = false

   }
 })

 
})