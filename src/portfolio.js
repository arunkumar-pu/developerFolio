const portfolio = {
  settings: {
    isSplash: false,
  },
  greeting: {
    title: "Arunkumar P U",
    logo_name: "ArunkumarPU",
    subTitle:
      "Automation Specialist | Scripting for Endpoint Excellence | Infrastructure Engineering Expertise",
    resumeLink: "",
    portfolio_repository: "https://github.com/arunkumar-pu/developerFolio",
    githubProfile: "https://github.com/arunkumar-pu",
  },
  socialMediaLinks: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/arunkumarpu/",
      fontAwesomeIcon: "fa-linkedin",
      backgroundColor: "#0077B5",
    },
    {
      name: "GitHub",
      link: "https://github.com/arunkumar-pu",
      fontAwesomeIcon: "fa-github",
      backgroundColor: "#181717",
    },
    {
      name: "Email",
      link: "mailto:arunkumarpu@gmail.com",
      fontAwesomeIcon: "fa-envelope",
      backgroundColor: "#D14836",
    },
  ],
  skills: {
    data: [
      {
        title: "Automation & Scripting",
        fileName: "FullStackImg",
        skills: [
          "⚡ Automating EUC operations using PowerShell and Bash",
          "⚡ API-driven integrations with third-party platforms",
          "⚡ Building scalable scripts for infrastructure ops"
        ],
        softwareSkills: [
          { skillName: "PowerShell", fontAwesomeClassname: "logos:powershell" },
          { skillName: "Python", fontAwesomeClassname: "logos:python" },
          { skillName: "Bash", fontAwesomeClassname: "logos:bash-icon" },
          { skillName: "APIs", fontAwesomeClassname: "mdi:api" },
        ],
      },
      {
        title: "Infrastructure Engineering",
        fileName: "CloudInfraImg",
        skills: [
          "⚡ Managing Microsoft Servers and Active Directory",
          "⚡ Virtualization using VMware (ESXi 5.5–7.0)",
          "⚡ Maintaining DNS, DHCP, File Servers and Certificates"
        ],
        softwareSkills: [
          { skillName: "VMware", fontAwesomeClassname: "simple-icons:vmware" },
          { skillName: "Windows Server", fontAwesomeClassname: "logos:microsoft-windows" },
          { skillName: "Active Directory", fontAwesomeClassname: "mdi:domain" },
          { skillName: "Intune", fontAwesomeClassname: "simple-icons:microsoft" },
        ],
      },
    ],
  },
  education: { visible: false },
  certifications: {
    visible: true,
    certifications: [
      {
        title: "Windows PowerShell: Tool Building",
        subtitle: "Microsoft",
        logo_path: "microsoft_logo.png",
        certificate_link: "",
        alt_name: "PowerShell",
        color_code: "#2A73CC",
      },
      {
        title: "Certified Nexthink Administrator",
        subtitle: "Nexthink",
        logo_path: "nexthink_logo.png",
        certificate_link: "",
        alt_name: "Nexthink",
        color_code: "#f47f24",
      },
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "Work",
    description:
      "Driven by automation. I’ve streamlined infrastructure tasks, reduced manual intervention, and made systems smarter.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Professional Service Engineer",
        company: "Nexthink",
        logo_path: "nexthink_logo.png",
        duration: "Present",
        location: "India",
        description: [
          "Developed and tested automation scripts with PowerShell and Bash",
          "Integrated third-party systems using REST APIs",
          "Designed scalable workflows for EUC automation",
          "Refactored legacy scripts for better performance",
          "Exploring AI-based automation enhancements"
        ],
        color: "#f47f24",
      },
      {
        title: "IT Operations Analyst",
        company: "Conduent",
        logo_path: "conduent_logo.png",
        duration: "Past",
        location: "India",
        description: [
          "Resolved P1/P2 issues in Windows Server & VMware environments",
          "Managed AD, DNS, DHCP and SSL Certificates",
          "Automated infra monitoring using PowerShell and Shell scripts",
          "Supported multiple clients using ITIL workflows via ServiceNow"
        ],
        color: "#000000",
      },
    ],
  },
  projects: {
    data: [
      {
        id: "active-directory-tool",
        name: "AD Admin Tool",
        url: "https://github.com/arunkumar-pu/Ad_Administration_PS_Tool",
        description:
          "A PowerShell-based tool for streamlined Active Directory user and group management tasks.",
        languages: [
          {
            name: "PowerShell",
            iconifyClass: "logos:powershell",
          },
        ],
  },
    ],
  },
  contactPageData: {
    contactSection: {
      title: "Contact Me",
      subtitle:
        "Want to automate your infra or discuss scripting? Drop a message!",
      number: "",
      email_address: "arunkumarpu@gmail.com",
    },
    addressSection: {
      title: "Location",
      subtitle: "India",
    },
  },
};

export default portfolio;
