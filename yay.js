const counterValueElement = document.getElementById('counterValue');
let counter = 0; 
let x = 0; 
var monkey = [];
var textBox = document.getElementById("myTextBox");
var submitButton = document.getElementById("submitButton");

function handleSubmit() {
  var inputText = textBox.value;
  
  monkey = inputText.split(", ");
  
  for (var i = 0; i < monkey.length; i++) {
    var button = document.getElementById((i + 1).toString());
    if (button) {
      button.innerText = monkey[i];
    }
  }
  console.log(monkey);
}

submitButton.addEventListener("click", handleSubmit);

console.log(monkey);

document.getElementById("1").innerText = monkey[0];
document.getElementById("2").innerText = monkey[1];
document.getElementById("3").innerText = monkey[2];

fetchImage(monkey[x]);
function fetchImage(query) {
    const apiKey = 'f8c72f954a279b0fc10f6797668cfdb18d0e24d2b26b67a4ff34b1577b4bbf40';
    
    const searchUrl = `https://serpapi.com/search.json?api_key=${apiKey}&q=${query}&tbm=isch&ijn=0`;
  
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.images_results[Math.floor(Math.random() * data.images_results.length)].original;
  
        const imageElement = document.getElementById('randomImage');
        imageElement.src = imageUrl;
        imageElement.alt = 'Random Image';
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }
  

  
function handleButtonClick(buttonId) {
    if(buttonId==monkey[x]){
        counter++;
        
    }
    else{
        counter = 0;
    }
    
    counterValueElement.textContent = counter;
    x = Math.floor(Math.random() * 3);
    fetchImage(monkey[x]);
  }

  const button1 = document.getElementById('1');
  button1.addEventListener('click', () => handleButtonClick(monkey[0]));

  const button2 = document.getElementById('2');
  button2.addEventListener('click', () => handleButtonClick(monkey[1]));

  const button3 = document.getElementById('3');
  button3.addEventListener('click', () => handleButtonClick(monkey[2]));


  
  





