# Employee Salary Calculator

## Description

Calculate the amount to pay with a given week of worked hours, using the json database that have the hourly rates based
on day of the week and section of the day

## Project

This project use as infrastructure the pattern of
design [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design)
to maintain the business logic decoupled from entry points like command line, and having the core logic protected from
any change of third parties this makes the software more scalable in the future.

## Getting Started

TO run the project just need to use the command `yarn start | npm run start` with an input argument `input=`
with the format `$name=$day$startAtTime-$endAtTime[,]...`.

the time is a militar hour format, ex `07:00-24:00`

The available format for day inputs are:

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
 