modStars = (ele) => {
    //Get all the stars
    let stars = document.querySelectorAll('#stars > div')
    //Catch the star rating based on ele id's which range 1-5
    let rating = ele.id
    //Always reset stars to white first before updating , this handles star rating reduction.
    for (let star of stars) {
        star.style.backgroundColor = 'white'
    }
    //Add stars based on user selection
    for (let i = 0; i < rating; i++) {
        stars[i].style.backgroundColor = 'yellow'
    }
}

addReview = (ele) => {
    let image = document.getElementById('userPicUpload')
    console.log(image.files[0].mozFullPath);

}


scroller = (ele) => {
    let xboxSlide = document.getElementById('xbox-slide')
    let psSlide = document.getElementById('ps-slide')

    if (ele === 'x-right') {
        //Used this to find window width.
        // ---> console.log(xboxSlide.offsetWidth);
        //currently it is hard set but you can make it dynamic to catch any resizing. 
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

