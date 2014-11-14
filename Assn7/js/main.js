/*
    Author: Bunchhieng Soth, bsoth@cs.uml.edu
    Created on: 11/05/2014
    
    Creat tabs on lesson page 
    */
$(document).ready(function () {
    $("#tabs").tabs({
        collapsible: true,
        hide: "slideUp"
    });
    $("#submit1").click(function () {
        $("#submit").html("<p>Thank you for submitting your answers.</p>");
    });
});