function volume_sphere(){
  let radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  let volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(2);
  document.getElementById('volume').value = volume;
  return false;
}

window.onload = document.getElementById('myForm').onsubmit = volume_sphere;
