import { Specialist } from "@src/pages/specialistsSlice";

const names = ["John", "Jane", "David", "Emma", "Michael", "Olivia", "William", "Sophia", "James", "Isabella"];
const surnames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
const specializations = ["Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", "Hematology", "Neurology", "Orthopedics", "Pediatrics", "Psychiatry", "Urology"];
const imgUrls = ['']

export const specialists: Specialist[] = Array.from({length: 1500}, () => ({
    name: `${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * names.length)]}`,
    specialization: specializations[Math.floor(Math.random() * specializations.length)],
    imgUrl: imgUrls[0],
})); 

