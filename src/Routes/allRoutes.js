import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Categories from '../pages/Categories'
import Documentation from '../pages/Documentation'
import Knowledge from '../pages/Knowledge'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'

const routes = [
  { path: "/home", component: <Home /> },
    { path: "/", component: <Home /> },
  { path: "ve-chung-toi", component: <About/> },
  { path: "/dich-vu", component: <Services /> },
  { path: "/danh-muc", component: <Categories/> },
  { path: "/tai-lieu", component: <Documentation /> },
  { path: "/kien-thuc", component: <Knowledge /> },
  { path: "/tin-tuc", component: <Blog/> },
  { path: "/lien-he", component: <Contact/> },
];

export default routes;
