import { faker } from '@faker-js/faker';
import fs from 'fs';


const countries = ["India" , "Japan", "Russia", "Oman", "UK"];
const total  = 1000;

const peopleList = Array.from({length: total}, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    country: faker.helpers.arrayElement(countries),
    level: faker.number.int({max: 100, min: 1}),
    score: faker.number.int({min: 1000, max: 10000})
}))


fs.writeFileSync('public/data.json', JSON.stringify(peopleList, null, 2))