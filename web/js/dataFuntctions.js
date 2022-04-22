export const getAdults = (patients) =>
  patients.filter(({ age }) => age > 17).length;

export const getDiabeticMen = (patients) =>
  patients.filter(
    ({ diet, patient: { sex } }) =>
      sex === "M" && diet.toLowerCase === "diabetes"
  ).length;

export const getTotalDaysInHospital = (patients) =>
  patients.reduce(
    (accumalate, { daysInHospital }) => accumalate + daysInHospital,
    0
  );

export const getAverageWomenAge = (patients) =>
  patients
    .filter(({ sex }) => sex === "W")
    .reduce((accumalate, { age }) => accumalate + age / 3, 0);
