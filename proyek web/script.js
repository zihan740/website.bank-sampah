const scriptURL = 'https://script.google.com/macros/s/AKfycbwBsP67p4IhAtxnjQISO8kBtBpIpcP116ykf92Xp2Oj6clV7IAhB_yJE3n_AR13GwIc_w/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Mencegah reload halaman saat submit

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form),
        });

        if (response.ok) {
            alert("Terima kasih! Pesan Anda telah terkirim.");
            form.reset(); // Mengosongkan form setelah submit sukses
        } else {
            alert("Oops! Terjadi kesalahan saat mengirim pesan.");
            console.error('Response error:', response.statusText);
        }
    } catch (error) {
        alert("Error! Tidak dapat mengirim pesan.");
        console.error('Error!', error.message);
    }
});