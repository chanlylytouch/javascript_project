$(document).ready(function () {
    // const url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    // $.ajax({
    //     dataType: 'json',
    //     url: url,
    //     success: function (data) {
    //         var ressult = "";
    //         data.recipes.forEach(element => {
    //             ressult += `
    //                 <div class="col-6">
    //                     ${element.name}<br>
    //                     <img src="${element.iconUrl}" style=" width: 40px;
    //                     height: 40px;">
    //                 </div>
    //             `
    //         });
    //         $('#result').append(ressult);
    //     },
    //     error: function () {
    //         console.error("error");
    //     }
    // })
    $('#chooseMe').on('change', function () {
        var recipes = $('#chooseMe').val();
        chooseRecipes(recipes);
    })
})
function getData() {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => getRecipes(data),
        error: () => getError(),
    })
}
function getError() {
    console.log('error');
}
function getRecipes(datas) {
    datas.recipes.forEach(element => {
        // console.log(element);
        getAllRecipe(element);
    });
}
function getUrl() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
function getAllRecipe(reci) {
    console.log(reci.name);
    var result = "";
    result += `
        <div class="col-3"></div>
        <div class="col-3"><h3>${reci.name}</h3></div>
        <div class="col-3"><img src="${reci.iconUrl}></div>
        <div class="col-3"></div>
    `;
    $('#result').html(result);
}
function chooseRecipes(recip) {
    switch (parseInt(recip)) {
        case 0:
            avocadoShake();
            // console.log('case 1');
            break;
        case 1:
            FrenchCreps();
            // console.log('case 2');
            break;
    }
}
function FrenchCreps() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function (data) {
            var result = "";
            data.recipes.forEach(element => {
                if (element.id == 1) {
                    // console.log(element);
                    result += `
                    <div class="col-3"></div>
                    <div class="col-3"><h3>${element.name}</h3></div>
                    <div class="col-3"><img src="${element.iconUrl}" width="150" height="150"></div>
                    <div class="col-3"></div>                   
                `;
                var show = "";
                    show +=`
                    <tr>
                        <td>${element.instructions}</td>                    
                    </tr>
                    `;
                    $('#result2').html(show);
                    var display = "";
                    element.ingredients.forEach(ele => {
                        // console.log(element);
                        display += `
                            <tr>
                                <td><img src="${ele.iconUrl}" width="25" class="img-fluid"></td>
                                <td>${ele.quantity}</td>
                                <td>${ele.unit[0]}</td>
                                <td>${ele.name}</td>
                            </tr>
                        `
                    });
                    $('#result1').html(display);
                }
            });
            $('#result').html(result);
        }

    })
}
function avocadoShake() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function (data) {
            var result = "";
            data.recipes.forEach(element => {
                if (element.id == 0) {
                    // console.log(element);
                    result += `
                    <div class="col-3"></div>
                    <div class="col-3"><h3>${element.name}</h3></div>
                    <div class="col-3"><img src="${element.iconUrl}" width="150" height="150"></div>
                    <div class="col-3"></div>
                `;
                var show = "";
                    show +=`
                    <tr>
                        <td>${element.instructions}</td>                    
                    </tr>
                    `;
                    $('#result2').html(show);
                    var display = "";
                    element.ingredients.forEach(ele => {
                        // console.log(element);
                        display += `
                            <tr>
                                <td><img src="${ele.iconUrl}" width="25" class="img-fluid"></td>
                                <td>${ele.quantity}</td>
                                <td>${ele.unit[0]}</td>
                                <td>${ele.name}</td>
                            </tr>
                        `
                    });
                    $('#result1').html(display);
                }
            });
            $('#result').html(result);
        }

    })
}