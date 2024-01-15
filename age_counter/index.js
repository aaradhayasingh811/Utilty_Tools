// function Calculate(){
//     let birth_year = document.getElementById('input1').value ;
//     let curr_year = document.getElementById('input2').value ;

//     console.log(birth_year);
//     console.log(curr_year);

//     let ans = curr_year - birth_year;
//     console.log(ans);
// // for birthday year
//     const date = new Date(birth_year);
//   var year = date.getFullYear();
//   var month =  (date.getMonth() < 10 ? '0' : '') + (date.getMonth()+1);
//   var day = (date.getDate() < 10 ? '0' : '') + date.getDate();

//   console.log(year);
//   console.log(month);
//   console.log(day);


// // current date
//   const date1 = new Date(curr_year);
//   var year1 = date1.getFullYear();
//   var month1 =  (date1.getMonth() < 10 ? '0' : '') + (date1.getMonth()+1);
//   var day1 = (date1.getDate() < 10 ? '0' : '') + date1.getDate();

//   console.log(year1);
//   console.log(month1);
//   console.log(day1);

//   var age = Math.abs(year - 1970);  
//   console.log(age);
//   console.log(month1-month);
//   console.log(day1-day);
// }

// Define funtion to get calculated Age 
function Calculate() { 

	let data = 
		document.getElementById("input1").value; 

	let dob = new Date(data); 
	let day = dob.getDate(); 
	let month = dob.getMonth(); 
	let year = dob.getFullYear(); 

	let now = new Date(document.getElementById("input2").value); 
	console.log(now); 
	let yearDiff = now.getFullYear() - year; 
	let monthDiff = now.getMonth() - month; 
	let dateDiff = now.getDate() - day; 

	if (yearDiff < 0) console.log("invalid date"); 
	else if (monthDiff > 0) { 
		console.log(yearDiff); 
	} else if (monthDiff === 0 && dateDiff >= 0) { 
		console.log(yearDiff); 
	} else { 
		yearDiff = yearDiff - 1; 
		if (monthDiff <= 0) 
			if (dateDiff > 0) monthDiff = 12 + monthDiff; 
			else monthDiff = 11 - monthDiff; 
	} 
	if (dateDiff < 0) { 
		dateDiff = 30 + dateDiff; 
		monthDiff -= 1; 
	} 
	if (yearDiff < 0) 
		document.getElementById("output").innerHTML = "Invalid Date"; 
	else
		document.getElementById("output").innerHTML = 
			"Your current Age is " + yearDiff + " years "
			+ monthDiff + " months " + dateDiff + " days"; 
} 

function currentDate() { 
	console.log(formatted()); 
	let d = document.getElementById("cdate"); 
	d.value = formatted(); 
} 

function formatted(date = new Date()) { 
	return [ 
		date.getFullYear(), 
		short(date.getMonth() + 1), 
		short(date.getDate()), 
	].join("-"); 
} 
function short(num) { 
	return num.toString().padStart(2, "0"); 
} 

currentDate();

