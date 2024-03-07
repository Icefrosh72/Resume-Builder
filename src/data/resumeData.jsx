import React from 'react';

const resumeData = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: 'No3, Ikeja rd, Lagos state.',
  },
  schoolList: [
    {
      schoolName: 'Oxford University',
      degree: 'Bachelor of Science in Computer Science',
      startDate: '2017/12',
      endDate: '2021/01',
      location: 'Cambridge, MA, USA',
    },
    {
      schoolName: 'Stanford University',
      degree: 'Master of Business Administration',
      startDate: '2022/09',
      endDate: '2024/05',
      location: 'Stanford, CA, USA',
    },
  ],
  experienceList: [
    {
      companyName: 'Facebook',
      position: 'Software Engineer Intern',
      startDate: '2021/06',
      endDate: '2021/08',
      location: 'Menlo Park, CA, USA',
      description: 'During my internship at Facebook, I worked on various projects within the company\'s main app. My responsibilities included developing new features, fixing bugs, and collaborating with cross-functional teams to ensure the smooth functioning of the application.',
    },
    {
      companyName: 'Google',
      position: 'Software Engineer',
      startDate: '2022/01',
      endDate: 'Now',
      location: 'Mountain View, CA, USA',
      description: 'As a software engineer at Google, I am involved in the development of various projects within the company\'s ecosystem. My role requires me to design and implement software solutions, collaborate with team members, and contribute to the continuous improvement of our products and services.',
    },
  ],
};

export default resumeData;
