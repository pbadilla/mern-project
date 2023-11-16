import { Outlet } from 'react-router-dom';
const HomeLayout = () => {
  return (
    <>
      <Outlet />
      <p>HomeLayout</p>
    </>
  );
};
export default HomeLayout;
