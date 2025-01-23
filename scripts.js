let iconOpen = document.querySelector('.js-icon-open')
let iconClose = document.querySelector('.js-icon-close')
let bodyOpacity = document.querySelector('.js-body-self')
let options = document.querySelector('.js-options-mobile')
let isOpened = false


let isClicked = false
let featuresLinkMobile = document.querySelector('.js-features-link-mobile')
let featuresArrowDownMobile = document.querySelector('.js-features-arrow-down-mobile')
let featuresArrowUpMobile = document.querySelector('.js-features-arrow-up-mobile')
let featuresOptions = document.querySelector('.js-features-options')

let companyLinkMobile = document.querySelector('.js-company-link-mobile')
let companyArrowDownMobile = document.querySelector('.js-company-arrow-down-mobile')
let companyArrowUpMobile = document.querySelector('.js-company-arrow-up-mobile')
let companyOptions = document.querySelector('.js-company-options')


let isHovered = false
let displayFeaturesDropdown = document.querySelector('.js-features-dropdowns')
let  arrowDown = document.querySelector('.js-features-arrow-down')
let  arrowUp = document.querySelector('.js-features-arrow-up')
let featuresLink = document.querySelector('.js-features')


let displayCompanyDropdown = document.querySelector('.js-company-dropdowns')
let  companyArrowDown = document.querySelector('.js-company-arrow-down')
let  companyArrowUp = document.querySelector('.js-company-arrow-up')
let companyLink = document.querySelector('.js-company')

iconOpen.addEventListener('click', () => {
 if(!isOpened){
  options.classList.add('options-opened')
  iconClose.classList.add('closed-mobile')
  bodyOpacity.classList.add('opacity-added')
  isOpened = true
 }else{
  options.classList.remove('options-opened')
  iconClose.classList.remove('closed-mobile')
  bodyOpacity.classList.remove('opacity-added')
  isOpened = false
 }
 
})
iconClose.addEventListener('click', () => {
  if(isOpened){
    options.classList.remove('options-opened')
    iconClose.classList.remove('closed-mobile')
    bodyOpacity.classList.remove('opacity-added')
    isOpened = false
   }else{
    isOpened = true
   }
 })

featuresLinkMobile.addEventListener('click', () => {
  if(!isClicked){
    isClicked = true
    featuresArrowDownMobile.classList.add('arrow-down-mobile')
    featuresArrowUpMobile.classList.add('arrow-up-mobile')
    featuresOptions.classList.add('features-options-displayed')
    console.log('clicked')
  }else{
    isClicked = false
    featuresArrowDownMobile.classList.remove('arrow-down-mobile')
    featuresArrowUpMobile.classList.remove('arrow-up-mobile')
    featuresOptions.classList.remove('features-options-displayed')
  }
})
companyLinkMobile.addEventListener('click', () => {
  if(!isClicked){
    isClicked = true
    companyArrowDownMobile.classList.add('company-arrows-down-mobile')
    companyArrowUpMobile.classList.add('company-arrows-up-mobile')
    companyOptions.classList.add('company-options-displayed')
    console.log('clicked')
  }else{
    isClicked = false
    companyArrowDownMobile.classList.remove('company-arrows-down-mobile')
    companyArrowUpMobile.classList.remove('company-arrows-up-mobile')
    companyOptions.classList.remove('company-options-displayed')
  }
})

featuresLink.addEventListener('click', () => {
  if(!isHovered){
    isHovered = true
    arrowDown.classList.add('arrows-down')
    arrowUp.classList.add('arrows-up')
    displayFeaturesDropdown.classList.add('dropdown-displayed')
  }else{
    isHovered = false
    arrowUp.classList.remove('arrows-up')
    arrowDown.classList.remove('arrows-down')
    displayFeaturesDropdown.classList.remove('dropdown-displayed')
  } 
})
companyLink.addEventListener('click', () => {
  if(!isHovered){
    isHovered = true
    companyArrowDown.classList.add('company-arrows-down')
    companyArrowUp.classList.add('company-arrows-up')
    displayCompanyDropdown.classList.add('company-dropdown-displayed')
  }else{
    isHovered = false
    companyArrowUp.classList.remove('company-arrows-up')
    companyArrowDown.classList.remove('company-arrows-down')
    displayCompanyDropdown.classList.remove('company-dropdown-displayed')
  } 
})