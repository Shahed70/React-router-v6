import { Outlet } from 'react-router-dom';
function Me() {
  return (
    <div>
      Me
      <hr />
      <Outlet />
    </div>
  );
}

export default Me