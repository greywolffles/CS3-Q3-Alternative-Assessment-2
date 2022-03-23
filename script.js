function getScores(){
  // Personal Information Variables
	let studentName = document.querySelector("#name").value;
	let studentSection = document.querySelector("#section").value;
	let studentClassNumber = document.querySelector("#classno").value;
	
	// Subject 1
  let subject1req1 = parseInt(document.querySelector("#subject1req1").value);
  let subject1req2 = parseInt(document.querySelector("#subject1req2").value);
  let subject1req3 = parseInt(document.querySelector("#subject1req3").value);

	// Subject 2
  let subject2req1 = parseInt(document.querySelector("#subject2req1").value);
  let subject2req2 = parseInt(document.querySelector("#subject2req2").value);
  let subject2req3 = parseInt(document.querySelector("#subject2req3").value);

	// Subject 3
  let subject3req1 = parseInt(document.querySelector("#subject3req1").value);
  let subject3req2 = parseInt(document.querySelector("#subject3req2").value);
  let subject3req3 = parseInt(document.querySelector("#subject3req3").value);

	// Alert Boxes For Scores
  if (isNaN(subject1req1)){
		alert("This isn't a number!");
    return;
	}
	if (isNaN(subject1req2)){
		alert("This isn't a number!");
    return;
	}
	if (isNaN(subject1req3)){
		alert("This isn't a number!");
    return;
	}
	if (isNaN(subject2req1)){
		alert("This isn't a number!");
    return;
	}
	if (isNaN(subject2req2)){
		alert("This isn't a number!");
    return;
	}
	if (isNaN(subject2req3)){
		alert("This isn't a number!");
    return;
	}
	if (isNaN(subject3req1)){
		alert("This isn't a number!");
    return;
	}
	if (isNaN(subject3req2)){
		alert("This isn't a number!");
    return;
	}
	if (isNaN(subject3req3)){
		alert("This isn't a number!");
    return;
	}
	
	// Call Subject Grades From Last Quarter
  let subject1lastQtr = parseFloat(document.querySelector("#subject1lastQtr").value);
  let subject2lastQtr = parseFloat(document.querySelector("#subject2lastQtr").value);
  let subject3lastQtr = parseFloat(document.querySelector("#subject3lastQtr").value);

	// Alert Boxes For Grades From Last Quarter
  if (isNaN(subject1lastQtr)){
		alert("This isn't a number!");
    return;
	}
	if ((subject1lastQtr < 1.00) || (subject1lastQtr > 5.00)){
		alert("The grade(s) isn't/aren't valid!");
    return;
	}
	if (isNaN(subject2lastQtr)){
		alert("This isn't a number!");
    return;
	}
	if ((subject2lastQtr < 1.00) || (subject2lastQtr > 5.00)){
		alert("The grade(s) isn't/aren't valid!");
    return;
	}
	if (isNaN(subject3lastQtr)){
		alert("This isn't a number!");
    return;
	}
	if ((subject3lastQtr < 1.00) || (subject3lastQtr > 5.00)){
		alert("The grade(s) isn't/aren't valid!");
    return;
	}

	// Summing Up
  let subject1sum = subject1req1 + subject1req2 + subject1req3;
	let subject2sum = subject2req1 + subject2req2 + subject2req3;
	let subject3sum = subject3req1 + subject3req2 + subject3req3;

	// Subject 1
  let subject1highestPossibleScore = 20 + 30 + 50;
  let subject1perc = subject1sum / subject1highestPossibleScore * 100;

	// Subject 2
  let subject2highestPossibleScore = 20 + 30 + 50;
  let subject2perc = subject2sum / subject2highestPossibleScore * 100;

	// Subject 3
  let subject3highestPossibleScore = 20 + 30 + 50;
  let subject3perc = subject3sum / subject3highestPossibleScore * 100;

	// Information
	document.write("<h1 style='font-family: monospace; font-size: 35px; padding: 5px; border: #E56A17 10px inset; border-radius: 10px; color: #7F3C0E; background-color: #F7F5D3; width: 50%;'> <b> : ̗̀➛ Student Information ༊*·˚ </b> </h1>" + "<br>");
  document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Name: </b>" + studentName + "</p> <br>");
	document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Section: </b>" + studentSection + "</p> <br>");
	document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Class Number: </b>" + studentClassNumber + "</p> <br>" + "<br>");

	// Tentative Grades
	document.write("<h4 style='font-family: monospace; font-size: 35px; padding: 5px; border: #E56A17 10px inset; border-radius: 10px; color: #7F3C0E; background-color: #F7F5D3; width: 50%;'> <b> : ̗̀➛ Tentative Grades ༊*·˚ </b> </h4>" + "<br>");
	
	//Subject 1
  if (subject1perc >= 96){
		var subject1tentaGrade = 1.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 1.00 </p>" + "<br>");
  }
  else if ((subject1perc >= 90) && (subject1perc < 96)){
		var subject1tentaGrade = 1.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 1.25 </p>" + "<br>");
  }
  else if ((subject1perc >= 84) && (subject1perc < 90)){
		var subject1tentaGrade = 1.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 1.50 </p>" + "<br>");
  }
  else if ((subject1perc >= 78) && (subject1perc < 84)){
		var subject1tentaGrade = 1.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 1.75 </p>" + "<br>");
  }
  else if ((subject1perc >= 72) && (subject1perc < 78)){
		var subject1tentaGrade = 2.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 2.00 </p>" + "<br>");
  }
  else if ((subject1perc >= 66) && (subject1perc < 72)){
		var subject1tentaGrade = 2.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 2.25 </p>" + "<br>");
  }
  else if ((subject1perc >= 60) && (subject1perc < 66)){
		var subject1tentaGrade = 2.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 2.50 </p>" + "<br>");
  }
  else if ((subject1perc >= 55) && (subject1perc < 60)){
		var subject1tentaGrade = 2.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 2.75 </p>" + "<br>");
  }
  else if ((subject1perc >= 50) && (subject1perc < 55)){
		var subject1tentaGrade = 3.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 3.00 </p>" + "<br>");
  }
  else if ((subject1perc >= 40) && (subject1perc < 50)){
		var subject1tentaGrade = 4.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 4.00 </p>" + "<br>");
  }
  else if (subject1perc < 40){
		var subject1tentaGrade = 5.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Tentative Grade: </b> 5.00 </p>" + "<br>");
  }

	//Subject 2
  if (subject2perc >= 96){
		var subject2tentaGrade = 1.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 1.00 </p>" + "<br>");
  }
  else if ((subject2perc >= 90) && (subject2perc < 96)){
		var subject2tentaGrade = 1.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 1.25 </p>" + "<br>");
  }
  else if ((subject2perc >= 84) && (subject2perc < 90)){
		var subject2tentaGrade = 1.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 1.50 </p>" + "<br>");
  }
  else if ((subject2perc >= 78) && (subject2perc < 84)){
		var subject2tentaGrade = 1.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 1.75 </p>" + "<br>");
  }
  else if ((subject2perc >= 72) && (subject2perc < 78)){
		var subject2tentaGrade = 2.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 2.00 </p>" + "<br>");
  }
  else if ((subject2perc >= 66) && (subject2perc < 72)){
		var subject2tentaGrade = 2.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 2.25 </p>" + "<br>");
  }
  else if ((subject2perc >= 60) && (subject2perc < 66)){
		var subject2tentaGrade = 2.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 2.50 </p>" + "<br>");
  }
  else if ((subject2perc >= 55) && (subject2perc < 60)){
		var subject2tentaGrade = 2.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 2.75 </p>" + "<br>");
  }
  else if ((subject2perc >= 50) && (subject2perc < 55)){
		var subject2tentaGrade = 3.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 3.00 </p>" + "<br>");
  }
  else if ((subject2perc >= 40) && (subject2perc < 50)){
		var subject2tentaGrade = 4.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 4.00 </p>" + "<br>");
  }
  else if (subject2perc < 40){
		var subject2tentaGrade = 5.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Tentative Grade: </b> 5.00 </p>" + "<br>");
  }

	//Subject 3
  if (subject3perc >= 96){
		var subject3tentaGrade = 1.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 1.00 </p>" + "<br>");
  }
  else if ((subject3perc >= 90) && (subject3perc < 96)){
		var subject3tentaGrade = 1.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 1.25 </p>" + "<br>");
  }
  else if ((subject3perc >= 84) && (subject3perc < 90)){
		var subject3tentaGrade = 1.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 1.50 </p>" + "<br>");
  }
  else if ((subject3perc >= 78) && (subject3perc < 84)){
		var subject3tentaGrade = 1.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 1.75 </p>" + "<br>");
  }
  else if ((subject3perc >= 72) && (subject3perc < 78)){
		var subject3tentaGrade = 2.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 2.00 </p>" + "<br>");
  }
  else if ((subject3perc >= 66) && (subject3perc < 72)){
		var subject3tentaGrade = 2.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 2.25 </p>") + "<br>";
  }
  else if ((subject3perc >= 60) && (subject3perc < 66)){
		var subject3tentaGrade = 2.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 2.50 </p>" + "<br>");
  }
  else if ((subject3perc >= 55) && (subject3perc < 60)){
		var subject3tentaGrade = 2.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 2.75 </p>" + "<br>");
  }
  else if ((subject3perc >= 50) && (subject3perc < 55)){
		var subject3tentaGrade = 3.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 3.00 </p>" + "<br>");
  }
  else if ((subject3perc >= 40) && (subject3perc < 50)){
		var subject3tentaGrade = 4.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 4.00 </p>" + "<br>");
  }
  else if (subject3perc < 40){
		var subject3tentaGrade = 5.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Tentative Grade: </b> 5.00 </p>" + "<br>");
  }

	// Unrounded Grades
	let subject1unroundedGrade = ((subject1tentaGrade * 2/3) + (subject1lastQtr * (1/3)));
	let subject2unroundedGrade = ((subject2tentaGrade * 2/3) + (subject2lastQtr * (1/3)));
	let subject3unroundedGrade = ((subject3tentaGrade * 2/3) + (subject3lastQtr * (1/3)));

	// Final Grades
	document.write("<h4 style='font-family: monospace; font-size: 35px; padding: 5px; border: #E56A17 10px inset; border-radius: 10px; color: #7F3C0E; background-color: #F7F5D3; width: 50%;'> <b> : ̗̀➛ Final Grades ༊*·˚ </b> </h4>" + "<br>");
	
	//Subject 1
  if ((subject1unroundedGrade >= 1.000) && (subject1unroundedGrade < 1.125)){
		var subject1finalGrade = 1.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 1.00 </p>" + "<br>");
  }
  else if ((subject1unroundedGrade >= 1.125) && (subject1unroundedGrade < 1.375)){
		var subject1finalGrade = 1.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 1.25 </p>" + "<br>");
  }
  else if ((subject1unroundedGrade >= 1.375) && (subject1unroundedGrade < 1.625)){
		var subject1finalGrade = 1.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 1.50 </p>" + "<br>");
  }
  else if ((subject1unroundedGrade >= 1.625) && (subject1unroundedGrade < 1.875)){
		var subject1finalGrade = 1.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 1.75 </p>" + "<br>");
  }
  else if ((subject1unroundedGrade >= 1.875) && (subject1unroundedGrade < 2.125)){
		var subject1finalGrade = 2.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 2.00 </p>" + "<br>");
  }
  else if ((subject1unroundedGrade >= 2.125) && (subject1unroundedGrade < 2.375)){
		var subject1finalGrade = 2.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 2.25 </p>" + "<br>");
  }
  else if ((subject1unroundedGrade >= 2.375) && (subject1unroundedGrade < 2.625)){
		var subject1finalGrade = 2.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 2.50 </p>" + "<br>");
  }
  else if ((subject1unroundedGrade >= 2.625) && (subject1unroundedGrade < 2.875)){
		var subject1finalGrade = 2.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 2.75 </p>" + "<br>");
  }
  else if ((subject1unroundedGrade >= 2.875) && (subject1unroundedGrade < 3.500)){
		var subject1finalGrade = 3.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 3.00 </p>" + "<br>");
  }
  else if ((subject1unroundedGrade >= 3.500) && (subject1unroundedGrade < 4.500)){
		var subject1finalGrade = 4.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 4.00 </p>" + "<br>");
  }
  else if ((subject1unroundedGrade >= 4.500) && (subject1unroundedGrade < 5.000)){
		var subject1finalGrade = 5.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 1 Final Grade: </b> 5.00 </p>" + "<br>");
  }

	//Subject 2
  if ((subject2unroundedGrade >= 1.000) && (subject2unroundedGrade < 1.125)){
		var subject2finalGrade = 1.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 1.00 </p>" + "<br>");
  }
  else if ((subject2unroundedGrade >= 1.125) && (subject2unroundedGrade < 1.375)){
		var subject2finalGrade = 1.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 1.25 </p>" + "<br>");
  }
  else if ((subject2unroundedGrade >= 1.375) && (subject2unroundedGrade < 1.625)){
		var subject2finalGrade = 1.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 1.50 </p>" + "<br>");
  }
  else if ((subject2unroundedGrade >= 1.625) && (subject2unroundedGrade < 1.875)){
		var subject2finalGrade = 1.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 1.75 </p>" + "<br>");
  }
  else if ((subject2unroundedGrade >= 1.875) && (subject2unroundedGrade < 2.125)){
		var subject2finalGrade = 2.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 2.00 </p>" + "<br>");
  }
  else if ((subject2unroundedGrade >= 2.125) && (subject2unroundedGrade < 2.375)){
		var subject2finalGrade = 2.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 2.25 </p>" + "<br>");
  }
  else if ((subject2unroundedGrade >= 2.375) && (subject2unroundedGrade < 2.625)){
		var subject2finalGrade = 2.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 2.50 </p>" + "<br>");
  }
  else if ((subject2unroundedGrade >= 2.625) && (subject2unroundedGrade < 2.875)){
		var subject2finalGrade = 2.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 2.75 </p>" + "<br>");
  }
  else if ((subject2unroundedGrade >= 2.875) && (subject2unroundedGrade < 3.500)){
		var subject2finalGrade = 3.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 3.00 </p>" + "<br>");
  }
  else if ((subject2unroundedGrade >= 3.500) && (subject2unroundedGrade < 4.500)){
		var subject2finalGrade = 4.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 4.00 </p>" + "<br>");
  }
  else if ((subject2unroundedGrade >= 4.500) && (subject2unroundedGrade < 5.000)){
		var subject2finalGrade = 5.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 2 Final Grade: </b> 5.00 </p>" + "<br>");
  }

  //Subject 3
  if ((subject3unroundedGrade >= 1.000) && (subject3unroundedGrade < 1.125)){
		var subject3finalGrade = 1.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 1.00 </p>" + "<br>");
  }
  else if ((subject3unroundedGrade >= 1.125) && (subject3unroundedGrade < 1.375)){
		var subject3finalGrade = 1.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 1.25 </p>" + "<br>");
  }
  else if ((subject3unroundedGrade >= 1.375) && (subject3unroundedGrade < 1.625)){
		var subject3finalGrade = 1.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 1.50 </p>" + "<br>");
  }
  else if ((subject3unroundedGrade >= 1.625) && (subject3unroundedGrade < 1.875)){
		var subject3finalGrade = 1.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 1.75 </p>" + "<br>");
  }
  else if ((subject3unroundedGrade >= 1.875) && (subject3unroundedGrade < 2.125)){
		var subject3finalGrade = 2.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 2.00 </p>" + "<br>");
  }
  else if ((subject3unroundedGrade >= 2.125) && (subject3unroundedGrade < 2.375)){
		var subject3finalGrade = 2.25;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 2.25 </p>" + "<br>");
  }
  else if ((subject3unroundedGrade >= 2.375) && (subject3unroundedGrade < 2.625)){
		var subject3finalGrade = 2.50;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 2.50 </p>" + "<br>");
  }
  else if ((subject3unroundedGrade >= 2.625) && (subject3unroundedGrade < 2.875)){
		var subject3finalGrade = 2.75;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 2.75 </p>" + "<br>");
  }
  else if ((subject3unroundedGrade >= 2.875) && (subject3unroundedGrade < 3.500)){
		var subject3finalGrade = 3.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 3.00 </p>" + "<br>");
  }
  else if ((subject3unroundedGrade >= 3.500) && (subject3unroundedGrade < 4.500)){
		var subject3finalGrade = 4.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 4.00 </p>" + "<br>");
  }
  else if ((subject3unroundedGrade >= 4.500) && (subject3unroundedGrade < 5.000)){
		var subject3finalGrade = 5.00;
    document.write("<p style='font-family: monospace; font-size: 20px; margin: -2px;'> <b> Subject 3 Final Grade: </b> 5.00 </p>" + "<br>");
  }
	
  // GWA
	let studentGWA = (subject1finalGrade + subject2finalGrade + subject3finalGrade) / 3;
	console.log(studentGWA);
	let GWA = studentGWA.toFixed(3);
	document.write("<br>");
	document.write("<h1 style='font-family: monospace; font-size: 35px; padding: 5px; border: #E56A17 10px inset; border-radius: 10px; color: #7F3C0E; background-color: #F7F5D3; width: 50%;'> <b> : ̗̀➛ GWA ༊*·˚ </b> </h1>" + "<br>");
	document.write("<p style='font-family: monospace; font-size: 30px; margin: -5px; margin-bottom: 10px;'> ╰┈➤ Your GWA is <b>" + GWA +"</b>! </p>");
}