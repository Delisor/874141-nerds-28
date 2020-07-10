ymaps.ready(function () {
    var myMap = new ymaps.Map("YMapsID", {
        center: [55.76, 37.64],
        zoom: 10
    });


    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/map-marker.png',
        // Размеры метки.
        iconImageSize: [231, 190],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    }),

    myMap.geoObjects.add(myPlacemark)

});

function closePopup() {
    document.querySelector('.sec-popup').style.display = "none";
}

function showPopup() {
    document.querySelector('.sec-popup').style.display = "block";
}

function ValidateForm(mail)
{
    let mail_input = document.querySelector("input[name=email]");

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(mail_input.value.match(mailformat))
    {
        mail_input.classList.remove('invalid');
    }else{

        mail_input.classList.add('invalid');
        event.preventDefault();
    }
}

document.addEventListener('DOMContentLoaded', function(){
    let listItems = document.querySelectorAll('.slide-switcher li');

    let slider1 = document.querySelector('.main-slider .slide1');
    let slider2 = document.querySelector('.main-slider .slide2');
    let slider3 = document.querySelector('.main-slider .slide3');

    listItems.forEach((item, index) => {
        item.addEventListener('click', (event) => {

            listItems.forEach((item2, index2) => {
                item2.classList.remove('selected');
            });

            item.classList.add('selected');


            if(item.classList.contains("slide1")) {
                if(slider1.classList.contains("hide")){
                    slider1.classList.remove('hide');
                }
                slider2.classList.add('hide');
                slider3.classList.add('hide');
            }

            if(item.classList.contains("slide2")) {
                console.log('2');
                if(slider2.classList.contains("hide")){
                    slider2.classList.remove('hide');
                }
                slider1.classList.add('hide');
                slider3.classList.add('hide');
            }

            if(item.classList.contains("slide3")) {
                if(slider3.classList.contains("hide")){
                    slider3.classList.remove('hide');
                }
                slider1.classList.add('hide');
                slider2.classList.add('hide');
            }

        });

    });
});

