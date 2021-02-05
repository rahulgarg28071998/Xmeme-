const url = "http://localhost:3000/notes/"

const getMemes = async(event) => {


    const response = await fetch(url);
    const taskList = await response.json();
    for (let i in taskList) {
        let task = taskList[i];
        addTaskDescription(task.url, task.name, task.caption);
        console.log(task);
    }
}

getMemes();

async function myFunction(event) {
    var name = document.getElementById("Name").value;
    var imageurl = document.getElementById("caption").value;
    var caption = document.getElementById("image").value;

    console.log(name, imageurl, caption);

    var payload = JSON.stringify({
        "name": name,
        "url": caption,
        "caption": imageurl
    });


    const postResponse = await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: payload
    });

    console.log(postResponse);
}


const addTaskDescription = async(Image, name, caption, _id) => {

    let task = document.createElement('div');
    task.classList.add('memeBox');

    let image = document.createElement('img');
    image.classList.add('col-md');
    image.classList.add('image');
    image.setAttribute('src', Image);
    image.setAttribute('alt', "Image Url invalid");

    let nameDiv = document.createElement('div');
    nameDiv.classList.add('col-md');
    nameDiv.classList.add('text-name');
    nameDiv.innerText = name;

    let nameCaption = document.createElement('div');
    nameCaption.classList.add('col-md');
    nameCaption.classList.add('text-caption');
    nameCaption.innerText = caption;


    task.appendChild(image);
    task.appendChild(nameDiv);
    task.appendChild(nameCaption);
    let tasks = document.getElementById('scroll-area');
    tasks.insertBefore(task, tasks.childNodes[0]);
}