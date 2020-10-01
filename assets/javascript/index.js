let state = {
    activeID: 'about',
    isActive: false
}

let buttonFuncs = {
    about: function () {
        console.log('about');
    },

    resume: function () {
        console.log('resume');
    },

    services: function () {
        console.log('services');
    },

    contact: function () {
        console.log('contact');
    }
};

function sendMail(){
    window.location.href = "mailto:shen.i@live.com" + "?subject=" + encodeURIComponent("hello");
}

function downloadCV(){
    window.location.assign('../assets/RESUME_Hamitaj.pdf');
    return false;
}

function toggleButton(_id) {
    if (state.isActive) {
        if (state.activeID !== _id) {
            document.getElementById(state.activeID).classList.toggle('active-header');
            document.getElementById(_id).classList.toggle('active-header');
            state.activeID = _id;
        }
    } else {
        document.getElementById(_id).classList.toggle('active-header');
        state.isActive = true;
    }
}

document.addEventListener('DOMContentLoaded', function (event) {
    toggleButton('about');

    document.getElementById('about').addEventListener('click', function (event) {
        toggleButton('about');
        buttonFuncs.about();
    });

    document.getElementById('resume').addEventListener('click', function (event) {
        toggleButton('resume');
        buttonFuncs.resume();
    });

    document.getElementById('services').addEventListener('click', function (event) {
        toggleButton('services');
        buttonFuncs.services();
    });

    document.getElementById('contact').addEventListener('click', function (event) {
        toggleButton('contact');
        buttonFuncs.contact();
    });
});
