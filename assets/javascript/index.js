let state = {
    activeID: 'about',
    isActive: false
}

function sendMail() {
    window.location.href = "mailto:shen.i@live.com" + "?subject=" + encodeURIComponent("hello");
}

function downloadCV() {
    window.location.assign('../assets/RESUME_Hamitaj.pdf');
    return false;
}

function loadPage(pageName) {
    let infoContent = $('#info-content');
    infoContent.innerHTML = "";
    infoContent.load("../assets/pages/" + pageName.substring(1) + ".html")
}

function toggleButton(_id) {
    if (state.isActive) {
        if (state.activeID !== _id) {
            $(state.activeID).toggleClass('active-header');
            $(_id).toggleClass('active-header');
            state.activeID = _id;
            loadPage(_id);
        }
    } else {
        $(_id).toggleClass('active-header');
        state.activeID = _id;
        state.isActive = true;
        loadPage(_id);
    }
}


$("#about").on('click', function () {
    toggleButton('#about');
});

$("#resume").on('click', function () {
    toggleButton('#resume');
});

$("#services").on('click', function () {
    toggleButton('#services');
});

$("#contact").on('click', function () {
    toggleButton('#contact');
});

$(() => {
    toggleButton('#about');
});
