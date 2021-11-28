const backToTop = document.getElementById("backToTop");
const searchFormButton = document.getElementById("searchFormButton");


/**
 * Function makes h1 text content responsive making header text shorter if the current window 
 * width is less than 576px.
 */
function responsiveTitle() {
    let title = document.getElementById("title");
    if(window.innerWidth < 576) {
        title.textContent = "Thomas Jones - Homeopath";
    } else {
        title.textContent = "Thomas Jones BSc LCHE - Classical Homeopath";
    }
}


/**
 * Function makes copyright statement responsive making text shorter if the current window width is less than 576px.
 * It uses js date method to get current year and adds it to copyright statement then inserts it into the page footer.
 */
function getCurrentYear() {
    const copyRight = document.getElementById("copyRight");
    let copyRightText;
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    if(window.innerWidth < 576) {
        copyRightText = "2011 - " + year + " © Thomas Jones";        
    } else {
        copyRightText = "2011 - " + year + " © Thomas Jones - All Rights Reserved";
    }
    copyRight.innerHTML = copyRightText;
}


/**
 *  CREDIT: code for scrolling button taken from
 *  https://www.w3schools.com/howto/howto_js_scroll_to_top.asp 
 * makes floating button visible once user starts scrolling.
 */
function scrollingButton() {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
}


/**
 * topFunction function scrolls back to the top of the page
 */
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/**
 * floatButton function fixes floating button in place on screens larger than 1200px
 * It also unfixes floating button on screens smaller than 1200px
 */
function floatButton() {
    if(window.innerWidth < 576) {
        backToTop.classList.replace("btn-float", "btn-fixed");
        backToTop.classList.add("active");
    } else {
        backToTop.classList.replace("btn-fixed", "btn-float");
    }
}


/**
 * function toggles search form by adding/removing show-search-form class on screens 
 * larger than 576px function is triggered when  searchFormButton is clicked
 */
function toggleSearchForm() {
    if(window.innerWidth >= 576) {
        let searchForm = document.getElementById("searchForm");
        searchForm.classList.toggle("show-search-form");
    }
}


/**
 * function reveals search form by removing hide-search-form on screens smaller than 576px
 * function hides search form by adding hide-search-form on screens larger than 576px
 * function is triggered by window resize event
 */
function showSearchForm() {
    let searchForm = document.getElementById("searchForm");
    if(window.innerWidth < 576) {
        searchForm.classList.remove("hide-search-form");
        searchForm.classList.remove("show-search-form");
    } else {
        searchForm.classList.add("hide-search-form");
    }
}


// eventlisteners
window.addEventListener("scroll", scrollingButton, false);
backToTop.addEventListener("click", topFunction, false);
searchFormButton.addEventListener("click", toggleSearchForm, false);
window.addEventListener("resize", function() {
    responsiveTitle();
    floatButton();
    showSearchForm();
    getCurrentYear();
}, false);


// function calls
document.addEventListener("DOMContentLoaded", function() {
    responsiveTitle();
    floatButton();
    showSearchForm();
    getCurrentYear();
}, false);
