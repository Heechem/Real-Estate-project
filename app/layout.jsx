import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Real Estate | Find the rental that you want',
  description:
    '  Discover the perfect rental tailored to your needs and desires',
  keywords: 'rental, find rentals, houses, find properties, buy houses',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
