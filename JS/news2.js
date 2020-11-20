function newNews() {
    //When creating Elements remember to capitalize the tag name , exemplo : 'div'-->'DIV'
    const childDiv = document.createElement("div");
    const heading = document.createElement("h2");
    const body = document.createElement("p");
    const alink = document.createElement("a")
    const button1 = document.createElement("button");
    const imagen = document.createElement("IMG");

    imagen.setAttribute("width", "304");
    imagen.setAttribute("height", "228");

    const headingData = document.getElementById("heading").value;
    const bodyData = document.getElementById("body").value;
    const linkData = document.getElementById("linking").value
    const imageData = document.getElementById("imagen").file;
    const parentDiv = document.getElementById("content");

    heading.innerText = headingData;
    body.innerText = bodyData;
    alink.innerText = linkData;
    imagen.innerHTML = imageData;

    //Remeber to add styling to each new element you can use setAttribute() and use css id's and classes you have already created.

    childDiv.appendChild(heading);
    childDiv.appendChild(body);
    childDiv.appendChild(imagen);
    childDiv.appendChild(alink);

    // Remember to use .setAttribute('id','news1') method when setting attributes such as id.
    // Also you are assigning every new div created the same id. Remember id's are unique and are meant to be used for a single element. Maybe you can use a for loop in a way that querySelectorAll's all the children divs in 'newsonly' div. When you get the 'length' of that div and its children assign any new div length+1 , or something in this fashion of logic. 
    // One more thing , think about the fact that you can derive length of a parent div and its children, is there a still a neccesity in this scenario to assign id's ?  we can always access each post by its list[i] position too. 
    childDiv.id = "news1";

    //You are appending to the 'content' Div , remember that is the top layer container for all the news content, what you want to append to is the div 'newsonly' that contains all the news cards. But good job close!
    parentDiv.append(childDiv);

}

// var counter = 0

// function removeNews() {
//     while (counter !== -1) {
//         var newt = document.getElementsById("newsonly");
//         newt.removeChild("news");
//         counter += 1
//         if (counter > 0) {
//             var newt = document.getElementsById("newsonly");
//             newt.removeChild("news");

//         }

//     }
// }


function removeNews() {
    newsonly.removeChild(news1);

}

function removeNews2() {
    newsonly.removeChild(news2);

}

function removeNews3() {
    newsonly.removeChild(news3);

}



