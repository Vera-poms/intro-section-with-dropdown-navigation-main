let iconOpen = document.querySelector('.js-icon-open')
let iconClose = document.querySelector('.js-icon-close')
let options = document.querySelector('.js-options-mobile')
let isOpened = false
let isHovered = false
let displayFeaturesDropdown = document.querySelector('.js-features-dropdowns')
let displayCompanyDropdown = document.querySelector('.js-company-dropdowns')
let  arrowDown = document.querySelector('.js-features-arrow-down')
let  companyArrowDown = document.querySelector('.js-company-arrow-down')
let  arrowUp = document.querySelector('.js-features-arrow-up')
let  companyArrowUp = document.querySelector('.js-company-arrow-up')
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
    isHovered = true
    arrowDown.classList.add('arrows-down')
    arrowUp.classList.add('arrows-up')
    displayFeaturesDropdown.classList.add('dropdown-displayed')
    console.log('hovered')
  }else{
    isHovered = false
    arrowUp.classList.remove('arrows-up')
    arrowDown.classList.remove('arrows-down')
    displayFeaturesDropdown.classList.remove('dropdown-displayed')
  } 
})
companyLink.addEventListener('mouseover', () => {
  if(!isHovered){
    isHovered = true
    companyArrowDown.classList.add('arrows-down')
    companyArrowUp.classList.add('arrows-up')
    displayCompanyDropdown.classList.add('dropdown-displayed')
    console.log('hovered')
  }else{
    isHovered = false
    companyArrowUp.classList.remove('arrows-up')
    companyArrowDown.classList.remove('arrows-down')
    displayCompanyDropdown.classList.remove('dropdown-displayed')
  } 
})