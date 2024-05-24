document.addEventListener('DOMContentLoaded', () => {
    const photoAlbum = document.querySelector('.photo-album');
    const uploadForm = document.getElementById('upload-form');
    const photoUpload = document.getElementById('photo-upload');
    const captionInput = document.getElementById('caption');
    const locationInput = document.getElementById('location');
    const dateInput = document.getElementById('date');

    // Function to display a photo
    const displayPhoto = (photo) => {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;

        const caption = document.createElement('div');
        caption.classList.add('photo-caption');
        caption.textContent = `${photo.caption} - ${photo.location} (${photo.date})`;

        photoDiv.appendChild(img);
        photoDiv.appendChild(caption);

        photoAlbum.appendChild(photoDiv);
    };

    // Event listener for form submission
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const file = photoUpload.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const photo = {
                src: reader.result,
                caption: captionInput.value,
                location: locationInput.value || 'Unknown location',
                date: dateInput.value || 'Unknown date'
            };

            // Display the new photo
            displayPhoto(photo);

            // Reset the form
            uploadForm.reset();
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
});
