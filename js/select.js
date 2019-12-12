$(document).ready(function () {
    getData();
    $('#recipe').on('change', function () {
        var chooseRecips = $('#recipe').val();
        getRecipes(chooseRecips);
    })
});
function getUrl() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
function getData() {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: data => chooseRecips(data.recipes),
        error: () => console.log("connot get data"),
    })
}
var allData = [];
function chooseRecips(recipe) {
    allData = recipe;
    var option = "";
    recipe.forEach(element => {
        option += `
            <option value="${element.id}">${element.name}</option>
        `;
    });
    $('#recipe').append(option);
}
function getRecipes(recip) {
    allData.forEach(ele => {
        if (ele.id == recip) {
            getAllRecipes(ele.name, ele.iconUrl);
            getIngredient(ele.ingredients);
            getInstruction(ele.instructions);
        }
    })
}
function getAllRecipes(getName, getIcon) {
    var result = "";
    result += `
            <div class="col-3"></div>
            <div class="col-3"><h2>${getName}</h2></div>
            <div class="col-3"><img src="${getIcon}" width="200"></div>
            <div class="col-3"></div>
            `;
    $('#result').html(result);
}
function getIngredient(ingredient) {
    var result1 = "";
    ingredient.forEach(item => {
        result1 += `
                <tr>
                    <td><img src="${item.iconUrl}" width="100"></td>
                    <td>${item.quantity}</td>
                    <td>${item.unit[0]}</td>
                    <td>${item.name}</td>
                </tr>
            `;
    });
    $('#table').html(result1);
}
function getInstruction(instruction){
    var result = "";
    var splitStep = instruction.split('<step>');
        for(let i = 1; i < splitStep.length; i++){
            result +=`
                <h5 class = "text-primary">Step: ${i}</h5>
                <p>${splitStep[i]}</p>
            `
        }
    $('#table1').html(result);
}