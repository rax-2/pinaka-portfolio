import { useEffect, useState } from "react"
// side = 'l', url = '', ProjectName = 'nam', Desc = 'description'
const SkillsList = [
    ['Python', 91],
    ['MicroPython', 72],
    ['C Programming', 97],
    ['Arduino', 95],
    ['JavaScript', 70],
    ['HTML', 93],
    ['CSS', 80],
    ['React', 70],
    ['Tailwind CSS', 50],
    ['Bootstrap', 65],
    ['Git & GitHub', 62],
    ['NGINX', 30],
    ['Bash Script', 68],
]

const DisPlayProjects = [
    ['Portfolio Website', 'Created a personal portfolio website to showcase my projects, leveraging React for dynamic content and Tailwind for responsive, modern design. Integrated the GitHub API to automatically display my GitHub repositories, providing an interactive and up-to-date view of my work. Developed under my nickname as a project to highlight my skills in web development and to provide a centralized location for potential employers or collaborators to explore my work.',
         'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwijxeWBlsuKAxWvk1YBHWODBU4QPAgI', 'r'],
    ['GuruKul', 'Gurukul is an educational website designed to make learning easy and accessible for everyone. It offers well-organized study materials and insightful content across various categories, making it a go-to resource for students and curious minds.', 'https://yyaiem.github.io/gurukul/', 'l'],
    ['YantraYodha Club Official website', 'The YantraYodha Club Official Website is a dynamic web application built as part of a college project. The website serves as the official platform for the YantraYodha Club, providing an engaging space for club members to stay updated and connected. It features a registration form for event sign-ups, a notification panel for real-time updates, and displays upcoming and past events through API integration.', 'https://yyaiem.github.io/yy/', 'r'],
]

const Name = "Pinaka"
const Bio = "I am Currently a Bachelor Student at abacus institute of engineering and management"
const BackGroundColor = ' rgba(255,255,255,0.059)'
const HovColor = 'rgba(255,255,255,0.158)'
export { SkillsList, Name, Bio, BackGroundColor, HovColor, DisPlayProjects }