// import React, { useState } from 'react'
// import Header from '../components/Header';
// import Form from '../components/Form';
// import Footer from '../components/Footer';
// import preview from '../assets/preview.png';
// import Loader from '../assets/loader.gif'
// import { downloadImage } from './temp';
// import './src/image.css'
// const Imagegen = () => {
//     const [isGenerating, setIsGenerating] = useState(false);
//     const [generatedImage, setGeneratedImage] = useState({
//         photo: null,
//         altText: null,
//     });

//     const generateImage = async (prompt, setPrompt) => {
//         if (prompt) {
//             try {
//                 setIsGenerating(true);
//                 const response = await fetch(
//                     'https://backend-ai-app.onrender.com/api',
//                     {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify({
//                             prompt,
//                         }),
//                     }
//                 );

//                 const data = await response.json();
//                 setGeneratedImage({
//                     photo: `data:image/jpeg;base64,${data.photo}`,
//                     altText: prompt,
//                 });
//             } catch (err) {
//                 alert(err);
//             } finally {
//                 setPrompt('');
//                 setIsGenerating(false);
//             }
//         } else {
//             alert('Please provide proper prompt');
//         }
//     };
//     return (
//         <div className="image-cont">
//             <div className='container'>
//                 <Header />
//                 <main className="flex-container">
//                     <Form generateImage={generateImage} prompt={prompt} />
//                     <div className="image-container">
//                         {generatedImage.photo ? (
//                             <img
//                                 src={generatedImage.photo}
//                                 alt={generatedImage.altText}
//                                 className="imgg ai-img"
//                             />
//                         ) : (
//                             <img
//                                 src={preview}
//                                 alt="preview"
//                                 className="imgg preview-img"
//                             />
//                         )}

//                         {isGenerating && (
//                             <div className="loader-comp">
//                                 <img src={Loader} alt="" className='loader-img' />
//                             </div>
//                         )}
//                         <button
//                             className="btn"
//                             onClick={() => downloadImage(generatedImage.photo)}
//                         >
//                             Download
//                         </button>
//                     </div>
//                 </main>
//             </div>
//             <Footer/>
//         </div>
//     )
// }

// export default Imagegen