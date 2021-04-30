function psuCalculator {
    var dictionaries; // store the power values for each part of the dropdown in the form in key/value pairs
    Get values from form dropdowns and text box
    if (Textbox is valid number) {
        Compute power
        Show power on web page
    } else {
        Display error telling user to input valid value
    }
}

var currentSlide = 0

function slideShow {
    Get image objects
    Set all objects to be not visible
    currentSlide++
    if (currentSlide over number of images) {
        currentSlide = 0
    }
    Display image[currentSlide]
    Repeat every 3 seconds
}


function changeImageWithButton(buttonPressed) {
    // buttonPressed will map to +-1 depending on which button is pressed
    Get image objects
    Set all objects to be not visible
    currentSlide += buttonPressed
    if (currentSlide over number of images) {
        currentSlide = 0
    } else if (currentSlide less then 0) {
        currentSlide = last image
    }
    Display image[currentSlide]
}

function visibility(state) {
    cookie = state
    if (state == text) {
        Show text content
    } else if (state == video) {
        Show video content
    } else if (state == both) {
        Show all both content
    }
}

function getState(cookie) {
    if (cookie == null) {
        cookie = both
    }
    return cookie
}

function regexCheck {
    Get input from webpage
    if (input matches regex) {
        Tell user CPU name is valid
    } else {
        Tell user CPU name is invalid
    }
}