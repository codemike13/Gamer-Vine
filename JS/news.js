
let uploadedImg = ''

loadImg = (event) => {
    uploadedImg = URL.createObjectURL(event.target.files[0])
}


function newNews() {

    console.log(uploadedImg);

    const new_post = document.createElement("DIV");
    const new_heading = document.createElement("H2");
    const new_sub_heading = document.createElement("H2");
    const new_body = document.createElement("P");
    const new_link = document.createElement("A")
    const new_img = document.createElement("IMG");

    //From form fill for new post
    const heading = document.getElementById("heading").value;
    // const sub_head = document.getElementById("sub-head").value;
    const bodyData = document.getElementById("body").value;
    const linkData = document.getElementById("linking").value
    const news_Posts = document.getElementById("newsonly");

    new_heading.innerText = heading;
    new_body.innerText = bodyData;
    new_link.innerText = linkData;
    new_img.style.backgroundImage = "url(" + uploadedImg + ")";

    // new_post.appendChild(new_heading);
    // new_post.appendChild(new_sub_heading);
    // new_post.appendChild(new_body);
    new_post.appendChild(new_img);
    // new_post.appendChild(new_link);



    // new_post.setAttribute
    news_Posts.append(new_post);

}



function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

