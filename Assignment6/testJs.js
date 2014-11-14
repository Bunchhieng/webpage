function createTable() {
    var pOne, pTwo, pThree, pFour, tableElem, rows, cols;

    pOne = document.getElementById('pOne').value;
    pTwo = document.getElementById('pTwo').value;
    pThree = document.getElementById('pThree').value;
    pFour = document.getElementById('pFour').value;

    var $cols = pTwo - pOne;
    var $rows = pFour - pThree;
    var currentDiv = document.getElementById('forTable');
    if (pOne == "" || pTwo == "" || pThree == "" || pFour == "") {
        alert("Please enter all four numbers.");
    } else {
        tableElem = document.createElement('table');
        tableElem.className = 'table table-bordered';

        // Create rows; pThree is starting point
        for (var i = pThree; i <= pFour; i++) {
            //Create tr tags
            rows = document.createElement('tr');
            // Create columns
            for (var j = pOne; j <= pTwo; j++) {
                // Create td tags
                cols = document.createElement('td');
                // At the first row
                if (i == pThree) {
                    // At the first row && first column
                    if (j == pOne) {
                        cols.appendChild(document.createTextNode(' '));
                    } else {
                        cols.appendChild(document.createTextNode(j));
                    }

                } else {
                    rows.appendChild(document.createTextNode(i));
                }

                rows.appendChild(cols);
            }
            tableElem.appendChild(rows);
        }
        currentDiv.appendChild(tableElem);

    }
}