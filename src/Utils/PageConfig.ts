import Home from "../components/Home";
import About from "../components/About";
import ProfessionalWork from "../components/ProfessionalWork";
import ExploratoryWork from "../components/ExploratoryWork";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

export const Pages = [
  {
    name: "Home",
    path: "home",
    component: Home,
  },
  {
    name: "About",
    path: "about",
    component: About,
  },
  {
    name: "Past Work",
    path: "past-work",
    component: ProfessionalWork,
  },
  {
    name: "Exploratory Work",
    path: "exploratory-work",
    component: ExploratoryWork,
  },
  {
    name: "Testimonials",
    path: "testimonials",
    component: Testimonials,
  },
  {
    name: "Contact",
    path: "contact",
    component: Contact,
  },
  {
    name: "Blog",
    path: "blog",
    component: Blog,
  },
];
