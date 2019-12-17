$(document).ready(function () {
    getData();
    $('#recipe').on('change', function () {
        var chooseRecips = $('#recipe').val();
        getRecipes(chooseRecips);
        $('#ruler').show();
    })
    $('#ruler').hide();
    // to get value from decreas button
    $('#increase').on('click',function(){
        var increase = $('#increaseGuest').val();
        increaseNumber(increase);
    })
    // to get value from increase button
    $('#decrease').on('click',function(){
        var decrease = $('#increaseGuest').val();
        decreaseNumber(decrease);
    })
});

// increase guest function
function increaseNumber(increase){
    var add = parseInt(increase) + 1;
    if(add <= 15){
        $('#increaseGuest').val(add);
        computeIncraese(add);
        
    }
}
// decrease guest function
function decreaseNumber(decrease){
    var decrea = parseInt(decrease) - 1;
    if(decrea >= 0){
        $('#increaseGuest').val(decrea);
        computedecraese(decrea);
    }
}
// get number guest 
function  getNubGuest(nubGuest){
    var choose = "";
        choose +=`
            <input type="text" id="increaseGuest" class="form-control text-center" disabled value="${nubGuest}">
        `;
        $('#input').html(choose);
        $('#choose').show();
    }
$('#choose').hide();
// get link url
function getUrl() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
// get data by using ajax
function getData() {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: data => chooseRecips(data.recipes),
        error: () => console.log("connot get data"),
    })
}
// var to store recipes
var allData = [];
// create function to get recipe
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
var oldGuest;
function getRecipes(recip) {
    allData.forEach(ele => {
            if (ele.id == recip) {
            getAllRecipes(ele.name, ele.iconUrl);
            getIngredient(ele.ingredients);
            getInstruction(ele.instructions);
            getNubGuest(ele.nbGuests);
            oldGuest = $('#increaseGuest').val();
            console.log(oldGuest);
        }
    })
}
function updateRecipes(recip) {
    allData.forEach(ele => {
            if (ele.id == recip) {
            // getAllRecipes(ele.name, ele.iconUrl);
            updateIngredient(ele.ingredients);
            // getInstruction(ele.instructions);
            updateNubGuest(ele.nbGuests);
        }
    })
}
// get recipes
function getAllRecipes(getName, getIcon) {
    var result = "";
    result += `
            <div class="col-3"></div>
            <div class="col-3"><h2>${getName}</h2></div>
            <div class="col-3"><img src="${getIcon}" width="150"></div>
            <div class="col-3"></div>
            `;
    $('#result').html(result);
}
// function to get ingredient
function getIngredient(ingredient) {
    var result1 = "";
    ingredient.forEach(item => {
        result1 += `
            <tr>
                <td><img src="${item.iconUrl}" width="50"></td>
                <td>${item.quantity}</td>
                <td>${item.unit[0]}</td>
                <td>${item.name}</td>
            </tr>
        `;
    });
    // var nubGuest = getNubGuest(bGuests) * computeIncraese(add);
    // console.log(nubGuest);
    $('#table').html(result1);
    $('#ingredient').html('Ingredients');
    
}
// update ingredient
var quantitys;
function updateIngredient(ingredient) {
    var result1 = "";
    ingredient.forEach(item => {
        quantitys = item.quantity;
        result1 += `
            <tr>
                <td><img src="${item.iconUrl}" width="50"></td>
                <td>${item.quantity}</td>
                <td>${item.unit[0]}</td>
                <td>${item.name}</td>
            </tr>
        `;
    });
    // var nubGuest = getNubGuest(bGuests) * computeIncraese(add);
    // console.log(nubGuest);
    $('#table').html(result1);
    $('#ingredient').html('Ingredients');
    
}
// function to get instruction 
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
    $('#instruction').html('Instructions');
}
function computeIncraese(increase){
    var result = increase * quantitys;
    console.log(result);
}