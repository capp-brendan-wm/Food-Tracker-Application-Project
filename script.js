function addFoods() {
    var name = $('#name').val();
    var bd = $('#bd').val();
    var ed = $('#ed').val();
    var des = $('#des').val();

    $('#name').val();
    $('#bd').val();
    $('#ed').val();
    $('#des').val();

    var foodExpiration = Date.parse(ed);
    var today = new Date();
    var currentDate = Date.parse(today);

    if (currentDate > foodExpiration - 259200000) {
        $('#savedFoods').append('<tr style="background-color: red"><td>' + name + '</td><td>' + bd + '</td><td>' + ed + '</td><td>' + des + '</td></tr>');
    }
    else {
        $('#savedFoods').append('<tr><td>' + name + '</td><td>' + bd + '</td><td>' + ed + '</td><td>' + des + '</td></tr>');
    }
}