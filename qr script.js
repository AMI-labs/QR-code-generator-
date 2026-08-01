const text = document.getElementById('text');
const qr = document.getElementById('qr');
const btn = document.getElementById('generate');

function generateQR() {
    const value = text.value.trim();
    if (!value) {
        qr.src = '';
        return;
    }
    const data = encodeURIComponent(value);
    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${data}`;
}

btn.addEventListener('click', generateQR);
text.addEventListener('keydown', (e) => { if (e.key === 'Enter') generateQR(); });