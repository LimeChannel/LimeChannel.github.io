let prodType = document.getElementById('prodType')
let radios = document.getElementById('radios')
let checkboxes = document.getElementById('checkboxes')
var price = document.getElementById('price')
var count = document.getElementById('count2')
checkboxes.style.display="none";
radios.style.display = "none";

var prices = {
  prodTypes: [100, 200, 300],
  prodOptions: 
  {
    '0' : 0,
    '1' : 10,
    '2' : 20,
  },
  prodProperties: 
  {
    '0': 1,
    '1': 2,
  }
};

function updatePrice()
{
  console.log("updatePrice")
  var prodPrice = prices.prodTypes[prodType.value]

  if (radios.style.display == "block")
  {
    document.getElementsByName("prodOptions").forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice != undefined) {
        prodPrice += optionPrice;
      }
      console.log(optionPrice)
    }
  });
  }
  
  if (checkboxes.style.display == "block")
  {
    document.getElementsByName("checkbox").forEach(function(checkbox) {
    if (checkbox.checked) {
      let propertyPrice = prices.prodProperties[checkbox.value];
      if (propertyPrice != undefined) {
        prodPrice += propertyPrice;
      }
      console.log(propertyPrice + ',')
    }
  });
  }
  prodPrice *= count2.value
  document.getElementById('price').textContent = ('Цена: ' + prodPrice)
}












window.addEventListener('DOMContentLoaded', function() {
  //Первый калькулятор
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



  //Второй калькулятор
  prodType.addEventListener('click', function (event){
    radios.style.display= (prodType.value == '1'? "block" : "none")
    checkboxes.style.display = (prodType.value == '2'? "block" : "none")
    updatePrice()
  })
  
  document.getElementsByName('prodOptions').forEach( function(radio) {
    radio.addEventListener('click', function(){
      updatePrice();
    })
  })

  document.getElementsByName('checkbox').forEach( function(checkbox) {
    checkbox.addEventListener('click', function(){
      updatePrice();
    })
  })

  count2.addEventListener('change', function(){
    var number = count2.value
    var regex = /^[0-9]+$/
    if (number.match(regex) == null)
      {
          alert('Недопустимые символы в поле')
      }
    else updatePrice()
  })
})








