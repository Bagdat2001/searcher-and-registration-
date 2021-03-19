var fullName, gender, address, email, phoneNumber, hobbies, photos ="";
let educationCounter = 0, skillCounter = 0;

let educations = [];
let skills = [];

//Adds new row to education table or skill table accordingly 
function addRow(tableId) {
			let table = document.getElementById(tableId);
			let rowCount = table.rows.length;
			let row = "";
			if(tableId === "tableEducation") 
				row = table.insertRow(rowCount-1).outerHTML = addEducation();
			if(tableId === "tableSkill")
				row = table.insertRow(rowCount-1).outerHTML = addSkill();

			

		}

//Deletes the row on button click for both education and skill rows
function deleteRow(rowId) {
	//**********To keep track of number of education rows and skill rows*************************//
	let isEducation = rowId.indexOf("Education");
	let isSkill = rowId.indexOf("Skill");
	if(isEducation !== -1)
		educationCounter--;
		
	
	if(isSkill != -1)
		skillCounter--;
	//******************************************************************************************//
	
	document.getElementById(rowId).outerHTML ="";
	
}

//Adds html code to add a new education row 
function addEducation(){
	educationCounter = educationCounter+1;
	
	return '<tr class="tableRow" id="tableEducationRow'+educationCounter+'" >\
						<td></td>\
					<td>\
						<select id="selectEducationLevel'+educationCounter+'" name="level" >\
							<option value="none" default>--select education--</option>\
							<option value="SSC">SSC</option>\
							<option value="HSC">HSC</option>\
							<option value="Diploma">Diploma</option>\
							<option value="BE">BE</option>\
							<option value="BTech">BTech</option>\
							<option value="BCA">BCA</option>\
							<option value="MCA">MCA</option>\
						</select>\
					</td>\
					<td><input type="year" class="textbox input tableEducationInput" id="textBoxEducationYear'+educationCounter+'" pattern="19[7-9]{1}[0-9]{1}|20[0-1]{1}[0-9]{1}|2020"></td>\
					<!--Only years from 1970 - 2020 excepted through pattern-->\
					<td><input type="text" class="textbox input tableEducationGrade" id="textBoxEducationGrade'+educationCounter+'" pattern="[A-F]|O|[0-9]{0,2}|100"></td>\
					<!--Accepts grades from A-F, O or % from 0-100-->\
					<td><button type="button" class="btn" id="btnRemoveEducation'+educationCounter+'" onclick="deleteRow(\'tableEducationRow'+educationCounter+'\')">Remove</button></td>\
					</tr>';
}

//Adds html code to add a new skill row
function addSkill() {
	skillCounter = skillCounter+1;
	
	return '<tr class="tableRow" id="tableSkillRow'+skillCounter+'" >\
					<td></td>\
					<td><input type="text" class="textbox input tableSkillInput" id="textBoxSkillName'+skillCounter+'"></td>\
					<td>\
						<select id="selectSkillRating'+skillCounter+'" name="Rating">\
							<option value="none">--select rating--</option>\
							<option value="0">0</option>\
							<option value="1">1</option>\
							<option value="2">2</option>\
							<option value="3">3</option>\
							<option value="4">4</option>\
							<option value="5">5</option>\
							<option value="6">6</option>\
							<option value="7">7</option>\
							<option value="8">8</option>\
							<option value="9">9</option>\
							<option value="10">10</option>\
						</select>\
					</td>\
					<td>\
						<button type="reset" class="btn" id="btnRemoveEducation'+skillCounter+'" onclick="deleteRow(\'tableSkillRow'+skillCounter+'\')">Remove</button>\
					</td><!--deletes the skill row-->\
				</tr>';
}

//Retrieves all the input data from the user onclick
function onSubmit(){
	
	if(validate()) {
		
	
	
		localStorage.setItem("fullName", document.getElementById("textBoxFullName").value);
		
		//Finds which radio button was checked and stores it's value accordingly
		let genderElements = document.getElementsByName("gender");
		for(i = 0; i < genderElements.length; i++) { 
			if(genderElements[i].checked){ 
				gender = genderElements[i].value;
				break;
			}
		} 
		localStorage.setItem("gender", gender);
				
		localStorage.setItem("address", document.getElementById("textAreaAddress").value);
		
		localStorage.setItem("email", document.getElementById("textBoxEmail").value);
		
		localStorage.setItem("phoneNumber", document.getElementById("textBoxNumber").value);
		
		localStorage.setItem("hobbies", document.getElementById("textBoxHobbies").value);

		localStorage.setItem("photos", document.getElementById("textBoxPhotos").value);
		
		// debugger;
		//**************************************Education data**********************************//
		for(index = 0; index < educationCounter;index++) {
			let selectEduId = document.getElementById("selectEducationLevel"+(index+1));
			
			
			let education = {
				"level": selectEduId.value,
				"year": document.getElementById("textBoxEducationYear"+(index+1)).value,
				"grade": document.getElementById("textBoxEducationGrade"+(index+1)).value
			};
			//*******************For pushing objects into array******************************//
			if(educations.length == 0)
				educations.unshift(JSON.stringify(education));
			else
				educations.push(JSON.stringify(education));
			//*******************************************************************************//
		}
		
		var jsonEducation = JSON.stringify(educations);
		localStorage.setItem("educationsString", jsonEducation);
		
		//*****************************************Skill data***********************************//
		for(let index = 0; index < skillCounter; index++) {
			let selectSkillId = document.getElementById("selectSkillRating"+(index+1));
			
			let skill ={
				"skillName": document.getElementById("textBoxSkillName"+(index+1)).value,
				"rating": selectSkillId.value
			};
			
			//*******************For pushing objects into array******************************//
			if(skills.length == 0)
				skills.unshift(JSON.stringify(skill));
			else
				skills.push(JSON.stringify(skill));
			//*******************************************************************************//
			
		}
		
		
		
		var jsonSkill = JSON.stringify(skills);
			console.log(jsonSkill);
		localStorage.setItem("skillsString", jsonSkill);
		
	}
	
}


