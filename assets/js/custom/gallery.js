const path = './data/img/arts/';
const imageFilenames = [
  {file: 'capa.png'},
  {file: 'draculaura.png'},
  {file: 'flcl.png'},
  {file: 'erika_chibizinha.png'},
  {file: 'Nayara.png'},
  {file: 'streamer.png'},
  {file: 'icon jp.png'},
  {skip: true},
  {file: 'icn.png'},
  {file: 'chibi cristally.png'},
  {file: 'ea.png'},
];

// Get all column elements
const columns = document.querySelectorAll ('.column');

// Function to distribute images across columns
function distributeImages (images, columns) {
  images.forEach ((image, index) => {
    if (image.skip) return;
    const divElement = document.createElement ('div');
    const imgElement = document.createElement ('img');
    imgElement.src = path + image.file;
    // Add 'censored' class if the image is censored
    if (image.censored) {
      imgElement.classList.add ('censored');
    }
    divElement.appendChild (imgElement);
    columns[index % columns.length].appendChild (divElement);
  });
}

// Distribute the images
distributeImages(imageFilenames, columns);

document.getElementById('galleryButton').checked = true;

galleryButton.addEventListener ('change', function () {
  // Toggle the 'censor' class on the content div
  document.getElementById('gallery').classList.toggle ('censor');
});
