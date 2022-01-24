const houseImgContainer = document.querySelector('.selected-house');
const address = document.querySelector('.address');
const price = document.querySelector('.price');

const nextBtn = document.querySelector('.lni.lni-chevron-right');
const prevBtn = document.querySelector('.lni.lni-chevron-left');

let counter = 0;

fetch('houseInfo.json')
    .then(res => res.json())
    .then(data => {
        const houses = data;

       const houseAddress = localStorage.getItem('houseAddress');
       console.log(houseAddress);

       for(let i = 0; i < houses.length; i++){
           if(houseAddress === houses[i].address){
               const house = houses[i];

               setupHouseImages(house);//ln 31
               address.textContent = house.address;
               price.textContent = house.price;



                //go to next image
                nextBtn.addEventListener('click', function(){
                    counter++;

                    if(counter > house.imgArray.length - 1){
                        counter = 0;
                    }

                    setupHouseImages(house);
                });

                //go to previous image
                prevBtn.addEventListener('click', function(){
                    counter--;

                    if(counter < 0){
                        counter = house.imgArray.length - 1;
                    }

                    setupHouseImages(house);
                });
           }
       }

    })



function setupHouseImages(item){
    houseImgContainer.src = item.imgArray[counter];
}










