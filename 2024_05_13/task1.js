const RANDOM_IMAGE_URL = 'https://dog.ceo/api/breeds/image/random';
const ALL_BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const getByBreedUrl = (breed) => `https://dog.ceo/api/breed/${breed}/images`
const getBySubBreedUrl = (breed, subBreed) => `https://dog.ceo/api/breed/${breed}/${subBreed}/images`

const header = document.getElementById('header');
const byBreed = document.getElementById('byBreed');
const bySubBreed = document.getElementById('bySubBreed');

const ul = document.getElementById('ul');

async function getImageByBreedAndDraw(breed) {
    try {
        const response = await fetch(getByBreedUrl(breed));
        const data = await response.json();
        byBreed.innerHTML = "";
        const sources = data.message.slice(0, 5);
        sources.forEach(source => {
            const img = document.createElement('img');
            img.src = source;
            img.className = 'imgByBreed';
            byBreed.append(img);
        })
    } catch (error) {
        console.log(error.message);
    }
}




async function getImageBySubBreedAndDraw(breed, subBreed) {
    // debugger;
    try {
        const response = await fetch(getBySubBreedUrl(breed, subBreed));
        const data = await response.json();

        bySubBreed.innerHTML = "";
        const sources = data.message.length > 5 ?
            data.message.slice(0, 5) :
            data.message;
        sources.forEach(source => {
            const img = document.createElement('img');
            img.src = source;
            img.className = 'imgBySubBreed';
            bySubBreed.append(img);
        })
    } catch (error) {
        console.log(error.message);
    }
}






async function typeOfDogs() {
    try {
        const response = await fetch(ALL_BREEDS_URL);
        const data = await response.json();
        const breedsObj = data.message;
        const breeds = Object.keys(breedsObj)
        breeds.forEach(breed => {
            const li = document.createElement('li');
            li.innerText = breed;
            ul.append(li);
            li.addEventListener('click', function () {
                bySubBreed.innerHTML = "";
                getImageByBreedAndDraw(breed);
            })
            const subBreeds = data.message[breed];
            const subUl = document.createElement('ul')
            if (subBreeds.length) {
                // debugger;
                li.append(subUl)
                subBreeds.forEach(subBreed => {
                    const subLi = document.createElement("li");
                    subLi.innerText = subBreed;
                    subUl.append(subLi);
                    subLi.addEventListener('click', function () {
                        getImageBySubBreedAndDraw(breed, subBreed)
                    })

                })

            }

        });

    } catch (error) {
        console.log(error.message);
    }
}

typeOfDogs();



async function getImageAndDraw() {
    // debugger;
    try {
        const response = await fetch(RANDOM_IMAGE_URL);
        const data = await response.json();
        let source = data.message
        const img = document.createElement('img')
        img.src = source;
        img.className = 'img';
        header.append(img);
    } catch (error) {
        console.log(error.message);
    }

}

for (let i = 0; i < 3; i++) {
    getImageAndDraw();
}
