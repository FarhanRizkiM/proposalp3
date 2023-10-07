document.addEventListener("DOMContentLoaded", () => {
    // Data JSON proposal
    const proposalData = {
        "Judul": "",
        "Konsep": "Parkir via online menggunakan QRIS",
        "Untuk": "Daerah Kampus ULBI",
        "Logo": "",
        "Prodi": "Diploma IV Teknik Informatika Kampus Universitas Logistik Dan Bisnis Internasional 2023"
    };

    // Memilih elemen HTML untuk menampilkan data
    const judulElement = document.getElementById("judul-proposal");
    const konsepElement = document.getElementById("konsep-proposal");
    const untukElement = document.getElementById("untuk-proposal");
    const logoElement = document.getElementById("logo-proposal");
    const prodiElement = document.getElementById("prodi-proposal");

    // Menampilkan data JSON pada elemen HTML
    judulElement.textContent = proposalData.Judul;
    konsepElement.textContent = proposalData.Konsep;
    untukElement.textContent = proposalData.Untuk;
    logoElement.src = proposalData.Logo;
    prodiElement.textContent = proposalData.Prodi;
});
