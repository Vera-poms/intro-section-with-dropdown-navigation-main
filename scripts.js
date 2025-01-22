let iconOpen = document.querySelector('.js-icon-open')
let iconClose = document.querySelector('.js-icon-close')
let options = document.querySelector('.js-options-mobile')
let isOpened = false
let isHovered = false
let displayDropdown = document.querySelector('.js-dropdowns')
let isArrowDown = true
let  arrowDown = document.querySelector('.js-arrow-down')
let  arrowUp = document.querySelector('.js-arrow-up')
let featuresLink = document.querySelector('.js-features')
let companyLink = document.querySelector('.js-company')

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

featuresLink.addEventListener('mouseover', () => {
if(!isHovered){
  arrowDown.classList.add('arrows-down')
  arrowUp.classList.add('arrows-up')
  isArrowDown = true
  console.log('hovered')
  isHovered = true
}
arrowDown.classList.remove('arrows-down')
arrowUp.classList.remove('arrows-up')

isArrowDown = false
// console.log('is not hovered')
// isHovered = false
})