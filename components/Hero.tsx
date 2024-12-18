// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <div>
//       {/* Mask Group Image */}
//       <div
//         className="relative w-full h-[716.83px] bg-cover"
//         style={{
//           backgroundImage: "url('/Mask Group.jpg')",
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//         }}
//       >
//         <Image
//           src="/Mask Group.jpg"
//           alt="Mask Group"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//         />
//       </div>

//       {/* Browse The Range Text */}
//       <div className="w-full mt-0">
//         <h2
//           className="text-2xl font-bold text-gray-700 text-center"
//           style={{
//             fontFamily: 'Poppins',
//             fontSize: '32px',
//             fontWeight: 700,
//             lineHeight: '48px',
//             color: '#333333',
//           }}
//         >
//           Browse The Range
//         </h2>
//         <p
//           className="text-base text-center"
//           style={{
//             fontFamily: 'Poppins',
//             fontSize: '20px',
//             fontWeight: 400,
//             lineHeight: '30px',
//             color: '#666666',
//           }}
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>

//         {/* Images with Captions */}
//         <div className="flex justify-center gap-6 mt-10">
//           {/* Dining */}
//           <div className="flex flex-col items-center">
//             <Image
//               src="/Dinning.png"
//               alt="Dining"
//               width={381}
//               height={480}
//               className="img-custom transform transition duration-500 hover:scale-105"
//             />
//             <span
//               className="mt-2"
//               style={{
//                 fontFamily: 'Poppins',
//                 fontSize: '24px',
//                 fontWeight: 600,
//                 lineHeight: '36px',
//                 textAlign: 'center',
//                 textUnderlinePosition: 'from-font',
//                 textDecorationSkipInk: 'none',
//                 color: '#333333',
//               }}
//             >
//               Dining
//             </span>
//           </div>

//           {/* Living Room */}
//           <div className="flex flex-col items-center">
//             <Image
//               src="/Image-living room.png"
//               alt="Living Room"
//               width={381}
//               height={480}
//               className="img-custom transform transition duration-500 hover:scale-105"
//             />
//             <span
//               className="mt-2"
//               style={{
//                 fontFamily: 'Poppins',
//                 fontSize: '24px',
//                 fontWeight: 600,
//                 lineHeight: '36px',
//                 textAlign: 'center',
//                 textUnderlinePosition: 'from-font',
//                 textDecorationSkipInk: 'none',
//                 color: '#333333',
//               }}
//             >
//               Living Room
//             </span>
//           </div>

//           {/* Bedroom */}
//           <div className="flex flex-col items-center">
//             <Image
//               src="/BedRoom.png"
//               alt="Bedroom"
//               width={381}
//               height={480}
//               className="img-custom transform transition duration-500 hover:scale-105"
//             />
//             <span
//               className="mt-2"
//               style={{
//                 fontFamily: 'Poppins',
//                 fontSize: '24px',
//                 fontWeight: 600,
//                 lineHeight: '36px',
//                 textAlign: 'center',
//                 textUnderlinePosition: 'from-font',
//                 textDecorationSkipInk: 'none',
//                 color: '#333333',
//               }}
//             >
//               Bedroom
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
