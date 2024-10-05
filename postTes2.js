const siswa1 = {
  nama: "Tono",
  usia: 20,
  nilai: [90, 85, 88],
};

const siswa2 = {
  nama: "Tini",
  usia: 22,
  nilai: [78, 82, 85],
};

const mergedStudent = { ...siswa1, ...siswa2 };
mergedStudent.nama = `${siswa1.nama} dan ${siswa2.nama}`;
mergedStudent.usia = (siswa1.usia + siswa2.usia) / 2;
mergedStudent.nilai = [...siswa1.nilai, ...siswa2.nilai];

console.log(mergedStudent);

const FavData = {
  user: {
    id: 1,
    name: "Muhammad Raya Ar Rizki",
    age: 18,
    favorites: {
      books: ["2021", "Lord of The Ring", "Seven Deadly Hollows"],
      movies: ["Jordi to The West", "Koe No Katachi"],
    },
  },
};

const { user } = FavData;

console.log(user.name);
console.log(user.age);
console.log(user.favorites.movies);

const eventL = {
  eventName: "Workshop KSM Android",
  date: "2024-10-10",
  attendees: ["Valtrizt", "Billy"],
};

const newAttendees = ["Muhammad Raya Ar Rizki", "Pak Dengklek"];

function addAttendees(eventArg, newArg) {
  eventArg.attendees = [...eventArg.attendees, ...newArg];
  return eventArg;
}

const updatedEvent = addAttendees(eventL, newAttendees);
console.log(updatedEvent);
