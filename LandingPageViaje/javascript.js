function travel() {
  var nights = parseInt(document.getElementById('nights').value);
  var flights = document.getElementById('flights');
  var yes = document.getElementById('yes');
  var no = document.getElementById('no');

  if(document.getElementById('nights').value == ""){
    document.getElementById('textResult').style.color = 'red';
    document.getElementById('textResult').innerText = "You have to fill all the fields";
    return false;
    nights.focus();
  }

  var resultNights = 140 * nights;
  if (flights.value == 'oviedo') {
    var resultFlights = 325;
  } else if (flights.value == 'madrid') {
    var resultFlights = 200;
  } else if (flights.value == 'tokyo') {
    var resultFlights = 1200;
  } else {
    var resultFlights = 150;
  }
  if (nights >= 3) {
    resultFlights *= 0.9;
  }

  if (yes.checked = true) {
    var resultCar = nights * 40;
  }
  else if(no.checked = true){
    var resultCar = 0;
  }
  var result = resultNights + resultFlights + resultCar;

  if (nights >= 3) {
    result -= 20;
  } else if (nights >= 7) {
    result -= 50;
  }
  document.getElementById('textResult').style.color = 'black';
  document.getElementById('textResult').innerHTML = result;
}

function NintendoSwitch() {
  document.getElementById('main').style.marginLeft = '-9999px';
  document.getElementById('travel').style.opacity = '1';
  document.getElementById('travel').style.marginLeft = '2%';
}

function back(){
  document.getElementById('main').style.marginLeft = '0px';
  document.getElementById('travel').style.opacity = '0';
}
