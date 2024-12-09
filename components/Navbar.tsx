import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch, CiHeart } from "react-icons/ci";

export default function Navbar() {
  return (
    <header className="relative z-10 w-full h-24 bg-white shadow-md flex items-center justify-between px-8">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/Meubel House.png"
          alt="Meubel House Logo"
          className="w-12 h-8"
        />
        <h1 className="text-2xl font-bold text-black ml-3">Furniro</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8">
        <Link href="/">
          <span className="text-black font-medium text-sm hover:text-gray-500">
            Home
          </span>
        </Link>
        <Link href="/shop">
          <span className="text-black font-medium text-sm hover:text-gray-500">
            Shop
          </span>
        </Link>
        <Link href="/blog">
          <span className="text-black font-medium text-sm hover:text-gray-500">
            Blog
          </span>
        </Link>
        <Link href="/contact">
          <span className="text-black font-medium text-sm hover:text-gray-500">
            Contact
          </span>
        </Link>
      </nav>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        {/* Account Icon */}
        <div className="w-8 h-8">
          <img
            src="/mdi_account-alert-outline.png"
            alt="Account Icon"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Search Icon */}
        <CiSearch className="text-2xl text-black" />

        {/* Heart Icon */}
        <CiHeart className="text-2xl text-black" />

        {/* Cart Icon */}
        <AiOutlineShoppingCart className="text-2xl text-black" />
      </div>
    </header>
  );
}
