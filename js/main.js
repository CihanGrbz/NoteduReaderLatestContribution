// MENU FUNCTIONS
function openMenu() {
    $("#menu").css("left", "0");
    $("body").toggleClass("dialogIsOpen", true);
}

function closeMenu() {
    $("body").toggleClass("dialogIsOpen", false);
    if ($(window).width() >= 960) {
        $("#menu").css("left", "-20%");
    }
    else if ($(window).width() >= 576) {
        $("#menu").css("left", "-30%");
    }
    else {
        $("#menu").css("left", "-80%");
    }
}

function resizeMenu() {
    if ($(window).width() >= 960) {
        $("#menu").css("width", "20%");
    }
    else if ($(window).width() >= 576) {
        $("#menu").css("width", "30%");
    }
    else {
        $("#menu").css("width", "80%");
    }
}

function checkMenu() {
    if ($("#menu").css("left") == "0px") {
        openMenu();
    }
    else{
        resizeMenu();
        closeMenu();
    }
}

$(document).click(function (event) {
    //if you click on anything except the modal itself close the modal
    if (!$(event.target).closest(".menu, .sidebar").length) {
        closeMenu();
    }
});
// SCROLLBAR FUNCTIONS
$(document).ready(function () {
    // Scrollbar for main page
    $("body").niceScroll({
        cursorcolor: "#424242", // change cursor color in hex
        cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "7px", // cursor width in pixel (you can also write "5px")
        cursorborder: "0px solid #fff", // css definition for cursor border
        cursorborderradius: "3px", // border radius in pixel for cursor
    
        autohidemode: true, // how hide the scrollbar works, possible values: 
        //background:"grey",
             
    });
    // Scrollbar for menu tabs
    $(".tab-content").niceScroll({

    });
    

    //Popovers
    $('#font-settings').popover({
        trigger: 'focus',
        html:true,
        title:'<input type="range" class="custom-range">',
        content:'<p style="font-family: "Times New Roman", Times, serif !important;">Times New Roman</p>'
        +'<p style="font-family: "Georgia, serif;">Georgia</p>'+
        '<p style="font-family: "Helvetica, sans-serif;">Helvetica</p>',
        placement:'right',
        boundary:'window',
        template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }); 
    
});

