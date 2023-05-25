'use strict'

function openWindow(dog) {
    let modalWindow = document.getElementById('modal-window');
    let dogImage = document.getElementById('dog-img');
    let dogName = document.getElementById('dog-name');
    let dogSex = document.getElementById('dog-sex');
    let dogAge = document.getElementById('dog-age');
    let dogPersonality = document.getElementById('dog-personality');

    dogImage.src = 'https://usersdogs.dmytrominochkin.cloud' + dog.dogImage;
    dogName.textContent = dog.title;
    dogSex.textContent = dog.sex;
    dogAge.textContent = dog.age;
    dogPersonality.textContent = dog.description;
    modalWindow.style.display = 'block';
}
function closeWindow() {
    let modalWindow = document.getElementById('modal-window');
    modalWindow.style.display = 'none';
}

const getDogs = async function () {
    const dogs = await fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
    if (!dogs.ok) throw new Error('Сталася помилка при отримані даних з серверу')
    return await dogs.json()
}
getDogs()
    .then(dogsData => {
        let mainContainer = document.getElementById('main-container');

        dogsData.forEach(function (dog) {
            let dogContainer = document.createElement('div');
            dogContainer.classList.add('dog-container');

            dogContainer.onclick = function () {
                openWindow(dog);
            };

            let info = `
          <div class='img-centring'>
            <img src='https://usersdogs.dmytrominochkin.cloud${dog.dogImage}' class='icon'>
          </div>
          <div class='name-and-sex-info'>
            <div class='name'>${dog.title}</div>
            <div class='sex'>${dog.sex}</div>
          </div>
          `;

            dogContainer.insertAdjacentHTML('beforeend', info);
            mainContainer.appendChild(dogContainer);
        });
    })
    .catch(error => {
        console.error('Сталася помилка при вставці коду');
    });

