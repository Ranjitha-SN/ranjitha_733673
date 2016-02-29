$("#carImage").change(function() {
    var carName = document.getElementById('cname').value;
    var model = document.getElementById('model').value;
    var mileage = document.getElementById('mileage').value;
    var carColor = document.getElementById('colour').value;
    var reader  = new FileReader();
    var imageUrl = false;
    reader.addEventListener("load", function () {
    imageUrl = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
    $('.carlist').html("<li><img src='" + imageUrl + "' /></li><br>")
});