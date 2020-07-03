let button = document.getElementsById('button');

function volumeSphere(e){
  let radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  let volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(2);
  document.getElementById('volume').value = volume;
}

button.addEventListener('click', volumeSphere());
