// Inits components for todo list
function toDoListInit() {
    // Create a "close" button and append it to each list item
    var toDoList = document.querySelector('.toDoList');
    var myNodelist = toDoList.getElementsByTagName('li');
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Add a "checked" symbol when clicking on a list item
    var list = toDoList;
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

// Create a new list item when clicking on the "Add" button for the todo list
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("toDoList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Calculate power required for the computer parts selected
function psuCalculator() {
    form = document.psuCalc;
    var cpuPower = {
        "i3": 50,
        "i5": 100,
        "i7": 150,
        "i9": 200,
        "r3": 50,
        "r5": 100,
        "r7": 150,
        "r9": 200
    }
    var gpuPower = {
        "3060": 300,
        "3060ti": 325,
        "3070": 400,
        "3080": 450,
        "3090": 500,
        "6700": 400,
        "6800": 450,
        "6800xt": 475,
        "6900": 500
    }
    var ramPower = {
        "8": 25,
        "16": 35,
        "32": 45
    }
    var storagePower = {
        "1": 25,
        "2": 50,
        "3": 75,
        "4": 100
    }
    cpu = form.cpu.value;
    gpu = form.gpu.value;
    ram = form.ram.value;
    storage = form.storage.value;
    custom = form.custom.value;
    if (custom == "" || Number.isInteger(parseInt(custom)) && parseInt(custom) >= 0) { // Verify that custom value is a positive integer or blank
        power = cpuPower[cpu] + gpuPower[gpu] + ramPower[ram] + storagePower[storage] + parseInt(custom);
        document.getElementById("powerNeeded").innerHTML = power + "W";
    } else { // Provide error message for invalid value
        document.getElementById("powerNeeded").innerHTML = "Please put a positive integer or leave custom component blank"
    }
}

var slideIndex = 0; // Init slide index

// Automatically change the picture every 3 seconds
function slideshow() {
    var pictures = document.getElementsByClassName("slideshow");
    var i;
    for (i = 0; i < pictures.length; i++) { // Make sure no image is visible
        pictures[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex >= pictures.length) { slideIndex = 0; } // Make sure the counter doesn't overflow
    pictures[slideIndex].style.display = 'block'; // Set the current image to visible
    setTimeout(slideshow, 3000);
}

// Manually change the picture using the buttons on the webpage
function changeImage(n) {
    var pictures = document.getElementsByClassName("slideshow");
    var i;
    for (i = 0; i < pictures.length; i++) { // Make sure no image is visible
        pictures[i].style.display = 'none';
    }
    slideIndex += n; // Change index based on button pressed
    if (slideIndex >= pictures.length) { slideIndex = 0; } else if (slideIndex < 0) { slideIndex = pictures.length - 1; } // Make sure the counter doesn't over or underflow
    pictures[slideIndex].style.display = 'block';
}

// Change the visibility of content on the webpage
function visibility(state, speed) {
    var cookieName = "state";
    try {
        var textContent = $(".text");
        var videoContent = $('.video');
        if (state == "text") {
            document.cookie = cookieName + "=" + state + ";path=/";
            textContent.show(speed);
            videoContent.hide(speed);
        } else if (state == "video") {
            document.cookie = cookieName + "=" + state + ";path=/";
            textContent.hide(speed);
            videoContent.show(speed);
        } else if (state == "both") {
            document.cookie = cookieName + "=" + state + ";path=/";
            textContent.show(speed);
            videoContent.show(speed);
        } else {
            console.error("Unknown state")
        }
    } catch (e) {
        console.log("No content types on this page");
        return;
    }

}

// Get the current state from the stored cookie
function getState(cookie) {
    var cookieName = "state";
    if (cookie.indexOf("state=") == -1) {
        document.cookie = cookieName + "= both;path=/";
    }
    return document.cookie.slice(document.cookie.indexOf("state=") + 6);
}

function amdVerify() {
    const regex = /[1-5]\d0{2}[XG]?/gm;
    var stringTest = document.getElementById('amdName').value;
    if (stringTest.match(regex) == null) {
        // Invalid
        document.getElementById("amdTest").innerHTML = stringTest + " is not valid";
    } else {
        // Valid
        document.getElementById("amdTest").innerHTML = stringTest + " is valid";
    }
}

function intelVerify() {
    const regex = /[1-9]\d{2,3}[0][KF]?[F]?/gm;
    var stringTest = document.getElementById('intelName').value;
    if (stringTest.match(regex) == null) {
        // Invalid
        document.getElementById("intelTest").innerHTML = stringTest + " is not valid";
    } else {
        // Valid
        document.getElementById("intelTest").innerHTML = stringTest + " is valid";
    }
}

async function getNews() {
    const apiKey = '2d27495d3956eaadc705190ace64562c'
    const query = 'computer'
    const lang = 'en'
    var url = "https://gnews.io/api/v4/search?q=" + query + "&lang=" + lang + "&token=" + apiKey
    var news = ""
    var response = fetch(url)
        .then(res => res.json())
        .then(json => {
            for (i = 0; i < json.articles.length; i++) {
                var item = json.articles[i].title + "<br><br>"
                var result = item.link(json.articles[i].url)
                document.getElementById('news').innerHTML += result
            }
        })
        .catch(error => console.log(error))
}

function getIP() {
    var url = "https://api64.ipify.org"
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    if (request.status == 200) {
        return request.responseText
    } else {
        return "No IP" //IP may not be retrived if with certain adblocks
    }
}

// function getMap() {
//     var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=computer&location=42.3675294,-71.186966&radius=10000&key=AIzaSyC-gLWbrw1LChndJ9uxNg2dn-jdn2KlqEc"
//     var request = new XMLHttpRequest();
//     request.open("GET", url, false);
//     request.send();
//     if (request.status == 200) {
//         return request.responseText
//     } else {
//         return "No IP" //IP may not be retrived if with certain adblocks
//     }
// }

function getCoords(ip) {
    var url = "http://ip-api.com/json/" + ip
    var request = new XMLHttpRequest();
    if (ip == "No IP") {
        return { 'lat': 43.5890, 'lon': 79.6441 } //return Mississauga if IP cannot be detected
    } else {
        request.open("GET", url, false);
        request.send();
        var json = JSON.parse(request.responseText)
        return { 'lat': json.lat, 'lon': json.lon }
    }
}
//maps.googleapis.com/maps/api/place/textsearch/json?query=computer&location=42.3675294,-71.186966&radius=10000&key=AIzaSyC-gLWbrw1LChndJ9uxNg2dn-jdn2KlqEc
// function displayMap() {
//     var coords = getCoords(getIP())
//     var apiKey = "AIzaSyC-gLWbrw1LChndJ9uxNg2dn-jdn2KlqEc"
//     var query = "computer"
//     var location = coords['lat'] + ',' + coords['lon'];
//     var radius = "10000";
//     var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&location=" + location + "&radius=" + radius + "&key=" + apiKey
//     var news = ""
//     var response = fetch(url)
//         .then(res => res.json())
//         .then(json => {
//             console.log(json['results'])
//         })
//         .catch(error => console.log(error))
// }

var map;
var service;
var infowindow;

function initialize() {
    var coords = getCoords(getIP())
    var location = new google.maps.LatLng(coords['lat'], coords['lon']);

    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });

    var request = {
        location: location,
        radius: '500',
        keyword: 'computer'
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}


// Run when all content on page is loaded
window.onload = (event) => {
    if (window.location.href.includes('home.html')) {
        slideshow();
        getNews();
    }
}

// Run when HTML has been fully loaded, this was faster then using onload as the code only references HTML content, and does not need all content to be loaded
window.addEventListener('DOMContentLoaded', (event) => {
    visibility(getState(document.cookie), 0);
    if (window.location.href.includes('troubleshootGuide.html')) {
        toDoListInit();
    }
});

// This code is blocked locally due to CORS, works when using http.server
// This functions load in the constant header file which is used across all pages
$(function() {
    if (window.location.href.includes('/parts/')) {
        $("#header").load("../parts/header.html");
    } else {
        $("#header").load("../html/header.html");
    }
});