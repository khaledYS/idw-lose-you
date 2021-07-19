window.onresize = updateHeight;
function updateHeight(){
    document.body.style.height = `${window.innerHeight}px`
}
updateHeight()


// when click on thumb show an alert
const thumb = document.querySelector('.lastone > footer > div[thumb] > div')
thumb.onclick = ()=>{
    window.alert('تعالي انستا...')
}


/* 

body{
    div.heart{
        span{
            lorem...
        }
    }
    div.intro{
        span{
            span.firstWords{
                lorem...
            }
            span{
                lorem...
            }
        }
    }
}

*/



// function scrollInto(element){
//     element.scrollIntoView()
// }
// setInterval(() => {
//     scrollInto(document.querySelector('.lastone'))
// }, 500);