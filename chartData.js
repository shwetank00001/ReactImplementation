import fs from 'fs';
import { faker } from '@faker-js/faker';


const total = 11;
const namesArray = ["Shwetank", "Akshat", "Ashutosh", "Prashun", "Aditya", "Pradhumn", "Arjun", "Asmit", "Naman", "Avinash", "Amit"]

const data = Array.from({length: total}, () => ({
    name: faker.helpers.arrayElement(namesArray),
    salary: faker.number.int({max: 2000000, min: 1300000})
}))

fs.writeFileSync('public/chartData.json', JSON.stringify(data, null, 2))