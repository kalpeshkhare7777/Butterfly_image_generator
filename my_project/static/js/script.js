
document.addEventListener('DOMContentLoaded', function() {
    var generateBtn = document.getElementById('generateBtn');

    generateBtn.addEventListener('click', function() {

            var img = document.createElement('img');
            
            img.src = 'http://127.0.0.1:8000/generate_butterfly';

            var butterflyImage = document.getElementById('butterflyImage');
            butterflyImage.innerHTML = '';
            butterflyImage.appendChild(img);
     
    });
});
