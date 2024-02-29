import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Real Estate | Find the rental that you want',
  description:
    '  Discover the perfect rental tailored to your needs and desires',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
