let state = {
    projects: null,
    itemsHTML: [],
};

function loadJson(state) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            state.projects = JSON.parse(xmlhttp.responseText);
            populateHTML(state);
        }
    };
    xmlhttp.open("GET", "../assets/object.json", true);
    xmlhttp.send();
}

function populateHTML(state) {
    state.projects.items.forEach((item) => {
        let project = `<div class="col-4">
            <div class="project">
            <a href="${item.url}" class="project-link">
                <img src="${item.img}" alt="${item.img_alt}"class="project-pic">
                <div class="card-info"><span class="name">${item.name}</span>
                    <p class="description">${item.desc}</p></div></a>
            </div>
        </div>`;
        state.itemsHTML.push(project);
    });
    renderHTML(state);
}

function renderHTML(state){
    let i = 0;
    let j = 0;
    state.itemsHTML.forEach((item) =>{
        if(i % 3 === 0){
            j++;
            $('main').append(`<div class="row js-${j}"></div>`);
        }
        let row = `.row.js-${j}`;
        $(row).append(item);
        i++;
    });
}

$(loadJson(state));