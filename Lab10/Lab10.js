'use strict';

function openWindow(dog) {
    let modalWindow = $('#modal-window');
    let dogImage = $('#dog-img');
    let dogName = $('#dog-name');
    let dogSex = $('#dog-sex');
    let dogAge = $('#dog-age');
    let dogPersonality = $('#dog-personality');

    dogImage.attr('src', 'https://usersdogs.dmytrominochkin.cloud' + dog.dogImage);
    dogName.text(dog.title);
    dogSex.text(dog.sex);
    dogAge.text(dog.age);
    dogPersonality.text(dog.description);
    modalWindow.css('display', 'block');
}

function closeWindow() {
    let modalWindow = $('#modal-window');
    modalWindow.css('display', 'none');
}

const getDogs = async function () {
    const dogs = await fetch('https://usersdogs.dmytrominochkin.cloud/dogs');
    if (!dogs.ok) throw new Error('Сталася помилка при отримані даних з серверу');
    return await dogs.json();
};

getDogs()
    .then(dogsData => {
        let mainContainer = $('#main-container');

        dogsData.forEach(function (dog) {
            let dogContainer = $('<div></div>').addClass('dog-container');

            dogContainer.on('click', function () {
                openWindow(dog);
            });

            let info = `
          <div class='img-centring'>
            <img src='https://usersdogs.dmytrominochkin.cloud${dog.dogImage}' class='icon'>
          </div>
          <div class='name-and-sex-info'>
            <div class='name'>${dog.title}</div>
            <div class='sex'>${dog.sex}</div>
          </div>
          `;

            dogContainer.append(info);
            mainContainer.append(dogContainer);
        });
    })
    .catch(error => {
        console.error('Сталася помилка при вставці коду');
    });
