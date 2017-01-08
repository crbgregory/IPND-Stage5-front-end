/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //This part display basic information

 var bio = {
   "name": "Gregory Cai",
   "role": "Commercial and Contract Manager",
   "contacts" : {
     "mobile" : "185-1097-1875",
     "email" : "crbgregory@163.com",
     "github" : "crbgregory",
     "twitter": "@crbgregory",
     "location": "Vancouver"
   },
   "welcomeMessage" : "lorem ipsum etc etc",
   "skills" : [
     "awareness" , "delivering things", "cryogenic sleep", "saving the universe"
   ],
   "bioPic" : "images/fry.jpg"
 };


 bio.display = function() {
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
   var formattedWelcomMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   $("#header").append(formattedName);
   $("#header").append(formattedRole);
   $("#header").append(formattedBiopic);
   $("#header").append(formattedWelcomMessage);
   var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
   $("#topContacts").append(formattedMobile);
   var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
   $("#topContacts").append(formattedEmail);
   var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
   $("#footerContacts").append(formattedTwitter);
   var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
   $("#footerContacts").append(formattedGit);
   $("#footerContacts").append(formattedMobile);
   $("#footerContacts").append(formattedEmail);

   if(bio.skills.length > 0) {
     $("#header").append(HTMLskillsStart);
     var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
     $("#skills").append(formattedSkill);
   }
 };
 bio.display();



 //This part display education

 var education = {
   "schools" : [
     {
       "name" : "Southwestern University of Finance and Economics",
       "city" : "Chengdu, China",
       "degree" : "Bachelor",
       "majors" : "International Business",
       "dates" : "2010-2014",
       "url" : "http://www.swufe.edu.cn"
     }
   ],
   "onlineCourses" : [
     {
       "title" : "JavaScript",
       "school" : "Udacity",
       "dates" : "2016",
       "url" : "http://udacity.com"
     }
   ]
 };

 education.display = function() {
   for (var school in education.schools) {
     if (education.schools.length > 0) {
       $("#education").append(HTMLschoolStart);
       var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
       var formattedCity = HTMLschoolLocation.replace("%data%",education.schools[school].city);
       $(".education-entry:last").append(formattedName);
       $(".education-entry:last").append(formattedCity);
       var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
       $(".education-entry:last").append(formattedDegree);
       var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
       $(".education-entry:last").append(formattedDate);
     }
   }
   for (var course in education.onlineCourses) {
     if (education.onlineCourses.length > 0) {
       $(".education-entry").append(HTMLonlineClasses);
       var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
       $(".education-entry:last").append(formattedTitle);
       var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
       $(".education-entry:last").append(formattedSchool);
     }
   }
 };

 education.display();



 //This part display work

 var work = {
   "jobs" : [
     {
       "employer" : "Microsoft",
       "title" : "Marketing",
       "dates" : "Januart",
       "description" : "Need to be filled"
     },
     {
       "employer" : "Microsoft",
       "title" : "Marketing",
       "dates" : "Januart",
       "description" : "Need to be filled"
     },
     {
       "employer" : "Microsoft",
       "title" : "Marketing",
       "dates" : "Januart",
       "description" : "Need to be filled"
     }
   ]
 };

 work.display = function() {
   for (var job in work.jobs) {
       if (work.jobs.length > 0) {
         $("#workExperience").append(HTMLworkStart);
         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
         var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
         var formattedEmployerTitle = formattedEmployer + formattedTitle;
         $(".work-entry:last").append(formattedEmployerTitle);
         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
         $(".work-entry:last").append(formattedDates);
         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
         $(".work-entry:last").append(formattedDescription);
     }
   }
 };

 work.display();


 //This part display projects

 var projects = {
   "projects": [
     {
       "title": "Sample Project 1",
       "dates": "2014",
       "description": "Need to be filled",
       "images": [
         "images/projectsA0.jpg",
         "images/projectsA1.jpg"
       ]
     }
   ]
 };

 projects.display = function() {
   for (var project in projects.projects) {
     if (projects.projects.length > 0) {
       $("#projects").append(HTMLprojectStart);
       var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
       $(".project-entry:last").append(formattedTitle);
       var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
       $(".project-entry:last").append(formattedDates);
       var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
       $(".project-entry:last").append(formattedDescription);
     }

     if (projects.projects[project].images.length > 0) {
       for (var image in projects.projects[project].images) {
         var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
         $(".project-entry:last").append(formattedImage);
       }
     }
   }
 };

 projects.display();


 //$("#main").append(internationalizeButton);

 $("#mapDiv").append(googleMap);
