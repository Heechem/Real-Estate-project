import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl text-blue-600">Welcome</h1>
      <Link
        href="/properties"
        className="text-red-700 hover:bg-blue-500"
      >
        Show properties
      </Link>
    </div>
  );
};

export default HomePage;
