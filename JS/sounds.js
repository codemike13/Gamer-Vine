play = (ele) => {
    if (ele.id === 'b' || ele.id === 'c') {
        ele.childNodes[1].currentTime = 1
        ele.childNodes[1].volume = .5
    }
    if (ele.id === 'a') {
        ele.childNodes[1].currentTime = .5
        ele.childNodes[1].volume = 1

    }
    ele.childNodes[1].play()
    // document.getElementById(sound).play();
}

stop = (ele) => {
    ele.childNodes[1].pause()
    ele.childNodes[1].currentTime = 0;
}