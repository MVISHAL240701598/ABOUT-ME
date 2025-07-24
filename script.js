document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Set initial theme based on local storage or system preference
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark" || (!currentTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    htmlElement.classList.add("dark");
    themeToggle.innerHTML = 
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun h-4 w-4"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>`;
  } else {
    themeToggle.innerHTML = 
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon h-4 w-4"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  }

  themeToggle.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon h-4 w-4"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun h-4 w-4"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>`;
    }
  });

  const certifications = [
    {
      title: "The Complete 2024 Web Development Bootcamp",
      issuer: "Udemy",
      date: "Nov 2024",
      credentialId: "UC-930d2210-4290-4689-a8a3-789a8f44ea39",
      skills: ["Web Development", "Front-End Development", "Back-End Web Development"]
    },
    {
      title: "C Programming Basics: Flow Control, Variables, and Pointers",
      issuer: "LinkedIn",
      date: "Sep 2024",
      credentialId: "0fac22082dfac8afdd86e94eelfd77fc7a3b06bc24964a087ef81f7c471447da",
      skills: ["C#"]
    },
    {
      title: "Linux Privilege Escalation for OSCP & Beyond",
      issuer: "Udemy",
      date: "Sep 2024",
      credentialId: "UC-50982f4a-2053-4bd3-86dd-f3f6410536cd",
      skills: ["Cybersecurity"]
    },
    {
      title: "Digital Forensics Masterclass : Forensic Science DFMC+ DFIR",
      issuer: "Udemy",
      date: "Sep 2024",
      credentialId: "UC-bd3f092c-13e0-45bc-8133-bc4f09a6cf3e",
      skills: ["Cybersecurity"]
    },
    {
      title: "HackerRank Badges and Skill certifications",
      issuer: "HackerRank",
      date: "2024",
      credentialId: "https://www.hackerrank.com/profile/vishal_m_2024_c1",
      skills: ["Programming"]
    }
  ];

  const projects = [
    {
      name: "PromptShare",
      language: "HTML",
      description: "A web application for sharing and managing prompts"
    },
    {
      name: "Diary",
      language: "Python",
      description: "Personal diary application with secure data management"
    },
    {
      name: "Always-on-display",
      language: "JavaScript",
      description: "Interactive always-on display implementation "
    }
  ];

  const skills = [
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
    { category: "Programming Languages", items: ["Python", "C#", "JavaScript", "HTML"] },
    { category: "Cybersecurity", items: ["Digital Forensics", "Linux Privilege Escalation", "Security Analysis"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Linux", "HackerRank"] }
  ];

  // Function to render certifications
  function renderCertifications() {
    const container = document.querySelector("#certifications .grid");
    certifications.forEach((cert, index) => {
      const card = `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 card-hover fade-in">
          <h3 class="text-lg font-semibold mb-2">${cert.title}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">${cert.issuer} • ${cert.date}</p>
          <p class="text-sm text-gray-500 dark:text-gray-500 mb-4">
            Credential ID: ${cert.credentialId.length > 30 ? cert.credentialId.substring(0, 30) + "..." : cert.credentialId}
          </p>
          <div class="flex flex-wrap gap-2">
            ${cert.skills.map(skill => `<span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">${skill}</span>`).join("")}
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  }

  // Function to render projects
  function renderProjects() {
    const container = document.querySelector("#projects .grid");
    projects.forEach((project, index) => {
      const card = `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 card-hover fade-in">
          <h3 class="text-lg font-semibold mb-2 flex items-center justify-between">
            ${project.name}
            <span class="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-300">${project.language}</span>
          </h3>
          <p class="text-gray-600 dark:text-gray-400">${project.description}</p>
        </div>
      `;
      container.innerHTML += card;
    });
  }

  // Function to render skills
  function renderSkills() {
    const container = document.querySelector("#skills .grid");
    skills.forEach((skillGroup, index) => {
      const card = `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 card-hover fade-in">
          <h3 class="text-lg font-semibold mb-4">${skillGroup.category}</h3>
          <div class="flex flex-wrap gap-2">
            ${skillGroup.items.map(skill => `<span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-200">${skill}</span>`).join("")}
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  }

  // Initial render
  renderCertifications();
  renderProjects();
  renderSkills();
});

