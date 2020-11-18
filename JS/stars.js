modStars = (ele) => {
    //Get all the stars
    let stars = document.querySelectorAll('#stars > div')
    let starsDivVal = document.getElementById('stars')
    //Catch the star rating based on ele id's which range 1-5
    let rating = ele.id
    starsDivVal.setAttribute('data-star-value', rating)
    console.log(starsDivVal);

    //Always reset stars to white first before updating , this handles star rating reduction.
    for (let star of stars) {
        star.style.backgroundColor = 'white'
    }
    //Add stars based on user selection
    for (let i = 0; i < rating; i++) {
        stars[i].style.backgroundColor = 'yellow'
    }

}


scroller = (ele) => {
    let xboxSlide = document.getElementById('xbox-slide')
    let psSlide = document.getElementById('ps-slide')

    if (ele === 'x-right') {
        //Used this to find window width.
        // ---> console.log(xboxSlide.offsetWidth);
        // Now this function catches dynamic sizing change of card
        xboxSlide.scrollLeft += xboxSlide.offsetWidth;
    }
    if (ele === 'x-left') {
        console.log('xleft clicked');

        xboxSlide.scrollLeft -= xboxSlide.offsetWidth;
    } if (ele === 'p-right') {
        psSlide.scrollLeft += psSlide.offsetWidth;

    } if (ele === 'p-left') {
        psSlide.scrollLeft -= psSlide.offsetWidth;

    }

}
setEmoji = (ele) => {
    document.getElementById('userEmoji').setAttribute('data-emoji-choice', ele.getAttribute('src'))
    console.log(ele.getAttribute('src'));

}

addReview = (ele) => {

    //Create variables for dynamic creation 

    const xboxSlide = document.getElementById('xbox-slide')
    const psSlide = document.getElementById('ps-slide')
    const userPane = document.createElement('DIV')
    const reviewCard = document.createElement('DIV')
    const userName = document.createElement('DIV')
    const userStars = document.createElement('DIV')
    const userReview = document.createElement('DIV')
    const nameH4 = document.createElement('H4')
    const reviewH1 = document.createElement('H1')
    const reviewP = document.createElement('P')
    let userEmoji = document.createElement('IMG')

    // Grab User review inputs
    const userInputName = document.getElementById('usernameinput').value
    let userInput = document.getElementById('rev-input').value
    let starsDivVal = document.getElementById('stars').getAttribute('data-star-value')
    let emojiChoice = document.getElementById('userEmoji').getAttribute('data-emoji-choice')

    //Set user stars
    userStars.setAttribute('class', 'user-stars')
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('DIV')
        if (i < starsDivVal) {
            star.setAttribute('class', 'yellow')
            userStars.appendChild(star)
        } else {
            star.setAttribute('class', 'white')
            userStars.appendChild(star)
        }
    }

    //Set user Emoji
    userEmoji.setAttribute('src', emojiChoice)
    userEmoji.setAttribute('class', 'user-img')

    //Set User Card
    reviewCard.setAttribute('class', 'review-card')

    //Set User Pane
    userPane.setAttribute('class', 'user-pane')

    //Set User Name
    userName.setAttribute('class', 'username')
    nameH4.innerText = userInputName
    userName.appendChild(nameH4)

    //Set user review 
    userReview.setAttribute('class', 'user-review')
    reviewP.innerText = userInput
    // userReview.appendChild(reviewP)

    userPane.appendChild(userEmoji)
    userPane.appendChild(userName)
    userPane.appendChild(userStars)

    userReview.appendChild(reviewP)

    reviewCard.appendChild(userPane)
    reviewCard.appendChild(userReview)


    if (ele.id === 'xb-submit') {
        reviewH1.innerText = 'XBOX'
        userReview.prepend(reviewH1)
        document.getElementById('xbox-slide').prepend(reviewCard)
    }

    if (ele.id === 'ps-submit') {
        reviewH1.innerText = 'PS-5'
        userReview.prepend(reviewH1)
        document.getElementById('ps-slide').prepend(reviewCard)
    }

}

