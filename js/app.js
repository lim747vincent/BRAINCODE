// mobile menu
function mobileMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



//accordion toggle to open & close
function accordion() {
  // faq section
  const accordionBtns = document.querySelectorAll(".accordion");

  accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
      this.classList.toggle("is-open");

      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        //this is if the accordion is open
        content.style.maxHeight = null;
      } else {
        //if the accordion is currently closed
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
  });
}

//navbar --- scroll down navbar background opacity become 1
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("menuBar").style.background = "rgba(0, 0, 0, 1)";
  } else {
    document.getElementById("menuBar").style.background = "rgba(0, 0, 0, 0)";
  }
}

// statistic counter animation
function statisticCounter() {
  const counters = document.querySelectorAll(".counter");
  const speed = 100; // The lower the slower

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = target / speed;

      const noDecimal = Math.round(inc);

      const finalSpeed = noDecimal + 1;

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = count + finalSpeed;
        // Call function every ms
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

// scroll to specific element only start counter animation
function scrollToAnimation() {
  const element = document.querySelector(".scroll-to");
  const rect = element.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  if (isVisible) {
    statisticCounter();
  }
}

// contact us form validation
function checkContactUs() {
  alert("We have received your inbox. We will get back to you shortly");
}

// member login form validation
function checkMemberLogin() {
  let formEmail = document.forms["memberLogin"]["email"].value;
  let formPassword = document.forms["memberLogin"]["psw"].value;

  if (formEmail == "") {
    alert("Email input must be filled out");
  } else if (formPassword == "") {
    alert("Password input must be filled out");
  } else {
    // check if is member
    //member info
    const memberEmail = "test123@gmail.com";
    const memberPassword = "123456";

    if (formEmail == memberEmail && formPassword == memberPassword) {
      alert("Login successfully!");
      document.forms.memberLogin.action = "./index.html";
    } else {
      alert("Invalid member login. Please try again");
      document.forms.memberLogin.action = "./login.html";
    }
  }
}

// member registration form validation
function checkMemberRegistration() {
  let formEmail = document.forms["memberRegistration"]["email"].value;
  let formPassword = document.forms["memberRegistration"]["psw"].value;
  let formRPassword = document.forms["memberRegistration"]["psw-repeat"].value;

  //member info
  const memberREmail = "test123@gmail.com";

  if (formEmail == "") {
    alert("Email input must be filled out");
  } else if (formPassword == "" || formRPassword == "") {
    alert("Password input must be filled out");
  } else if (formRPassword != formPassword) {
    alert("Password and Repeat password input is different. Please try again");
  } else if (formEmail == memberREmail) {
    alert("Similar account exist! Please try another inputs");
  } else {
    alert("Register successfully!");
    document.forms.memberRegistration.action = "./index.html";
  }
}

// course toggle
function toggleLanguages() {
  var list = document.getElementById("languageList");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}

//about us page
function aboutUs() {
  // get all tables and hide them except the first one
  var tables = document
    .getElementById("studentID")
    .getElementsByTagName("table");
  for (var m = 1; m < tables.length; m++) {
    tables[m].style.display = "none";
  }

  // set current table to 0 (the first table)
  var currentTable = 0;

  // add event listeners to the preview and next buttons
  document
    .getElementById("previewbutton")
    .addEventListener("click", function () {
      tables[currentTable].style.display = "none";
      currentTable = (currentTable - 1 + tables.length) % tables.length;
      tables[currentTable].style.display = "table";
    });

  document.getElementById("nextbutton").addEventListener("click", function () {
    tables[currentTable].style.display = "none";
    currentTable = (currentTable + 1) % tables.length;
    tables[currentTable].style.display = "table";
  });
}

// call
accordion();

window.onscroll = function () {
  scrollFunction();
  scrollToAnimation();
};
window.onload = function () {
  scrollFunction();
  aboutUs();
};
