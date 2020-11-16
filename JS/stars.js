





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

