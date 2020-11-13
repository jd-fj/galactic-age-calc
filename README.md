# Super Galactic Age Calculator
###### Independent project for Epicodus [11.13.20]
### by Taylor Delph

### **Description:**
Calculate your age and life expectancy on 5 different planets. This project is an exercise in setting up a dev environment from scratch. It's also focused on using a Test Driven Development approach to building business logic.

## Setup and installation instructions

Software Reqirements
1. Homebrew
2. Bash/GitBash
3. Node.js
4. Node Package Manager
3. Code editor like VS Code ([which you can download here](https://code.visualstudio.com/download))

Instructions 

_copy and paste these following commands in your terminal_
1. To install homebrew:

-        $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

2. To instal git:

-        $ brew install git

3. To install Node.js;

-        $ brew install node

4. Clone this project's repo

-        $ cd ~/Desktop
-        $ git clone https://github.com/taylulz/galactic-age-calc.git

5. Find the newly downloaded galactic-age-calc folder on your desktop and drage and drop it into VS Code

6. Open terminal in VS Code (in the top navigation bar choose Terminal->New Terminal). Type the following into the terminal:

-        $ npm install
-        $ npm run start


## Specifications
| Test | Input | Output |
|--------|:------:|:-----:|
| Describe Calculator |||
| Correctly create new object with user's age | age = 30 | expect Earth age = 30 |
| Correctly calculate Mercury age | age = 30 | expect Mercury age =  125 |
| Correctly calculate Venus age | age = 30 | expect Venus age = 48 |
| Correctly calculate Mars age | age = 30 | expect Mars age = 16 |
| Correctly calculate Jupiter age | age = 30 | expect Jupiter age = 3 |
| Correctly take in user's earth life expectancy | age = 30, expectancy = 80 | expect age = 30, expectancy = 80 |
| Correctly calculate number of years left to live | age = 30 expectancy = 80 | expect 50 |
| Correctly calculate earth life expectancy to Mercury years | expectancy = 80 | expect 333 |
| Correctly calculate earth life expectancy to Venus years | expectancy = 80 | expect 129 |
| Correctly calculate earth life expectancy to Mars years | expectancy = 80 | expect 43 |
| Correctly calculate earth life expectancy to Jupiter years | expectancy = 80 | expect 7 |
| Correctly calculate years left to live on Mercury | expectancy = 80 | expect 208 |
| Correctly calculate years left to live on Venus | expectancy = 80 | expect 81 |
| Correctly calculate years left to live on Mars | expectancy = 80 | expect 27 |
| Correctly calculate years left to live on Jupiter | expectancy = 80 | expect 4 |
| Correctly calculate number of years lived past earth life expectancy | age = 90, expectancy = 80 | expect 10|

Psuedo-psuedo code:
1. Create a class that contains a user's earth age
2. Convert earth age into Mercury age (earth age / .24)
3. Convert earth age into Venus age (earth age / .62)
4. Convert earth age into Mars age (earth age / 1.88)
5. Convert earth age into Jupiter age (earth age / 11.86)
6. Take in user's earth life expectancy
7. Calculate # of years left (earth age - life expectancy)
8. Mercury Life expectancy = (earth life expectancy / planet's year conversion)
9. Venus Life expectancy = (earth life expectancy / planet's year conversion)
10. Mars Life expectancy = (earth life expectancy / planet's year conversion)
11. Jupiter Life expectancy = (earth life expectancy / planet's year conversion)
12. Determine years left to live on Mercury 208
13. Determine years left to live on Venus 81
14. Determine years left to live on Mars 27
15. Determine years left to live on Jupiter 4
16. Update earth life expectancy to account if user has lived beyond life expectancy

## Technologies Used

- VS Code

- GitBash

- npm

- Node.js

- ESLint

- Babel

- webpack

- Jest

- Popper.js

- Bootstrap

- HTML

- CSS

## Known Bugs
_No known bugs at this time_

## Legal

Copyright (c) 2020 Taylor Delph

This website is licensed under the MIT license.