

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(image, title, uri)

    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.arr = arr;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        const carouselElement = document.getElementById("carousel")
        const titleElement = document.getElementById("carousel-title")

        if(!carouselElement || !titleElement){
            console.error("Elementos do carrosel não encontrado")
            return;
        }
        
        const item = carousel._arr[Carousel._sequence];

        carouselElement.style.backgroundImage = `url(img/${item.image})`;
        carouselElement.style.backgroundImage = "center";
        carouselElement.style.backgroundSize = "cover";
        carouselElement.style.transition = "background-image 0.5s ease-in-out";

        titleElement.innerHTML = `<a href="${item.uri}"> ${item.title}</a>`

        carousel._sequence = (carousel._sequence +1) % Carousel._size;
    }
};
