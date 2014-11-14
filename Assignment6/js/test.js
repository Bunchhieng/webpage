/*

    File: /~bsoth/public_html/assignment6/js/test.js
    91.461 Assignment 6: Creating an interactive dyncamic table
            Bunchhieng Soth, Umass Lowell Computer Science, Bunchhieng_soth@student.uml.edu
            Created on 10/20/2014 

    I work with Tak to solve this algorithm.
*/


function createTable() {

    // get four integers from user input
    var pOne = parseInt(document.getElementById("pOne").value);
    var pTwo = parseInt(document.getElementById("pTwo").value);
    var pThree = parseInt(document.getElementById("pThree").value);
    var pFour = parseInt(document.getElementById("pFour").value);
    var oString = "",
        rowHTML;

    var nRows = pFour - pThree,
        nCols = pTwo - pOne;

    // Check if input is negative and not integer
    if (pOne < 1 || pTwo < 1 || pThree < 1 || pFour < 1 || isNaN(pOne) || isNaN(pTwo) || isNaN(pThree) || isNaN(pFour) || pOne == null || pTwo == null || pThree == null || pFour == null) {

        document.getElementById('ppFour').innerHTML = "<p style='color:red;font-size:15px;font-weight:900;'>Please input values.</p>";
    }

    if (pOne > pTwo || pThree > pFour) {
        document.getElementById('ppFour').innerHTML = "<p style='color:red;font-size:15px;font-weight:900;'>Starting points must be less than ending points.</p>";
    }

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");


    // creating all cells
    for (var i = pOne, ii = pTwo + 1; i <= ii; ++i) {
        // creates a table row
        var row = document.createElement("tr");
        for (var j = pThree, jj = pFour + 1; j <= jj; ++j) {
            // creates a cell
            var cell = document.createElement("td");
            var cellText;

            if (i == pOne && j == pThree)
                cellText = document.createTextNode("");
            else if (i == pOne)
                cellText = document.createTextNode(j - 1);
            else if (j == pThree)
                cellText = document.createTextNode(i - 1);
            else
                cellText = document.createTextNode((i - 1) * (j - 1));

            // add the text to cell
            cell.appendChild(cellText);
            // add the cell to row
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.getElementById('forTable').appendChild(tbl);
    tbl.setAttribute("id", "tb");
}


// clear out the form with reset button
$(document).ready(function () {
    $('#reset').click(function () {
        // find the closest to form and type name value
        $(this).closest('form').find("input[type=number], textarea").val("");
        // remove table
        $('#tb').remove();
        $('#ppFour').empty();
    });

    // count the number of submits
    var count = 0;
    $('.form-horizontal').submit(function () {
        count++;
        if (count >= 2) {
            $('#tb').remove();
        }
    });
});