function getData(){
	let node = document.createTextNode (localStorage.getItem("fullName"));
	document.getElementById("labelName").appendChild(node);
	
	node = document.createTextNode (localStorage.getItem("gender"));
	document.getElementById("labelGender").appendChild(node);
	
	node = document.createTextNode (localStorage.getItem("address"));
	document.getElementById("labelAddress").appendChild(node);
	
	node = document.createTextNode (localStorage.getItem("email"));
	document.getElementById("labelEmail").appendChild(node);
	
	node = document.createTextNode (localStorage.getItem("phoneNumber"));
	document.getElementById("labelPhoneNumber").appendChild(node);
	
	node = document.createTextNode (localStorage.getItem("hobbies"));
	document.getElementById("labelHobbies").appendChild(node);
	
	document.getElementById("imgPhotos").src = localStorage.getItem("photos");
	
	
	let jsonEducations = localStorage["educationsString"];
	let educations = JSON.parse(jsonEducations);
	if(educations.length !== 0){
		let table = document.getElementById("tableEducation");
			let row = "";
		for(let index = 0;index < educations.length; index++) {
			table.insertRow(index+1).outerHTML = '<tr class="tableRow" >\
						<td></td>\
					<td>'+JSON.parse(educations[index]).level+'</td>\
					<td>'+JSON.parse(educations[index]).year+'</td>\
					<td>'+JSON.parse(educations[index]).grade+'</td>\
					</tr>';
		}
	}
	
	let jsonSkills = localStorage["skillsString"];
	let skills = JSON.parse(jsonSkills);
	if(skills.length !== 0){
		let table = document.getElementById("tableSkill");
			let row = "";
		for(let index = 0;index < skills.length; index++) {
			table.insertRow(index+1).outerHTML = '<tr class="tableRow" >\
						<td></td>\
					<td>'+JSON.parse(skills[index]).skillName+'</td>\
					<td>'+JSON.parse(skills[index]).rating+'</td>\
					</tr>';
		}
	}
	
}




let regexResult = false;
var regex;

document.getElementById("textBoxFullName").onchange = function() {
	regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
	if(!regex.test(document.getElementById("textBoxFullName").value)) {
		document.getElementById("pName").style.visibility = "visible";
		document.getElementById("pName").innerHTML = "Please enter a valid name. eg: firstname lastname";
		regexResult = false;
	} else {
		document.getElementById("pName").style.visibility = "hidden";
		regexResult = true;
	}
}

document.getElementById("textAreaAddress").onchange = function() {
	var regex = /^[\S\s]/;
	if(!regex.test(document.getElementById("textAreaAddress").value)) {
		document.getElementById("pAddress").style.visibility = "visible";
		document.getElementById("pAddress").innerHTML = "Please enter a valid address.";
		regexResult = false;
	} else {
		document.getElementById("pAddress").style.visibility = "hidden";
		regexResult = true;
	}
}

document.getElementById("textBoxEmail").onchange = function() {
	regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!regex.test(document.getElementById("textBoxEmail").value)) {
		document.getElementById("pEmail").style.visibility = "visible";
		document.getElementById("pEmail").innerHTML = "Please enter a valid email. eg: example@mail.com";
		regexResult = false;
	} else {
		document.getElementById("pEmail").style.visibility = "hidden";
		regexResult = true;
	}
}

document.getElementById("textBoxNumber").onchange = function() {
	var regex = /^\d{10}$/;
	if(!regex.test(document.getElementById("textBoxNumber").value)) {
		document.getElementById("pNumber").style.visibility = "visible";
		document.getElementById("pNumber").innerHTML = "Please enter a valid phone number.eg: 1234567890";
		regexResult = false;
	} else {
		document.getElementById("pNumber").style.visibility = "hidden";
		regexResult = true;
	}
}

document.getElementById("textBoxPhotos").onchange = function() {
	var regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
	if(!regex.test(document.getElementById("textBoxPhotos").value)) {
		document.getElementById("pPhotos").style.visibility = "visible";
		document.getElementById("pPhotos").innerHTML = "Please enter a valid url.";
		regexResult = false;
	} else {
		document.getElementById("pPhotos").style.visibility = "hidden";
		regexResult = true;
	} 
}

function validationFunc(value) {
	
	if (value == "" || value == null || value == undefined) {
		
		return false;
	}
	return true;
}

function validateGender() {
	let genderElements = document.getElementsByName("gender");
	for(i = 0; i < genderElements.length; i++) { 
		if(genderElements[i].checked){ 
			return true;
			break;
		}
	} 
	return false;
	
}


function validate() {
	var fullName, address, email, phoneNumber, hobbies, photos ="";
	
	fullName = document.getElementById("textBoxFullName").value;
					
	address = document.getElementById("textAreaAddress").value;
		
	email = document.getElementById("textBoxEmail").value;
		
	phoneNumber = document.getElementById("textBoxNumber").value;
		
	hobbies = document.getElementById("textBoxHobbies").value;

	photos = document.getElementById("textBoxPhotos").value;
		
	if(regexResult && validationFunc(fullName) && validateGender() && validationFunc(address) && validationFunc(email) && validationFunc(phoneNumber) && validationFunc(photos)) {
		redirectFunction();
		return true;
	}
	window.alert("All fields are mandatory.You either have incomplete fields or not entered according to the format. Please check your information before submitting");
	return false;
	
	
	
 
 
}

function redirectFunction() {
	
      window.open("html/profile.html");
   }	