import React from "react";
import Card from "./Card";

const projects = [
  {
    pictureSrc:
      "https://private-user-images.githubusercontent.com/58977139/326351991-5f0419c1-6b61-4718-a579-ab18ffdca9dd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQzNzQ2ODUsIm5iZiI6MTcxNDM3NDM4NSwicGF0aCI6Ii81ODk3NzEzOS8zMjYzNTE5OTEtNWYwNDE5YzEtNmI2MS00NzE4LWE1NzktYWIxOGZmZGNhOWRkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDI5VDA3MDYyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI2NTc2MDU0NmExODBiNGUzZTU3ZWZjMDM5NmQ1ODgyZGE1NTkzYWRlN2U1OGMwNzQzMDkxNTU4NmVlOTNlYjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.X89rfEPLltFxJlaiAWk72Jq1caAI_v07EvLLIqRALes",
    title: "Kids Zone",
    description:
      "Kids Zone is a basic gaming and learning website designed for children. The website provides a safe and fun environment for kids to learn while they play. With a variety of games and activities, Kids Zone aims to make learning enjoyable for children. The website offers a wide range of activities, including educational games. as well as pictures with audio so it will help children develop skills and knowledge.",
    readMoreLink: "https://github.com/roshaniborkar/kidsZone",
    demoLink: "https://roshaniborkar.github.io/kidsZone/",
  },
  {
    pictureSrc:
      "https://i.imgur.com/u7jHr1l.png",
    title: "COLLEGE-VACCINE-REGISTRATION-RECORD",
    description:
      "The project is implemented using doubly linked lists to store the student’s vaccination data in the form of files. There is use of files also in this project. Doubly linked list uses self-referential structure.",
    readMoreLink: "https://github.com/roshaniborkar/COLLEGE-VACCINE-REGISTRATION-RECORD",
    
  },
  {
    pictureSrc: "https://private-user-images.githubusercontent.com/58977139/319247882-4173b82f-fb34-42c3-8ab7-db9dc5fb7906.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQzNzQ4MzIsIm5iZiI6MTcxNDM3NDUzMiwicGF0aCI6Ii81ODk3NzEzOS8zMTkyNDc4ODItNDE3M2I4MmYtZmIzNC00MmMzLThhYjctZGI5ZGM1ZmI3OTA2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDI5VDA3MDg1MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc5ZTJhYTcyYTJiOTdiMjEwNzU0ZTg4ZmExMjk5NDMxOGI3MDk0NzgwMDllODE3MDE4NjBkYzMyMDdlYmIzNzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.V-owAIne7U3hHg5rO7GUUhxWt3BmeWeDB0ldd_d4_4s",
    title: "CareForU",
    description:
      "This dynamic Android app, crafted with Java, and SQlite, Used for forecommending home remedies based on diseases.",
    readMoreLink: "https://github.com/roshaniborkar/CareForYou",
  },
  {
    pictureSrc:
      "https://github.com/manik-18/Personal-Portfolio/assets/102967918/ad75e85b-3d44-4066-ae62-cab045fd7489",
    title: "Personal Portfolio",
    description:
      "Explore my portfolio website crafted using React, Vite, and Tailwind CSS, where I proudly present a collection of my work. This platform not only showcases my projects but also highlights my diverse skill set, providing a comprehensive view of my capabilities.",
    readMoreLink: "https://github.com/manik-18/Personal-Portfolio",
    demoLink: "https://manikgupta.netlify.app/",
  },
 
];

function CardItem() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 justify-items-center ">
      {projects.map((project, index) => (
        <div key={index}>
          <Card {...project} />
        </div>
      ))}
    </div>
  );
}

export default CardItem;
