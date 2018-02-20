

var body = document.body;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

var color = ('');
var color2 = ('red');

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


if (demo == 4) {
    document.write(color);
} else if (demo < 3) {
    color = 'yellow';
    document.write(color2);
}

