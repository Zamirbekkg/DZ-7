
async function sendPhoto() {
    const botToken =  '7022297122:AAF1pN354Mo-jSL6kk8eAB4DE2v3gFoQvAg';
    const chatId = '-4279815147';

    const photoInput = document.getElementById('photo');
    const captionInput = document.getElementById('caption');
    const responseElement = document.getElementById('response');

    const file = photoInput.files[0];
    const caption = captionInput.value;

    if (!file) {
        responseElement.textContent = 'Please select a photo.';
        return;
    }

    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('photo', file);
    formData.append('caption', caption);

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
            method: 'POST',
            body: formData,
        });
        const result = await response.json();
        if (result.ok) {
            responseElement.textContent = 'Photo sent successfully!';
        } else {
            responseElement.textContent = 'Error sending photo: ' + result.description;
        }
    } catch (error) {
        responseElement.textContent = 'Error: ' + error.message;
    }
}