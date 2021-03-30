# Employee Salary Calculator

## Description

Calculate the amount to pay with a given week of worked hours, using the json database that have the hourly rates based
on day of the week and section of the day

## Project

This project use as infrastructure the pattern of
design [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design)
to maintain the business logic decoupled from entry points like command line, and having the core logic protected from
any change of third parties this makes the software more scalable in the future and for the development flow use tdd to
secure every step in development.

## Getting Started

You only need the following steps:

* Install dependencies with `yarn | npm install`
* Compile the project with `yarn build | npm run build`
* Run the software with `yarn start | npm run start` and an input argument `input=`
  with the format `$name=$day$startAtTime-$endAtTime[,]...`. Or start it with the example data with
  command `yarn start:example | npm run start:example`

### Formats

Time format: militar hour format, ex `07:00-24:00`

Days

* MO: Monday
* TU: Tuesday
* WE: Wednesday
* TH: Thursday
* FR: Friday
* SA: Saturday
* SU: Sunday

Example inputs

* `input=RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00`
* `input=ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

*Enter an incorrect format will throw an error in the console*
 