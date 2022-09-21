
// get slideBar Links
let homeLink = document.getElementById('home-link')
let aboutLink = document.getElementById('about-link')
let featuresLink = document.getElementById('features-link')
// get element of home page
let image = document.getElementById('image')
let contentHeader = document.getElementById('content-header')
let content = document.getElementById('content')
// get element of about page 
let aboutHeader = document.querySelector('.home .about h1')
let sliderParentScale = document.querySelector('.home .about .scale')
let slider = document.querySelector('.home .about .sliderParent .slider')
let countMoving = 0 // make a count for transform css
let countSliders = 0 // make a count to condition
let sliders = document.querySelectorAll(".home .about .sliderParent .slider .slide")
// get element of features page
let featureHeader = document.querySelector('.home .features h1')
let itemOne = document.querySelector('.item-one')
let itemTwo = document.querySelector('.item-two')
let itemThree = document.querySelector('.item-three')
let itemFour = document.querySelector('.item-four')
let itemFive = document.querySelector('.item-five')
let itemSix = document.querySelector('.item-six')


homeLink.onclick = ()=> {
    image.style.animationName = "fade"
    contentHeader.style.animationName = "fade"
    content.style.animationName = "fade"
    aboutHeader.style.animationName = ""
    sliderParentScale.style.animationName = ""
    featureHeader.style.animationName = ""
    itemOne.style.animationName = ""
    itemTwo.style.animationName = ""
    itemThree.style.animationName = ""
    itemFour.style.animationName = ""
    itemFive.style.animationName = ""
    itemSix.style.animationName = ""


}
aboutLink.onclick = ()=> {
    image.style.animationName = "fadeOutRight"
    contentHeader.style.animationName = "fadeOutLeft"
    content.style.animationName = "fadeOutLeft"
    aboutHeader.style.animationName = "fade"
    sliderParentScale.style.animationName = "zoomIn"
    featureHeader.style.animationName = ""
    itemOne.style.animationName = ""
    itemTwo.style.animationName = ""
    itemThree.style.animationName = ""
    itemFour.style.animationName = ""
    itemFive.style.animationName = ""
    itemSix.style.animationName = ""
}
featuresLink.onclick = ()=> {
    image.style.animationName = "fadeOutRight"
    contentHeader.style.animationName = "fadeOutLeft"
    content.style.animationName = "fadeOutLeft"
    aboutHeader.style.animationName = ""
    sliderParentScale.style.animationName = ""
    featureHeader.style.animationName = "fade"
    itemOne.style.animationName = "fade"
    itemTwo.style.animationName = "zoomIn"
    itemThree.style.animationName = "fade"
    itemFour.style.animationName = "fade"
    itemFive.style.animationName = "zoomIn"
    itemSix.style.animationName = "fade"
}

/* slider */
function sliderMoving(dir) {
    if(dir === "right" && countSliders < sliders.length - 1 ){
        countSliders++
        countMoving = countMoving - 100
        slider.style.transform = `translateX(${countMoving}%)`
    }
    if(dir === "left" &&countSliders != 0){
            countSliders--
            countMoving = countMoving + 100
            slider.style.transform = `translateX(${countMoving}%)`
    }
}