import Client1 from "./assets/client-img/img1.jpg";
import Client2 from "./assets/client-img/img2.jpg";
import Client3 from "./assets/client-img/img3.jpg";
import UX from "./assets/courses-photos/img5.jpg";
import SE from "./assets/courses-photos/img6.jpg";
import Graphic from "./assets/courses-photos/img7.jpg";
import Marketing from "./assets/courses-photos/img9.jpg";

export const navMenus = {
  ["Landings"]: [
    { name: "Mobile Apps", link: "#" },
    { name: "Desktop Apps", link: "#" },
    { name: "Startup", link: "#" },
    { name: "Expo", link: "#" },
    { name: "Marketing", link: "#" },
    { name: "Service", link: "#" },
    { name: "Enterprise", link: "#" },
    { name: "Cloud Hosting", link: "#" },
    { name: "Design Company", link: "#" },
    { name: "Web Basic", link: "#" },
    { name: "Overview", link: "#" },
    { name: "Agency", link: "#" },
    { name: "E-Learning", link: "#" },
    { name: "Coworking", link: "#" },
    { name: "Rental", link: "#" },
    { name: "Job Listing", link: "#" },
    { name: "Logistics", link: "#" },
    { name: "E-commerce", link: "#" },
  ],
  ["Company"]: [
    { name: "Career Listing", link: "#" },
    { name: "Job Opening", link: "#" },
    { name: "Customer Stories", link: "#" },
    { name: "Hire Us", link: "#" },
    { name: "About: Startup", link: "#" },
    { name: "About", link: "#" },
    { name: "Pricing", link: "#" },
    { name: "Terms", link: "#" },
    { name: "Contact: Map", link: "#" },
    { name: "Contact: Minimal", link: "#" },
    { name: "Contact: Startup", link: "#" },
  ],
  ["Account"]: [
    { name: "General Settings", link: "#" },
    { name: "Security Settings", link: "#" },
    { name: "Notifications Options", link: "#" },
    { name: "Billing Options", link: "#" },
    { name: "Sign up: Simple", link: "#" },
    { name: "Sign up: Cover", link: "#" },
    { name: "Sign in: Simple", link: "#" },
    { name: "Sign in: Cover", link: "#" },
    { name: "Password: Simple", link: "#" },
    { name: "Password: Cover", link: "#" },
  ],
  ["Pages"]: [
    { name: "Help Center: Overview", link: "#" },
    { name: "Help Center: Article", link: "#" },
    { name: "FAQ", link: "#" },
    { name: "Error 404: Simple", link: "#" },
    { name: "Error 404: Cover", link: "#" },
    { name: "Career Page Minimal", link: "#" },
  ],
  ["Blog"]: [
    { name: "Reach View", link: "#" },
    { name: "Search", link: "#" },
    { name: "Newsroom", link: "#" },
    { name: "Article", link: "#" },
  ],
  ["Portfolio"]: [
    { name: "Grid View", link: "#" },
    { name: "Masonry", link: "#" },
    { name: "Basic", link: "#" },
    { name: "Parallax", link: "#" },
  ],
};

export const courses = [
  {
    id: 1,
    courseImgSrc: UX,
    courseTitle: "UX & web design",
    rating: "5.0",
    instructor: "Joshua Karamaki",
    subscriptionPlan: "$59",
    students: [
      {
        studentImgSrc: Client1,
        studentName: "Student1",
      },
      {
        studentImgSrc: Client2,
        studentName: "Student2",
      },
      {
        studentImgSrc: Client3,
        studentName: "Student3",
      },
    ],
  },
  {
    id: 2,
    courseImgSrc: SE,
    courseTitle: "Software engineering",
    rating: "5.0",
    instructor: "Joshua Karamaki",
    subscriptionPlan: "$69",
    students: [
      {
        studentImgSrc: Client1,
        studentName: "Student1",
      },
      {
        studentImgSrc: Client2,
        studentName: "Student2",
      },
      {
        studentImgSrc: Client3,
        studentName: "Student3",
      },
    ],
  },
  {
    id: 3,
    courseImgSrc: Graphic,
    courseTitle: "Graphic design for beginners",
    rating: "5.0",
    instructor: "Nicol Adams",
    subscriptionPlan: "$49",
    students: [
      {
        studentImgSrc: Client1,
        studentName: "Student1",
      },
      {
        studentImgSrc: Client2,
        studentName: "Student2",
      },
      {
        studentImgSrc: Client3,
        studentName: "Student3",
      },
    ],
  },
  {
    id: 4,
    courseImgSrc: Marketing,
    courseTitle: "Marketing VS Sales",
    rating: "5.0",
    instructor: "Joshua Karamaki",
    subscriptionPlan: "$59",
    students: [
      {
        studentImgSrc: Client1,
        studentName: "Student1",
      },
      {
        studentImgSrc: Client2,
        studentName: "Student2",
      },
      {
        studentImgSrc: Client3,
        studentName: "Student3",
      },
    ],
  },
];
