modStars = (ele) => {
    let stars = document.querySelectorAll('#stars > div')
    let rating = ele.id
    //Reset stars incase of decreasing star amount selection
    for (let star of stars) {
        star.style.backgroundColor = 'white'
    }
    //Add stars base on user selection
    for (let i = 0; i < rating; i++) {
        stars[i].style.backgroundColor = 'yellow'
    }
}

addReview = () => {

}


scroller = (ele) => {
    let xboxSlide = document.getElementById('xbox-slide')
    let psSlide = document.getElementById('ps-slide')
    for (let i = 504; i <) { }
    setTimeout(function () {
        //your code to be executed after 1 second
    }, 100)


    if (ele === 'x-right') {
        //Used this to find window width.
        // console.log(xboxSlide.offsetWidth);
        xboxSlide.scrollLeft += 504;
    }
    if (ele === 'x-left') {
        console.log('xleft clicked');

        xboxSlide.scrollLeft -= 504;
    } if (ele === 'p-right') {
        psSlide.scrollLeft += 504;

    } if (ele === 'p-left') {
        psSlide.scrollLeft -= 504;

    }

}

