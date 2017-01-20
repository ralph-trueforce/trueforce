/**
 * Created by root on 11/28/16.
 */
function vertical_menu() {
    var vertical = document.getElementById('vmenu').style;
    vertical.display = "block";
}

function hide_vertical_menu() {
    var vertical = document.getElementById('vmenu').style;
    vertical.display = "none";
}

var QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }

    if (typeof query_string.q === "undefined") {
        document.getElementById("email0").style.display = "none";
        document.getElementById("email1").style.display = "none";
    } else {
        window.location.hash = "#tf-cloud-contact";
        document.getElementById("email" + query_string.q).style.display = "block";
    }

    return query_string;
}();