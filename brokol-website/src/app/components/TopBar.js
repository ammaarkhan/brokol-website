import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="bg-background-green fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-brokol-green font-bold text-xl">BROKOL</div>
        <div className="flex space-x-4">
          <Link href="#demo" className="text-white px-4 py-2 hover:bg-gray-700 rounded-lg">Demo</Link>
          <Link href="#benefits" className="text-white px-4 py-2 hover:bg-gray-700 rounded-lg">Benefits</Link>
          <Link href="#how-it-works" className="text-white px-4 py-2 hover:bg-gray-700 rounded-lg">How It Works</Link>
          <Link href="#testimonials" className="text-white px-4 py-2 hover:bg-gray-700 rounded-lg">Testimonials</Link>
        </div>
        <Link href="#get-early-access" className="text-white px-4 py-2 bg-brokol-green hover:bg-gray-700 rounded-lg">Get Early Access</Link>
      </div>
    </div>
  );
};

export default TopBar;
