// courses section object
export const courses = [
  {
    "id": 31,
    "name": "Python",
    "image": require("./images/python.png"),
    "lesson": 10,
    "level": "Beginner",
    "price": 60,
    "rating": 4.5,
    "details": "Versatile and powerful, Python is the go-to language for web development, data analysis, and machine learning. Join us to unlock its potential and bring your ideas to life effortlessly."
  },
  {
    "id": 32,
    "name": "JavaScript",
    "image": require("./images/javascript.png"),
    "lesson": 15,
    "level": "Advanced",
    "price": 100,
    "rating": 4.8,
    "details": "Become a front-end and back-end wizard with JavaScript. Create interactive websites, build complex web apps, and captivate users with your coding magic."
  },
  {
    "id": 33,
    "name": "Java",
    "image": require("./images/java.png"),
    "lesson": 5,
    "level": "Expert",
    "price": 150,
    "rating": 4.3,
    "details": "Discover the language behind Android apps and enterprise-level software. Learn object-oriented programming with Java and step into a world of endless possibilities."
  },
  {
    "id": 34,
    "name": "C++",
    "image": require("./images/c.png"),
    "lesson": 20,
    "level": "Intermediate",
    "price": 30,
    "rating": 4.7,
    "details": "Unleash the power of C++ for systems programming and high-performance applications. Master the art of crafting efficient and elegant solutions."
  },
  {
    "id": 35,
    "name": "Ruby",
    "image": require("./images/ruby.png"),
    "lesson": 12,
    "level": "Beginner",
    "price": 80,
    "rating": 4.6,
    "details": "Fall in love with Ruby's simplicity and flexibility. Dive into web development with Ruby on Rails and build beautiful, functional apps."
  },
  {
    "id": 36,
    "name": "HTML/CSS",
    "image": require("./images/htmlcss2.png"),
    "lesson": 8,
    "level": "Intermediate",
    "price": 50,
    "rating": 4.4,
    "details": "Create stunning websites with the perfect duo - HTML and CSS. Turn your design ideas into reality and leave users in amazement with the beautiful web experiences you'll build."
  }
]

// faqs section accordion object
export const accordionData = [
  {
    id: 21,
    title: "How do I enroll in a course?",
    content: "To enroll in a course, simply navigate to the course page and click on the 'Enroll Now' button. You will be redirected to the enrollment form where you need to provide your details and make the payment to complete the enrollment process."
  },
  {
    id: 22,
    title: "Are the courses self-paced or scheduled?",
    content: "Our programming courses are designed to be self-paced, allowing you to learn at your own convenience. Once enrolled, you will have lifetime access to the course materials, so you can study and progress through the course at your preferred speed."
  },
  {
    id: 23,
    title: "What programming languages are covered in the courses?",
    content: "We offer a wide range of programming courses covering popular languages such as Python, JavaScript, Java, C++, and more. Each course is designed to teach you the fundamentals and advanced concepts of the respective language, making you proficient in coding and problem-solving."
  },
  {
    id: 24,
    title: "Is there any prerequisite for joining the courses?",
    content: "Most of our programming courses are beginner-friendly and do not require any prior coding experience. However, some advanced courses may have specific prerequisites, which will be mentioned in the course description. Generally, a basic understanding of computer operations and mathematics is helpful."
  }
];

// features section object
export const features = [
  {
    id: 51,
    image: "laptop-outline",
    color: "purple",
    title: "80+ Online Courses",
    content: "Unlock Your Potential with 80+ Engaging Online Courses"
  },
  {
    id: 52,
    image: "person-outline",
    color: "red",
    title: "Top Instructors",
    content: "Learn from Top Instructors: Unlock Your Full Potential"
  },
  {
    id: 53,
    image: "newspaper-outline",
    color: "blue",
    title: "Online Certificates",
    content: "Earn Online Certificates: Validate Your Skills and Knowledge"
  },
  {
    id: 54,
    image: "people-outline",
    color: "orange",
    title: "6000k+ Members",
    content: "Join Our 6,000k+ Strong Community: Learn and Grow Together"
  }
];

// nav links object
export const navLinks = {
  hrefs: {
    home: {
      id: 41,
      name: "Home",
      link: "#home"
    },
    courses: {
      id: 42,
      name: "Courses",
      link: "#courses"
    },
    faqs: {
      id: 43,
      name: "FAQs",
      link: "#faqs"
    },
    contact: {
      id: 44,
      name: "Contact",
      link: "#contact"
    },
  },
  links: {
    id: 48,
    name: "Apply",
    link: "/applyTeacher"
  }
};

// footer upper container
export const footerUpper = {
  part1: {
    image: "logo-hd.png",
    content: "3DSOLUTIONS is a software development agency providing end-to-end solutions, from the raw idea to final product deployment, and services in the global software marketplace since 2019. We are excited to announce that we have expanded our offerings to include online programming courses on our website."
  },
  part2: {
    heading: "Courses",
    links: ["Python", "JavaScript", "Java", "C++", "Ruby", "HTML/CSS"],
    hrefs: ["#courses", "#courses", "#courses", "#courses", "#courses", "#courses"]
  },
  part3: {
    heading: "Certifications",
    links: ["Certificate Programs", "Verified Certificates", "Accreditation"],
    hrefs: ["#", "#", "#"]
  },
  part4: {
    heading: "Support",
    links: ["FAQs", "Contact Us", "F-8 markaz, Islamabad", "3dsolutions.official@gmail.com", "+92 302 5834392"],
    hrefs: ["#faqs", "#contact"]
  }
}

// footer social icons
export const socialIcons = [
  {
    id: 61,
    icon: "logo-facebook",
    color: "blue",
    link: "https://www.facebook.com"
  },
  {
    id: 62,
    icon: "logo-twitter",
    color: "dodgerblue",
    link: "https://www.twitter.com"
  },
  {
    id: 63,
    icon: "logo-instagram",
    color: "hotpink",
    link: "https://www.instagram.com"
  },
  {
    id: 64,
    icon: "logo-linkedin",
    color: "deepskyblue",
    link: "https://www.linkedin.com"
  }
];