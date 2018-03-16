$(document).ready(function () {

    // $("#footer").append($("<link rel='stylesheet' href='footer/css/footer.css' type='text/css'/>"));

    // $('<link>').appendTo('#footer').attr({
    //   rel: 'stylesheet',
    //   href: 'footer/css/footer.css'
    // });

    $.ajax({
        url: "footer/css/footer.css",
        success: function (data) {
            $("<style></style>").appendTo("#footer").html(data);
        }
    });

    $.ajax({
        dataType: "json",
        url: "footer/json/footer.json",
        success: function (data) {
            for (var i = 0; i < data.data.length; i++) {
                console.log(data.data[i]);
                var a = $('<a>').attr({ 'href': 'http://api.jquery.com/' }).text(data.data[i]);
                var li = $('<li/>').addClass('list-inline-item').append(a);
                li.appendTo('.list-inline');
            }
        }
    });
});