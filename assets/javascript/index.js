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

    social: function () {
        console.log('social');
    },

    contact: function () {
        console.log('contact');
    }
};

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

    document.getElementById('social').addEventListener('click', function (event) {
        toggleButton('social');
        buttonFuncs.social();
    });

    document.getElementById('contact').addEventListener('click', function (event) {
        toggleButton('contact');
        buttonFuncs.contact();
    });
});