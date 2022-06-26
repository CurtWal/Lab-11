'use strict';

// put my images in a array
let allProducts = [];


let clicksOnImage = document.getElementById('outsidepic');


let results = document.getElementById('resultsbutton');

// track the number of clicks
let numberOfClicks = [];

//Name of the images
let itemLabels = [];

// get a empty total clicks array
let totalClicks = [];

// get a empty array for the amount of times the image was seen
let timesSeen = [];

// Create a constructor function that creates an object associated with each product, and has the following properties:
let Products = function(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesClicked = 0;
  this.displayed = 0;
  allProducts.push(this);
};

// instance variable -> objects
new Products('bag','assets/bag.jpg');
new Products('banana','assets/banana.jpg');
new Products('bathroom','assets/bathroom.jpg');
new Products('boots','assets/boots.jpg');
new Products('breakfast','assets/breakfast.jpg');
new Products('bubblegum','assets/bubblegum.jpg');
new Products('chair','assets/chair.jpg');
new Products('cthulhu','assets/cthulhu.jpg');
new Products('dog-duck','assets/dog-duck.jpg');
new Products('dragon','assets/dragon.jpg');
new Products('pen','assets/pen.jpg');
new Products('pet-sweep','assets/pet-sweep.jpg');
new Products('scissors','assets/scissors.jpg');
new Products('shark','assets/shark.jpg');
new Products('sweep','assets/sweep.png');
new Products ('tauntaun','assets/tauntaun.jpg');
new Products('unicorn','assets/unicorn.jpg');
new Products('water-can','assets/water-can.jpg');
new Products('wine-glass','assets/wine-glass.jpg');

// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
function randomPic() {
  return Math.floor(Math.random() * allProducts.length);
  
}
//  displays the random image
function displayImages() {
  let imageLeft = randomPic();
  let imageCenter = randomPic();
  let imageRight = randomPic();
//   if the middle and left image are the same change the middle image until they are different
  while (imageCenter === imageLeft) {
    imageCenter = randomPic();

  }

// if the right image is the same as the left and middle image change until its is different then them
  while (imageRight === imageCenter || imageRight === imageLeft) {
    imageRight = randomPic();
    
  }
// get the first img tag from the html doc and place the left image there
  let firstImage = document.getElementById('image1');
  firstImage.src = allProducts[imageLeft].filepath;
  firstImage.alt = allProducts[imageLeft].name;

//   get the second img tag form the html doc and place the middle image there
  let secondImage = document.getElementById('image2');
  secondImage.src = allProducts[imageCenter].filepath;
  secondImage.alt = allProducts[imageCenter].name;
  

//   get the third img tag form the html doc and place the right image there
  let thirdImage = document.getElementById('image3');
  thirdImage.src = allProducts[imageRight].filepath;
  thirdImage.alt = allProducts[imageRight].name;
  
  
}

displayImages();

// make a function that tells the user to click a image if they click outside them
// set 25 clicks as the max clicks and alert the user that they reach the max clicks
function clicks(event) {
  let imageId = event.target.id;
  let imageAlt = event.target.alt;

//   tells the user to click a image
  if (imageId === 'outsidepic') {
    alert('Please click on an image to vote!');
  } 
//   set the max amount of clicks the user can do
  else if (numberOfClicks < 10) {
    for (let i = 0; i < allProducts.length; i++) {
      if(imageAlt === allProducts[i].name) {
        // adds 1 to the image that is clicked
        allProducts[i].timesClicked ++;
        allProducts[i].displayed++;
        // tracks the amount of clicks the user do 
        numberOfClicks++;
      }
        displayImages();
        
        // alerts user when they reach the max clicks
      if(numberOfClicks === 10){
        alert('To many click; Please click results to see!!!')
        return
      }
    }
  }
  localStorage.clear();
  let imgArrayData = JSON.stringify(allProducts);
  localStorage.setItem('itemLabels' , imgArrayData);
  let clickTotal = JSON.stringify(numberOfClicks);
  localStorage.setItem('clicks' , clickTotal);
}


// make a bar chart that displays all the amount of times a image has been clicked and viewed
function updateChart() {
  for (let i = 0; i < allProducts.length; i++) {
    itemLabels.push(allProducts[i].name);
    totalClicks.push(allProducts[i].timesClicked);
    timesSeen.push(allProducts[i].displayed)
  }
}

function makeChart() {
  updateChart();
  let canvas = document.getElementById('chart');

  const ctx = canvas.getContext('2d');

  let chart = new Chart(ctx, {
    type: 'bar',
            data: {
                labels: itemLabels,//pass array to our label data
                datasets: [{
                    label: '# of Clicks',
                    data: totalClicks,//has to match the label data
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of View',
                    data: timesSeen,//has to match the label data
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    }

clicksOnImage.addEventListener('click', clicks);
results.addEventListener('click', makeChart);