// Scroll to section function
function scrollToSection(id) {
 document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" })
}

// Scroll to top function
function scrollToTop() {
 window.scrollTo({ top: 0, behavior: "smooth" })
}

// Show or hide scroll-to-top button
window.addEventListener("scroll", function () {
 const scrollBtn = document.getElementById("scrollBtn")
 if (window.scrollY > 300) {
  scrollBtn.style.display = "block"
 } else {
  scrollBtn.style.display = "none"
 }
})

// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (event) {
 event.preventDefault()
 const button = this.querySelector("button")
 button.textContent = "Sending..."
 setTimeout(() => {
  button.textContent = "Sent!"
  this.reset()
  setTimeout(() => {
   button.textContent = "Send Message"
  }, 2000)
 }, 2000)
})
 // Open and close sidenav
document.addEventListener("DOMContentLoaded", function () {
 const openbtn = document.getElementById("openbtn")
 const closebtn = document.getElementById("closebtn")
 const sidenav = document.getElementById("mySidenav")

 // Function to handle sidenav visibility based on screen width
 function handleSidenavVisibility() {
  if (window.innerWidth <= 1266) {
   // Show open button and hide close button
   openbtn.style.display = "block"
   closebtn.style.display = "none"
   sidenav.style.display = "none"
  } else {
   // If screen width is more than 1266px, show the sidenav and hide both buttons
   sidenav.style.display = "block"
   openbtn.style.display = "none"
   closebtn.style.display = "none"
  }
 }

 // Initial check
 handleSidenavVisibility()

 // Add event listeners for the open and close buttons
 openbtn.addEventListener("click", function () {
  sidenav.style.display = "block"
  openbtn.style.display = "none"
  closebtn.style.display = "block"
 })

 closebtn.addEventListener("click", function () {
  sidenav.style.display = "none"
  openbtn.style.display = "block"
  closebtn.style.display = "none"
 })

 // Add event listener to handle screen resizing
 window.addEventListener("resize", handleSidenavVisibility)
})
