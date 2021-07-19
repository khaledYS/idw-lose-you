






// we get all of the elements we want to do our effect on
// in our case we made the class .tran
const elements = document.querySelectorAll('.tran')


// and we choose them one by one to do our effect on them 
window.onscroll = ()=>{
    elements.forEach(element => {
        if(element.getBoundingClientRect().y <= height){
            element.classList.remove('tran')
            element.classList.add(element.getAttribute('tarn-data-class-to'))
        }
    });
}




// we want the effect to remove the class when the element is in the middle of the screen
// so we can set a height variable 
// and it will take the height of the screen and cut it into to 
// and we keep upadting this variable by on resize function on the window
let height = window.innerHeight / 2
window.onresize = ()=>{
    // and we just assign the varaible to another value again
    height = window.innerHeight / 2
}












































/* 
    * as we acctepted 
    * i really scared if i lose her
    * iam sorry if i did something wrong
    * i hope i die
    * its the first time i find some one 
    * kinda understands me
    * in every shit i say
    * in ever type i write she understands
    * i just like her
*/

