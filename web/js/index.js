import patientsData from "./patientsData.js";

const patients = [
  {
    patient: {
      name: "Luis",
      age: 25,
      sex: "M",
    },
    daysInHospital: 3,
    diet: "Low fiber",
  },
  {
    patient: {
      name: "Marta",
      age: 56,
      sex: "W",
    },
    daysInHospital: 5,
    diet: "Diabetes",
  },
  {
    patient: {
      name: "Julia",
      age: 38,
      sex: "W",
    },
    daysInHospital: 1,
    diet: "Salt free",
  },
  {
    patient: {
      name: "Esteban",
      age: 40,
      sex: "M",
    },
    daysInHospital: 3,
    diet: "Diabetes",
  },
  {
    patient: {
      name: "Arturo",
      age: 17,
      sex: "M",
    },
    daysInHospital: 2,
    diet: "Low fiber",
  },
  {
    patient: {
      name: "Isabel",
      age: 63,
      sex: "W",
    },
    daysInHospital: 6,
    diet: "Salt free",
  },
];
console.table(patientsData(patients));
