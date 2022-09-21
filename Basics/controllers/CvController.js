const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  let edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }


  
  skills = fs.readFileSync("data/skills", { encoding: "utf-8" });

  skills = JSON.parse(String(skills));
  // console.log(skills);

  skillContainer = [];

  for (let key in skills) {
    skillContainer.push(skills[key]);
  }

  language = fs.readFileSync("data/language", { encoding: "utf-8" });

  language = JSON.parse(String(language));
  

  languages = [];

  for (let key in language) {
    languages.push(language[key]);
  }

  experience = fs.readFileSync("data/experience", { encoding: "utf-8" });

  experience = JSON.parse(String(experience));


  let experiences = [];

  for (let key in experience) {
    experiences.push(experience[key]);
  }


  res.render("cv", {
  
    name:"Md Sakibul Islam",
    educations: edus,
    language: languages,
    skills: skillContainer,
    experience: experiences,


  });

};

module.exports = { getCV: getCV };
