/* 
    
    This fucntion is used to show and hide the content under each assignment tabs

    Created on: 09/22/21014
*/

function showHiddenDiv(id) {
    "use strict";
    var obj = document.getElementById(id);
    if (obj.style.display === "none") {
        obj.style.display = 'block';
    } else if (obj.style.display === "block") {
        obj.style.display = 'none';
    }
}