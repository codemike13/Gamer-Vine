
let uploadedImg = ''

loadImg = (event) => {
    uploadedImg = URL.createObjectURL(event.target.files[0])
}


function newNews() {

    console.log(uploadedImg);

    const new_post = document.createElement("DIV");
    new_post.setAttribute('class', 'news')

    const new_heading_div = document.createElement("DIV");
    new_heading_div.setAttribute('class', 'headline')
    const new_heading = document.createElement("H1");

    const new_sub_heading = document.createElement("H3");
    new_sub_heading.setAttribute('class', 'subhead')


    const new_body_p = document.createElement("P");
    new_body_p.setAttribute('class', 'body-text')

    const new_link = document.createElement("A")
    new_link.setAttribute('class', 'link')

    const new_image_div = document.createElement("DIV")
    new_image_div.setAttribute('class', 'photo')

    const new_img = document.createElement("IMG");
    new_img.setAttribute('src', uploadedImg)

    const new_button = document.createElement('BUTTON')
    new_button.setAttribute('class', 'delete')
    new_button.setAttribute('onclick', 'remove(this)')
    new_button.innerText = 'X'

    //From form fill for new post
    const heading = document.getElementById("heading").value;
    const sub_head = document.getElementById("subHeading").value;
    const body_p = document.getElementById("body").value;
    const linkData = document.getElementById("link").value
    const news_Posts = document.getElementById("articles");
    //Set Data
    new_heading.innerText = heading;
    new_sub_heading.innerText = sub_head;
    new_body_p.innerText = body_p;
    new_link.setAttribute('href', linkData)
    new_link.innerText = "Click here!"

    //Append new inner fields

    new_heading_div.appendChild(new_heading)

    new_image_div.appendChild(new_img)
    new_image_div.appendChild(new_sub_heading)

    new_body_p.appendChild(new_link)
    //Append to parent
    new_post.appendChild(new_button)
    new_post.appendChild(new_heading_div);
    new_post.appendChild(new_image_div);
    new_post.appendChild(new_body_p)



    // new_post.setAttribute
    news_Posts.prepend(new_post);

}



function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

remove = (ele) => {

    // When the 'X' button is clicked lets find its "grand"parent by accessing parentElement twice.
    let parent = ele.parentElement.parentElement

    // Now that we have the grandparent we can remove the h1 that = (ele.parentElement)
    // whose child (ele) is the button that called remove() function.
    parent.removeChild(ele.parentElement)
}