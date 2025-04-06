document.addEventListener("DOMContentLoaded", () => {
  // Custom cursor
  const cursor = document.querySelector(".cursor")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  })

  document.addEventListener("mousedown", () => {
    cursor.style.width = "15px"
    cursor.style.height = "15px"
    cursor.style.borderColor = "var(--accent-secondary)"
  })

  document.addEventListener("mouseup", () => {
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    cursor.style.borderColor = "var(--accent-primary)"
  })

  // Links and buttons hover effect
  const links = document.querySelectorAll("a, button")

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.style.width = "40px"
      cursor.style.height = "40px"
      cursor.style.borderWidth = "1px"
      cursor.style.borderColor = "var(--accent-secondary)"
    })

    link.addEventListener("mouseleave", () => {
      cursor.style.width = "20px"
      cursor.style.height = "20px"
      cursor.style.borderWidth = "2px"
      cursor.style.borderColor = "var(--accent-primary)"
    })
  })

  // Mobile navigation
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    })
  })

  // Scroll to section
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  // Active navigation link on scroll
  const sections = document.querySelectorAll("section")
  const navItems = document.querySelectorAll(".nav-link")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href") === "#" + current) {
        item.classList.add("active")
      }
    })

    // Header scroll effect
    const header = document.querySelector("header")

    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Typing effect
  const typingElement = document.querySelector(".typing")
  const phrases = ["Cyber Security Researcher", "Bug Bounty Hunter", "Security Analyst", "Vulnerability Hunter"]

  let phraseIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typingSpeed = 100

  function typeText() {
    const currentPhrase = phrases[phraseIndex]

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1)
      charIndex--
      typingSpeed = 50
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1)
      charIndex++
      typingSpeed = 100
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true
      typingSpeed = 1000 // Pause at the end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
      typingSpeed = 500 // Pause before typing next phrase
    }

    setTimeout(typeText, typingSpeed)
  }

  typeText()

  // Form submission
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For this demo, we'll just log it and show a success message
      console.log("Form submitted:", { name, email, message })

      // Reset form
      contactForm.reset()

      // Show success message (you could create a more sophisticated notification)
      alert("Thank you for your message! I will get back to you soon.")
    })
  }

  // Scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".skill-card, .project-card, .certificate-card, .company-card, .timeline-item",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for scroll animations
  document
    .querySelectorAll(".skill-card, .project-card, .certificate-card, .company-card, .timeline-item")
    .forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })

  // Run animations on scroll
  window.addEventListener("scroll", animateOnScroll)

  // Run once on page load
  animateOnScroll()
})

