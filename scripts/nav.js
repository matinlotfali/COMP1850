document.writeln('<nav>' +
            '  <a id="nav_biography" href="index.html">Biography</a>' +
            '  <a id="nav_cv" href="cv.html">Curriculum Vitae</a>' +
            '  <a id="nav_education" href="education.html">Education</a>' +
            '  <a id="nav_experience" href="experiences.html">Experience</a>' +
            '  <a id="nav_skills" href="skills.html">Skills</a>' +
            '  <a id="nav_projects" href="projects.html">Projects</a>' +
            '  <a id="nav_contactme" href="contactme.html">Contact Me</a>' +
            '</nav>');
var pageID = document.body.id;
var navAnchor = document.getElementById("nav_"+pageID);
navAnchor.classList.add("active");