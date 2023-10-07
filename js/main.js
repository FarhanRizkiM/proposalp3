// // Menunggu hingga halaman HTML selesai dimuat
// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         // Mengambil data pengguna untuk Faisal dari file JSON
//         const responseFaisal = await fetchUserData('../json/dt-faisal.json', 'Faisal');

//         // Mengambil data pengguna untuk Farhan dari file JSON
//         const responseFarhan = await fetchUserData('../json/dt-farhan.json', 'Farhan');

//         // Menginputkan elemen HTML dengan data pengguna
//         populateUserData(responseFaisal, 'Faisal');
//         populateUserData(responseFarhan, 'Farhan');
//     } catch (error) {
//         console.error('Error:', error);
//     }
// });

// // Fungsi untuk mengambil data pengguna dari file JSON
// async function fetchUserData(jsonUrl, username) {
//     // Mengambil data dari URL JSON menggunakan fetch
//     const response = await fetch(jsonUrl);

//     // Mengecek apakah pengambilan data berhasil atau gagal
//     if (!response.ok) {
//         throw new Error(`Failed to fetch data for ${username}`);
//     }

//     // Mengembalikan data JSON setelah diambil
//     return await response.json();
// }

// // Fungsi untuk mengisi elemen HTML dengan data pengguna
// function populateUserData(userData, username) {
//     // Memilih elemen HTML berdasarkan ID
//     const npmElement = document.getElementById(`npm-${username}`);
//     const namaElement = document.getElementById(`nama-${username}`);
//     const kelasElement = document.getElementById(`kelas-${username}`);
//     const emailElement = document.getElementById(`email-${username}`);

//     // Mengisi elemen HTML dengan data yang diambil dari file JSON
//     npmElement.textContent = userData.NPM;
//     namaElement.textContent = userData.Nama;
//     kelasElement.textContent = userData.Kelas;
//     emailElement.textContent = userData.Email;
// }

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../json/dt-faisal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const namaElement = document.getElementById("npm-faisal");
        const kelasElement = document.getElementById("nama-faisal");
        const npmElement = document.getElementById("kelas-faisal");
        const kontakElement = document.getElementById("email-faisal");


        // Populate HTML elements with user data
        namaElement.textContent = userData.NPM;
        kelasElement.textContent = userData.Nama;
        npmElement.textContent = userData.Kelas;
        kontakElement.textContent = userData.Email;

    } catch (error) {
        console.error('Error:', error);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../json/dt-farhan.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const namaElement = document.getElementById("npm-farhan");
        const kelasElement = document.getElementById("nama-farhan");
        const npmElement = document.getElementById("kelas-farhan");
        const kontakElement = document.getElementById("email-farhan");


        // Populate HTML elements with user data
        namaElement.textContent = userData.NPM;
        kelasElement.textContent = userData.Nama;
        npmElement.textContent = userData.Kelas;
        kontakElement.textContent = userData.Email;
    } catch (error) {
        console.error('Error:', error);
    }
});