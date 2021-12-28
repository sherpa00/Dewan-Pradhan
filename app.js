// Navigations Logic
const bars = document.querySelector("#bars");
const navs = document.querySelector(".nav_list");


bars.addEventListener("click",() => {
    if (bars.classList.contains("fa-bars")) {
        bars.classList.replace('fa-bars','fa-times');
        navs.style.display = "flex";
    } else {
        bars.classList.replace("fa-times","fa-bars");
        navs.style.display = "none";
    }
});

setInterval(() => {
    if (window.innerWidth > 820) {
        navs.style.display = "flex";
    }
})


// my works slider logic
const allWorks = {
    "earthquake_resistant.jpg" : "Earthquake Reistant Building Structure",
    "types_of_foundation.jpg": "Analysis of different types of foundation",
    "hydropower_project.jpg": "Hydropower Project on Sunkoshi - 2021",
    "autocad.jpg": "Design implemetaion with Autocad",
    "pavements.jpg": "Analysis fo pavemet of road",
    "bridge.jpg": "Different types of Bridge Construction",
    "survey.jpg": "Survey Campaign & Overseeing",
    "gps.jpg": "GPS & Software implementation"
}

const imgs = Object.keys(allWorks);

const prev = document.querySelector(".prev");
const work = document.querySelector(".work");
const next = document.querySelector(".next");
const work_heading = document.querySelector(".work_heading");

//randomly add a work in slider first
var ind = Math.floor(Math.random() * imgs.length);
work.src = imgs[ind];
work_heading.innerHTML = allWorks[imgs[ind]];

prev.addEventListener("click",() => {
    ind--;
    if (ind < 0) {
        ind = imgs.length - 1;
    }
    let val_img = imgs[ind];
    let val_text = allWorks[val_img];
    work.src = val_img;
    work_heading.innerHTML = val_text;
})

next.addEventListener("click",() => {
    ind++;
    if (ind >= imgs.length) {
        ind = 0;
    }
    let val_img = imgs[ind];
    let val_text = allWorks[val_img];
    work.src = val_img;
    work_heading.innerHTML = val_text;
});

const automaticSlider = setInterval(() => {
    ind++;
    if (ind >= imgs.length) {
        ind = 0;
    }
    let val_img = imgs[ind];
    let val_text = allWorks[val_img];
    work.src = val_img;
    work_heading.innerHTML = val_text;
},3000)

work.addEventListener("click",() => {
    clearInterval(automaticSlider);
});

// warninng messages in contact section
const sendBtn = document.querySelector(".send");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const comment = document.querySelector(".comment");
const warning = document.querySelector(".warning");

sendBtn.addEventListener("click",() => {
    if (name.value == "" || email.value == "" || comment.value == "") {
        displayWarning("Please fill empty forms",true);
    }else {
        let val = email.value;
        if (validateEmail(val)) {
            displayWarning("Please fill the email info in next page",false);
            email.value = "";
            name.value = "";
            comment.value = "";
            setTimeout(() => {
                window.open("https://accounts.google.com/signin/v2/identifier?service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin","_blank")
            },1000);
        } else {
            displayWarning("Your Email does'nt seem to be valid",true)
        }
    }
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function displayWarning(msg,err) {
    if (err) {
        warning.innerHTML = msg;
        warning.style.opacity = "1";
        warning.style.background = "crimson";
        setTimeout(() => {
            warning.innerHTML = "";
            warning.style.opacity = "0";
        },3000);
    } else {
        warning.innerHTML  = msg;
        warning.style.background = "lightgreen";
        warning.style.opacity = "1";
        setTimeout(() => {
            warning.innerHTML = "";
            warning.style.opacity = "0";
        },3000);
    }
}

//social media link integration
const facebook = document.querySelector(".fa-facebook");
const insta = document.querySelector(".fa-instagram");
const youtube = document.querySelector(".fa-youtube");
const snapchat = document.querySelector(".fa-snapchat");
const gmail = document.querySelector(".fa-envelope-o");

facebook.addEventListener("click",() => {
    window.open("https://www.facebook.com/dewan.pradhan.501","_blank");
})
insta.addEventListener("click",() => {
    window.open("https://www.instagram.com/dewan_pradhan/?hl=en","_blank");
})
youtube.addEventListener("click",() => {
    window.open("https://www.youtube.com/channel/UCGK_Pmgw_7lZzguQEB57Lvg","_blank");
})
snapchat.addEventListener("click",() => {
    window.open("https://www.snapchat.com/","_blank")
})
gmail.addEventListener("click",() => {
    window.open("https://accounts.google.com/signin/v2/identifier?service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin","_blank");
});

//hire me function on spot 
const hireBtn = document.querySelector(".hire_me");

hireBtn.addEventListener("click",() => {
    comment.value = " !!! Immediate Employee contract offer !!!";
    email.focus();
    name.focus();
});

//Dark mode logic
const body = document.querySelector("body");
const heading = document.querySelector(".main_heading")
const darkBtn = document.querySelector(".darkMode");

darkBtn.addEventListener("click",() => {
    body.classList.toggle("dark_enabled");
    heading.classList.toggle("dark_enabled");
    if (body.classList.contains("dark_enabled")) {
        darkBtn.style.background = "white";
        darkBtn.style.color = "black"
    } else {
        darkBtn.style.background = "black";
        darkBtn.style.color = "white"
    }
    console.log("ok")
})

//refreash heading
const logo = document.querySelector(".logo");

logo.addEventListener("click",() => {
    window.location.reload();
})