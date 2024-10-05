const daftarBuku = [
  {
    judul: "Belajar JavaScript",
    penulis: "John Doe",
    penerbit: "Gramedia",
    genre: "Pendidikan",
  },
  {
    judul: "Petualangan si Kancil",
    penulis: "Budi Santoso",
    penerbit: "Erlangga",
    genre: "Cerita Anak",
  },
  {
    judul: "Kotlin untuk Pemula",
    penulis: "Siti Aminah",
    penerbit: "Gramedia",
    genre: "Teknologi",
  },
  {
    judul: "Pendidikan Karakter",
    penulis: "Rina Yulia",
    penerbit: "Pustaka Cendekia",
    genre: "Sosial",
  },
  {
    judul: "Menguasai Algoritma",
    penulis: "David Smith",
    penerbit: "Oxford University Press",
    genre: "Teknologi",
  },
];

const bukuBaru = {
  judul: "Malin Kundang",
  penulis: "Timoty Ronal",
  penerbit: "Argo Ngawi jesgejes",
  genre: "Cerita Rakyat",
};

daftarBuku.push(bukuBaru);
console.log(daftarBuku);
daftarBuku.map((value) => {
  value.penerbit === "Gramedia" ? console.log(value) : null;
});

const idol = {
  name: "Guru Gembul",
  placeOfBirth: "Jawa",
  job: "Youtuber, Teacher",
  age: "40",
};

console.log(
  `Saya memiliki seorang idola bernama ${idol.name} yang lahir di ${idol.placeOfBirth} dan berprofesi sebagai ${idol.job}. Kini ${idol.name} berumur ${idol.age} tahun.`
);

const array1 = [1, 4, 7, 2, 8, 9, 3, 0];
const array2 = [34, 6, 87, 2, 9, 0, 3];
const array3 = [-9, 8, 0, 12, 5, 9, 3];

const permainanKecil = (array, variableName) => {
  console.log(variableName);
  array.map((value) => {
    value % 3 == 0 ? console.log("hihi") : console.log(value);
  });
};

permainanKecil(array3, "array3");
