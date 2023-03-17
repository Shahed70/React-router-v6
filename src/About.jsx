import { Outlet, useRoutes } from 'react-router-dom';
function About() {
  return (
    <div>
      About
      <Outlet />
    </div>
  );
}

export default About;
