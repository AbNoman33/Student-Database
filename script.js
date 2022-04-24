let student_1 = [

{name: "Arif", roll: 2, age: 10, class:03, gender:"Male", location: "Mirpur", admission_fees: 500},
{name: "Belal", roll: 3, age: 11, class:04,gender:"Male", location: "Mohammadpur", admission_fees: 600},
{name: "Sumi", roll: 4, age: 12, class:05,gender:"Female", location: "Azimpur", admission_fees: 700},
{name: "Rajib", roll: 5, age: 13, class:06,gender:"Male", location: "Uttara", admission_fees: 800},
{name: "Kalam", roll: 6, age: 14, class:07,gender:"Male", location: "Badda", admission_fees: 900},
{name: "Moni", roll: 7, age: 15, class:08, gender:"Female",location: "Mirpur", admission_fees: 950},
{name: "Harun", roll: 8, age: 16, class:09,gender:"Male", location: "Tejgaon", admission_fees: 1000},
{name: "Rahim", roll: 9, age: 17, class:10, gender:"Male",location: "Nilkhet", admission_fees: 1200},
{name: "Sabbir", roll: 10, age: 18, class:11,gender:"Male", location: "Chittagong", admission_fees:1250},
{name: "Sajal", roll: 11, age: 19, class:12,gender:"Male", location: "Rajshahi", admission_fees: 1300},
{name: "Sheuli", roll: 12, age: 20, class:02,gender:"Female", location: "Sylhet", admission_fees: 1350},
{name: "Jahanara", roll: 13, age: 21, class:03,gender:"Female", location: "Mirpur", admission_fees: 1400},
{name: "Atik", roll: 14, age: 22, class:04, gender:"Male",location: "Kochukhet", admission_fees: 1500},
{name: "Mamun", roll: 15, age: 23, class:05,gender:"Male", location: "Farmgate", admission_fees: 1550},
{name: "Karim", roll: 16, age: 24, class:06,gender:"Male", location: "Mirpur", admission_fees: 1600},
{name: "Rupom", roll: 17, age: 25, class:07,gender:"Male", location: "Kallyanpur", admission_fees: 1700},
{name: "Sabrina", roll: 18, age: 26, class:08,gender:"Female", location: "Azimpur", admission_fees: 1800},
{name: "Jasim", roll: 19, age: 27, class:09,gender:"Male", location: "Uttara", admission_fees: 1900},
{name: "Tipu", roll: 20, age: 28, class:10, gender:"Male",location: "Nilkhet", admission_fees: 2000},
{name: "Zerin", roll: 21, age: 29, class:11, gender:"Female",location: "Badda", admission_fees: 2100},
{name: "Rana", roll: 22, age: 30, class:12, gender:"Male",location: "Jamalpur", admission_fees: 2200},
{name: "Anna", roll: 23, age: 31, class:01, gender:"Female",location: "Farmgate", admission_fees: 2300},
{name: "Miraj", roll: 24, age: 32, class:02, gender:"Male",location: "Uttara", admission_fees: 2400},
{name: "Sakib", roll: 25, age: 33, class:03,gender:"Male", location: "Rampura", admission_fees: 2500},
{name: "Rumana", roll: 26, age: 34, class:04,gender:"Female", location: "Farmgate", admission_fees: 2600},
{name: "Hafiz", roll: 27, age: 35, class:05,gender:"Male", location: "Mirpur", admission_fees: 2700},
{name: "Rina", roll: 28, age: 36, class:06, gender:"Female",location: "Mohammadpur", admission_fees: 2800},
{name: "Shohan", roll: 29, age: 37, class:07,gender:"Male", location: "Rampura", admission_fees: 2900},
{name: "Raju", roll: 30, age: 38, class:08,gender:"Male", location: "Nilkhet", admission_fees: 3000},
{name: "Halima", roll: 31, age: 39, class:09,gender:"Female", location: "Uttara", admission_fees: 3100}

]


let student_2 = student_1.forEach((item) => {
    console.log(`Total Admission fees = ${student_1[item]}`)
})