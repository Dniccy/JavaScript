function isValidImageUrl(url) {
  // Basic check for image file extension
  return /\.(jpeg|jpg|png|gif|webp|bmp)$/i.test(url);
}

function addImageToGallery() {
  const imageUrl = document.getElementById('imageUrl').value.trim();

  // Validate URL pattern and image extension
  if (!imageUrl || !isValidImageUrl(imageUrl)) {
    alert('Please enter a valid image URL (e.g., ending in .jpg, .png)');
    return;
  }

  // Try to load the image to confirm it exists
  const testImage = new Image();
  testImage.onload = () => {
    const gallery = document.getElementById('gallery');

    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = imageUrl;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.onclick = () => gallery.removeChild(galleryItem);

    galleryItem.appendChild(img);
    galleryItem.appendChild(removeBtn);
    gallery.appendChild(galleryItem);

    document.getElementById('imageUrl').value = '';
  };

  testImage.onerror = () => {
    alert('Image could not be loaded. Please check the URL.');
  };

  testImage.src = imageUrl;
}

document.getElementById('addImageBtn').addEventListener('click', addImageToGallery);


