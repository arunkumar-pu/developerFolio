/* Personalized Portfolio Config for Arunkumar P U */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Arunkumar P U",
  title: "Hey, I'm Arunkumar",
  subTitle: emoji(
    "Automation Specialist ⚙️ | Scripting for Endpoint Excellence 💻 | Infrastructure Engineering Expertise 🚀"
  ),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/arunkumar-pu",
  linkedin: "https://www.linkedin.com/in/arunkumarpu/",
  gmail: "arunkumarpu@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "INFRASTRUCTURE AUTOMATION ENTHUSIAST WHO POWERS UP IT WITH SCRIPTING",
  skills: [
    emoji("⚡ Automate infrastructure and endpoint workflows using PowerShell, Bash, and APIs"),
    emoji("⚡ Streamline Intune, AD, and server ops with custom automation tools"),
    emoji("⚡ Integrate systems with APIs for seamless operations and reduced manual work")
  ],
  softwareSkills: [
    { skillName: "PowerShell", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Bash", fontAwesomeClassname: "fas fa-code" },
    { skillName: "API Integration", fontAwesomeClassname: "fas fa-plug" },
    { skillName: "VMware", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Active Directory", fontAwesomeClassname: "fas fa-users" },
    { skillName: "Microsoft Intune", fontAwesomeClassname: "fab fa-microsoft" }
  ],
  display: true
};

const educationInfo = {
  display: false,
  schools: []
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Automation/Scripting", progressPercentage: "90%" },
    { Stack: "Infrastructure Ops", progressPercentage: "80%" },
    { Stack: "Endpoint Management", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Professional Service Engineer",
      company: "Nexthink",
      companylogo: require("./assets/images/defaultLogo.png"),
      date: "Present",
      desc: "Automation scripts using PowerShell and Bash for production environments. Integrated systems via APIs. Streamlined workflows and optimized legacy scripts. Documented solutions for long-term maintainability. Exploring AI for intelligent automation."
    },
    {
      role: "IT Operations Analyst",
      company: "Conduent",
      companylogo: require("./assets/images/defaultLogo.png"),
      date: "Previous",
      desc: "Handled P1/P2 incidents, root cause analysis, and infrastructure automation using PowerShell. Administered Windows Server, VMware, and AD. Automated audits and infrastructure tasks with Shell and PowerShell."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Here’s some of my automation work",
  projects: [
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "AD Administration Tool",
      projectDesc: "Custom PowerShell GUI tool to manage Active Directory tasks",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/arunkumar-pu/Ad_Administration_PS_Tool" }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Recognized credentials in scripting and automation",
  achievementsCards: [
    {
      title: "Windows PowerShell: Tool Building",
      subtitle: "Certified by Microsoft",
      image: require("./assets/images/defaultCert.png"),
      imageAlt: "Microsoft Logo",
      footerLink: []
    },
    {
      title: "Certified Nexthink Administrator",
      subtitle: "Issued by Nexthink",
      image: require("./assets/images/defaultCert.png"),
      imageAlt: "Nexthink Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I’ll be writing about automation and scripting soon. Stay tuned.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "Always open to share knowledge and insights.",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume for more info",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Reach out for collaboration or discussion.",
  number: "",
  email_address: "arunkumarpu@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
