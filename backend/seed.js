const faker = require('faker')

const CandidateModel = require('./src/app/models/Candidate')
const CompanyModel = require('./src/app/models/Company')
const VacancyModel = require('./src/app/models/Vacancy')
const ApplicationModel = require('./src/app/models/Application')

async function createCandidates() {
    let Candidate = new CandidateModel()
    const candidates = []

    while (candidates.length < 20) {
        candidates.push({
            name: faker.name.firstName(),
            cpf: faker.datatype.number(9999999999),
            address: faker.address.streetName(),
            salary: faker.datatype.number(99999)
        })
    }

    const candidatesPromise = candidates.map(candidate => Candidate.create(candidate))

    candidatesIds = await Promise.all(candidatesPromise)
}

async function createCompanies() {
    let Company = new CompanyModel()
    const companies = []

    while (companies.length < 20) {
        companies.push({
            name: faker.company.companyName(),
            cnpj: faker.datatype.number(9999999999),
            address: faker.address.streetName()
        })
    }

    const companiesPromise = companies.map(company => Company.create(company))

    companiesIds = await Promise.all(companiesPromise)
}

async function createVacancies() {
    let Vacancy = new VacancyModel()
    const vacancies = []

    while (vacancies.length < 20) {
        vacancies.push({
            role: faker.name.jobTitle(),
            type: faker.name.jobType(),
            area: faker.name.jobArea(),
            salary: faker.datatype.number(99999),
            quantity: faker.datatype.number(20)
        })
    }

    const vacanciesPromise = vacancies.map(vacancy => Vacancy.create(vacancy))

    vacanciesIds = await Promise.all(vacanciesPromise)
}

async function createApplications() {
    let Application = new ApplicationModel()
    const applications = []

    while (applications.length < 20) {
        applications.push({
            vacancy_id: faker.datatype.number(20),
            candidate_id: faker.datatype.number(60)
        })
    }

    const applicationsPromise = applications.map(application => Application.create(application))

    applicationsIds = await Promise.all(applicationsPromise)
}

createCandidates()
createCompanies()
createVacancies()
createApplications()