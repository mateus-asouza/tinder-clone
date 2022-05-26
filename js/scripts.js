
const photo = document.querySelector('.photo'); 
const photoNameAndAge = document.querySelector('.photo-name-and-age');
const photoBio = document.querySelector('.photo-bio');
const next = () => {
    photo.style.backgroundImage = profiles[0].photo;
    photoNameAndAge.firstElementChild.innerHTML = profiles[0].name;
    photoNameAndAge.lastElementChild.innerHTML = profiles[0].age;
    photoBio.innerHTML = profiles[0].photoBio;
}

const previus = () => {
    photo.style.backgroundImage = profiles[1].photo;
    photoNameAndAge.firstElementChild.innerHTML = profiles[1].name;
    photoNameAndAge.lastElementChild.innerHTML = profiles[1].age;
    photoBio.innerHTML = profiles[1].photoBio;
}