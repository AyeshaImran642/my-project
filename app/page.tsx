import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch, CiHeart } from "react-icons/ci";

export default function Header() {
  return (
    <div>
      {/* Header */}
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
              src="/mdi_account-alert-outline.png" /* Image Path */
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

      {/* Mask Group Image */}
      <div
        className="relative w-full h-[716.83px] bg-cover"
        style={{
          backgroundImage: "url('/Mask Group.jpg')", // Add your image path
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <img
          src="/Mask Group.jpg" // Replace with the correct image path
          alt="Mask Group"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text after the image */}
      <div className="w-full mt-0">
        {/* Browse The Range Text */}
        <h2
          className="text-2xl font-bold text-gray-700 text-center"
          style={{
            fontFamily: 'Poppins',
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: '48px',
            color: '#333333',
          }}
        >
          Browse The Range
        </h2>

        {/* Subheading */}
        <p
          className="text-base text-center"
          style={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '30px',
            textDecoration: 'none',
            color: '#666666',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        {/* Images Section */}
        <div className="flex justify-center mt-10 space-x-4">
          <img
            src="/Dinning.png" // Replace with the correct image path
            alt="Image 1"
            className="img-custom"
          />
          <span className="img-label">Dinning</span>
          <img
            src="/Image-living room.png" // Replace with the correct image path
            alt="Image 2"
            className="img-custom"
          />
          <span className="img-label"></span>
          <img
            src="/BedRoom.png" // Replace with the correct image path
            alt="Image 3"
            className="img-custom"
          />
          <span className="img-label">BedRoom</span>
        </div>
      </div>
    </div>
  );
}
