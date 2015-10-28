function AddData() {
    var x = document.getElementById("Buy Date").value;
    var y = document.getElementById("name").value;
    var letters = '/^[a-zA-Z]+$/';
    if ((parseInt(x) != (x)) && (y == parseInt(y))) {
        alert("Wrong Value Entered");
    } else {
        var rows = "";
        var name = document.getElementById("name").value;
        var bd = document.getElementById("Buy Date").value;
        var ed = document.getElementById("Expiration Date").value;
        var des = document.getElementById("description").value;

        rows += "<td>" + name + "</td><td>" + bd + "</td><td>" + ed + "</td><td>" + des + "</td>";
        var tbody = document.querySelector("#List tbody");
        var tr = document.createElement("tr");

        tr.innerHTML = rows;
        tbody.appendChild(tr);
    }
}

function ResetForm() {
    document.getElementById("Food").reset();
    document.getElementById("data table").reset();
}

    if () {}

