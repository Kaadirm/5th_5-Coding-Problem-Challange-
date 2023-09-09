/*
------   1   -------

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

SOLUTION

// century = (year) => Math.floor((year / 100)-0.0001 + 1 )

century = (year) => Math.ceil(year/100)

------   2   -------

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

SOLUTION

const humanYearsCatYearsDogYears = function(hY) {
  let catYears = 0;
  let dogYears = 0;
  if (hY === 1){
    catYears = 15;
    dogYears = 15;
  }
  else if(hY === 2){
    catYears = 24;
    dogYears = 24
  }
  else if(hY > 2){
    catYears = (hY-2) * 4 + 24
    dogYears = (hY-2) * 5 + 24
  }
  
  return [hY,catYears,dogYears];
}


------   3   -------

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

SOLUTION

function points(games) {
    let totalPoint = 0
    let x
    let y
    for(let i = 0; i < games.length; i++){
    x = games[i].split(":")[0];
    y = games[i].split(":")[1];
    if (x > y){
        totalPoint += 3
    }
    else if(x === y){
        totalPoint += 1
    }
  } 
  return totalPoint
}

------   4   -------

Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

SOLUTION 

function sameCase(a, b){
    if(!(/[a-z]/i.test(a) && /[a-z]/i.test(b))){
        return -1
    }
    else if(/[a-z]/.test(a)&&/[a-z]/.test(b)||/[A-Z]/.test(a)&&/[A-Z]/.test(b)){
        return 1
    }
    else{
    return 0
    }
}

------   5   -------

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12


SOLUTION

/*const quarterOf = (month) => {
    switch(month){
       case 1:
       case 2:
       case 3:
        return 1;
        break;
       case 4:
       case 5:
       case 6:
        return 2;
        break;
       case 7:
       case 8:
       case 9:
        return 3;
        break;
       case 10:
       case 11:
       case 12:
        return 4;
        break;
    }
}*/

const quarterOf = (month) => {
  return Math.ceil(month / 3)
}

*/