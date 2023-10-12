var prices = {'0': 50, '1': 100, '2':200}

function calculate(form)
{
    var regex = /^[0-9]+$/
    var amount = form.count.value
    var type = form.type.value
    console.log(form.count.value.match(regex))
    if (amount.match(regex) == null)
    {
        console.log(form.count.value.match(regex))
        alert('Недопустимые символы в поле')
    }
    else
    {
        document.getElementById('result').innerText='Итог: ' + prices[type] * amount
    }

    return false
}