$(document).ready(function () {
    const url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function (data) {
            var ressult = "";
            data.recipes.forEach(element => {
                ressult += `
                    <div class="col-6">
                        ${element.name}<br>
                        <img src="${element.iconUrl}" style=" width: 40px;
                        height: 40px;">
                    </div>
                `
            });
            $('#result').append(ressult);
        },
        error: function () {
            console.error("error");
        }
    })
})