import {
  getAdults,
  getAverageWomenAge,
  getDiabeticMen,
  getTotalDaysInHospital,
} from "./dataFuntctions.js";

const patientsData = (patients) => ({
  nPatients: patients.length,
  nAdults: getAdults(patients),
  nDiabeticMen: getDiabeticMen(patients),
  totalDaysInHospital: getTotalDaysInHospital(patients),
  averageAgeWomen: getAverageWomenAge(patients),
});

export default patientsData();
