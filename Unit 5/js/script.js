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