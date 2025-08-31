
const preview = document.getElementById('preview');
const thumbnails = document.getElementsByClassName('thumb');

const updateImage = (event) => {
  const clickedThumb = event.target;

  // Update the preview image
  preview.src = clickedThumb.src.replace('150x100', '600x400');

  // Remove 'active' class from all thumbnails
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove('active');
  }

  // Add 'active' class to the clicked thumbnail
  clickedThumb.classList.add('active');
};

// Attach event listener to each thumbnail
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', updateImage);
}
