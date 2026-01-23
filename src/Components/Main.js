import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <main><Outlet /></main> {/* This is where your pages will render */}
      <Footer />
    </>
  );
};

export default MainLayout;