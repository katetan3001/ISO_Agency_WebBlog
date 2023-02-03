import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Categories from '../pages/Categories'
import Documentation from '../pages/Documentation'
import Knowledge from '../pages/Knowledge'
import Blog from '../pages/Blog'

const routes = [
  { path: "/home", component: <Home /> },
  { path: "ve-chung-toi", component: <About/> },
  { path: "/dich-vu", component: <Services /> },
  { path: "/danh-muc", component: <Categories/> },
  { path: "/tai-lieu", component: <Documentation /> },
  { path: "/kien-thuc", component: <Knowledge /> },
  { path: "/tin-tuc", component: <Blog/> },
];

export default routes;
