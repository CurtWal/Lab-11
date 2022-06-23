'use strict'



// this array is going to hold all of our product objects
let allProducts = [];

// make a array for all the clicks for every object 
let allClicks = [];

//make a array for the amount of times the object has been seen
let timesSeen = [];

// making a max amount of clicks to all images
let maxClicks = 10;
//starting the total amount of clicks from 0
let totalClicks = 0;

// this array is going to hold all of our product names
let productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicon', 'water-can', 'wine-glass'];

// Create a constructor function that creates an object associated with each product, and has the following properties:
function Product(name, path) {
    // Name of the product
    // File path of image
    // Times the image has been shown
    this.timesShown = 0;
    this.timesClicked = 0;
    this.name = name;
    this.path = path;
}
// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

//an algorithm is a step by step list of instructions to be executred
function getRandomImage() {
    // gives me a whole number
    return Math.floor(Math.random() * productNames.length)
}

// get both images
let img_one = document.querySelector('#image-container img:first-child')
let img_two = document.querySelector('#image-container img:nth-child(2)')
let img_three = document.querySelector('#image-container img:nth-child(3)')
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');
let resultsButton = document.getElementById('results-button');


//add event listeners
resultsButton.addEventListener('click', showResults)

// instance variable -> objects

let bag = new Product('bag', './assets/bag.jpg') //'assest'/+ bag.name + '.jpg'
let banana = new Product('banana', './assets/banana.jpg')
let bathroom = new Product('bathroom', './assets/bathroom.jpg')

function constructImages() {


    //let bag0 = new Product(productNames[0],'./assests' + productNames[0] + '.png')// how to get it out of the array


    // i want to make an image for every name in the productname array


    //make this smaller/stop repeating
    // add the src attribute to the image
    img_one.setAttribute('src', bag.path);
    img_one.setAttribute('alt', bag.name);
    img_two.setAttribute('src', banana.path);
    img_two.setAttribute('alt', banana.name);
    img_three.setAttribute('src', bathroom.path);
    img_three.setAttribute('alt', bathroom.name);


    img_one.addEventListener('click', function () {
        trackClicks(bag)
    });
    img_two.addEventListener('click', function () {
        trackClicks(banana)
    });
    img_three.addEventListener('click', function () {
        trackClicks(bathroom)
    });
    timesShown(bag)
    timesShown(banana)
    timesShown(bathroom)
}

// make a function to randomly display image
function displayRandomImage() {
    //this function needs to call the randomizer algorith
}

// make a function to keep track of the times a certain obj was clicked
function trackClicks(product) {
    // need to pass an object to this function



    // IF the object is clicked ->
    //check the timeClicked property against the maxClicks
    if (totalClicks < maxClicks) {
        // THEN incerease the value of timesClicked by one per clicked
        product.timesClicked++
        totalClicks++
        // allClicks.push(product.timesClicked)
        // console.log(product)  

    } else {
        alert("too many clicks");
        //push the amount of clicks for the objects
        allClicks.push(bag.timesClicked, banana.timesClicked, bathroom.timesClicked)
        console.log(allClicks);


    }

    // console.log(product.timesClicked)
    //    console.log(allClicks)
}

// make a function that keeps track oof how many times an image in clicked
function timesShown(product) {
    // we need to pass an obj to this function
    // check if the image is here
    if (product.name === img_one.alt) {
        // IF the image is shown on the document ->
        // THEN increase the value of timesShown by one
        console.log(product.name + ' is on the page')
        product.timesShown++
        console.log(product.timesShown)
    }
    else if (product.name === img_two.alt) {
        // IF the image is shown on the document ->
        // THEN increase the value of timesShown by one
        console.log(product.name + ' is on the page')
        product.timesShown++
        console.log(product.timesShown)
    }
    else if (product.name === img_three.alt) {
        // IF the image is shown on the document ->
        // THEN increase the value of timesShown by one
        console.log(product.name + ' is on the page')
        product.timesShown++
        console.log(product.timesShown)
    }
    else {
        console.log('there is no image here')
    }
    //push the amount of times the object was shown 
    timesSeen.push(product.timesShown)
    console.log(timesSeen)
}
// make a function that display the result on the result div
function displayResults(productsArray) {

    for (let i = 0; i < productsArray.length; i++) {
        let product = productsArray[i]
        //   console.log(product)
        let resultMessage = `this product was click ${product.timesClicked} times
                this product was shown  ${product.timesShown} times
                this product is called ${product.name}
                you can find this product at : ${product.path} !!!`
        // console.log(resultMessage)
        // resultContainer.textContent = resultMessage
        let p = document.createElement('p');
        p.textContent = resultMessage;
        resultContainer.appendChild(p)
    }
    // console.log(productsArray)
}

function showResults() {
    //check to see if the max clicks are met
    if (totalClicks === maxClicks) {
        displayResults(allProducts)
    }
    resultsButton.addEventListener('click', function () {

        alert('Here are your Results!');
        //pull in my canvas element from html
        let canvas = document.getElementById('canvas')

        //next we need to make a chart
        const ctx = canvas.getContext('2d');//making a object to draw 2d

        //create a bar chart that shows the amount of clicks and time shown
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: productNames,//pass array to our label data
                datasets: [{
                    label: '# of Clicks',
                    data: allClicks,//has to match the label data
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
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
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
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

    })


}




// ___EXECUTEABLE CODE___
constructImages()
showResults()



