// var result = document.getElementById('result')
// var choice = document.getElementById('choice')
// var count = document.getElementById('count')
var prices = {'0': 50, '1': 60, '2':70}

function calculate(form)
{
    
    var amount = form.count.value
    var type = form.type.value
    console.log(prices[type] * amount)

    return false
}