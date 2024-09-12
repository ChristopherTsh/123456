// import { useState } from 'react';

// // Star SVG component
// const Star = ({ filled }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill={filled ? "currentColor" : "none"}
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     className="w-5 h-5 text-yellow-500"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"
//     />
//   </svg>
// );

// const Modal = ({ product, onClose, onBackToProducts }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     if (currentImageIndex < product.images.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   const prevImage = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   if (!product) return null;

//   // Generate star rating
//   const renderStars = () => {
//     const stars = [];
//     const rating = Math.round(product.rating.rate); // Assuming the rating is out of 5
//     for (let i = 1; i <= 5; i++) {
//       stars.push(<Star key={i} filled={i <= rating} />);
//     }
//     return stars;
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-red-500 focus:outline-none text-2xl"
//         >
//           &times;
//         </button>

//         <div className="flex flex-col md:flex-row">
//           {/* Product Image Section */}
//           <div className="md:w-1/2 relative">
//             <img
//               src={product.images[currentImageIndex]}
//               alt={product.title}
//               className="w-full h-80 object-cover rounded-lg"
//             />
//             {product.images.length > 1 && (
//               <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-2">
//                 <button
//                   onClick={prevImage}
//                   className="bg-gray-800 text-white p-2 rounded-full focus:outline-none"
//                   disabled={currentImageIndex === 0}
//                 >
//                   ‹
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="bg-gray-800 text-white p-2 rounded-full focus:outline-none"
//                   disabled={currentImageIndex === product.images.length - 1}
//                 >
//                   ›
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Product Details Section */}
//           <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
//             <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
//             <p className="text-gray-600 mb-4">{product.description}</p>
//             <p className="text-green-500 text-lg font-bold mb-2">${product.price}</p>
//             <p className="text-gray-500 mb-2">Category: {product.category}</p>
//             <div className="flex items-center mb-4">
//               <span className="mr-2 text-yellow-500">Rating:</span>
//               <div className="flex">{renderStars()}</div>
//               <span className="ml-2 text-gray-600">({product.rating.count} reviews)</span>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-between items-center mt-6">
//               <button
//                 onClick={onClose}
//                 className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={onBackToProducts}
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//               >
//                 Back to Products
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
