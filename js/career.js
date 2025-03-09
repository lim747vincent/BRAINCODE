const jobs = [
  {
    title: "Software Engineer",
    image: "./img/images.jpeg",
    details:
      "A bachelor's degree in computer science, software engineering, or another related field.5 to 7 years of software engineering or software development experience, preferably in a related field.Hands-on programming experience using relevant languages.Experience using relevant tool suites.",
    openPositions: "4",
    link: "https://wa.me/60149383362",
  },

  {
    title: "Data Scientist",
    image: "./img/scientistlogo.jpeg",
    details:
      "Earn a data science degree. Employers generally like to see some academic credentials to ensure you have the know-how to tackle a data science job, though it's not always required.Sharpen relevant skills.Get an entry-level data analytics job.Prepare for data science interviews",
    openPositions: "2",
    link: "https://wa.me/60149383362",
  },

  {
    title: "Back End Developer",
    image: "./img/backendlogo.png",
    details:
      "Excellent foundation in computer science, algorithms, and web design.Experience in writing highly secure web applications.Experience with core AWS web-enabling technologies.Growth mindset that challenges the status quo and focuses on outside-the-box ideas and solutions.",
    openPositions: "3",
    link: "https://wa.me/60149383362",
  },

  {
    title: "Front End Developer",
    image: "./img/frontendlogo.jpeg",
    details:
      "Have a degree in Computer Science or similar field.Be proficient in coding languages such as HTML, CSS, JavaScript, and jQuery.Understand server-side CSS.Be experienced with graphic design applications (e.g., Adobe Illustrator)Understand the principles of SEO.",
    openPositions: "4",
    link: "https://wa.me/60149383362",
  },

  {
    title: "Database Administrator",
    image: "./img/databaselogo.jpeg",
    details:
      "At least a bachelor's degree in information science or computer science for most entry-level positions.",
    openPositions: "4",
    link: "https://wa.me/60149383362",
  },

  {
    title: "Software Developer",
    image: "./img/developerlogo.jpeg",
    details:
      "A bachelor's level degree in a computer science – or relevant – field.Some work experience – typically 2 to 5 years.A proficiency in programming languages that include Java, C++, Python.An understanding of coding repositories like Git.Knowledge of Agile and Scrum workflows.",
    openPositions: "1",
    link: "https://wa.me/60149383362",
  },

  {
    title: "Database Programmer",
    image: "./img/datadatalogo.png",
    details:
      "Proven work experience as a Database developer.In-depth understanding of data management (e.g. permissions, recovery, security and monitoring)Knowledge of software development and user interface web applications.Hands on experience with SQL.",
    openPositions: "2",
    link: "https://wa.me/60149383362",
  },
  {
    title: "Data Engineer",
    image: "./img/dataengineerlogo.jpeg",
    details:
      "Have a degree in Computer Science, Software Engineering, or a related field.Should also have experience with database systems, distributed computing, and big data technologies.May also have relevant certifications in cloud platforms or data engineering tools. ",
    openPositions: "3",
    link: "https://wa.me/60149383362",
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
  jobs.forEach((job) => {
    let jobCard = document.createElement("div");
    jobCard.classList.add("job");

    let image = document.createElement("img");
    image.src = job.image;

    let title = document.createElement("h3");
    title.innerHTML = job.title;
    title.classList.add("job-title");

    let details = document.createElement("div");
    details.innerHTML = job.details;
    details.classList.add("details");

    let detailsBtn = document.createElement("a");
    detailsBtn.href = job.link;
    detailsBtn.innerHTML = "Whatsapp Us";
    detailsBtn.classList.add("details-btn");

    let openPositions = document.createElement("span");
    openPositions.classList.add("open-positions");

    if (job.openPositions == 1) {
      openPositions.innerHTML = `${job.openPositions} open position`;
    } else {
      openPositions.innerHTML = `${job.openPositions} open positions`;
    }

    jobCard.appendChild(image);
    jobCard.appendChild(title);
    jobCard.appendChild(details);
    jobCard.appendChild(detailsBtn);
    jobCard.appendChild(openPositions);

    jobsContainer.appendChild(jobCard);
  });
};

createJobListingCards();
