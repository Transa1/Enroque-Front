import React, { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import img1 from './../../../src/assets/Home/1.avif'
import img2 from './../../../src/assets/Home/2.avif'
import img3 from './../../../src/assets/Home/3.avif'
import img4 from './../../../src/assets/Home/4.avif'
import img5 from './../../../src/assets/Home/5.avif'
import img6 from './../../../src/assets/Home/6.avif'

const Showcase = () => {

    const properties = [
        {
          title: "Casa Moderna en la Ciudad",
          price: "$250,000",
          location: "Madrid, España",
          image: img1
        },
        {
          title: "Apartamento con Vista al Mar",
          price: "$320,000",
          location: "Barcelona, España",
          image: img2
        },
        {
          title: "Chalet en la Montaña",
          price: "$450,000",
          location: "Andorra, Pirineos",
          image: img3
        },
        {
          title: "Villa de Lujo con Piscina",
          price: "$1,200,000",
          location: "Marbella, España",
          image: img4
        },
        {
          title: "Loft Industrial en el Centro",
          price: "$280,000",
          location: "Valencia, España",
          image: img5
        },
        {
          title: "Finca Rústica con Viñedos",
          price: "$600,000",
          location: "La Rioja, España",
          image: img6
        }   
      ];

      const [currentIndex, setCurrentIndex] = React.useState(0);
      const [cardToShow, setCardsToShow] = React.useState(1);

      useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(3);
            } else {
                setCardsToShow(1);
            }
        };
    
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);
    
    const nextProperty = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + cardToShow >= properties.length) {
                return 0;
            }
            return prevIndex + 1;
        });
    };
    
    const prevProperty = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return properties.length - cardToShow;
            }
            return prevIndex - 1;
        });
    };
    
      

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Propiedades <span className='font-light text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600'>Destacadas</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Las mejores oportunidades te esperan.</p>

        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevProperty} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Property'><FaArrowLeft /></button>
            <button onClick={nextProperty} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Property'><FaArrowRight /></button>
        </div>

        <div className='overflow-hidden'>
            <div className='flex gap-8 trasition-transform duration-500 ease-in-out'
            style={{
                transform: `translateX(-${currentIndex * (100 / cardToShow)}%)`
            } }
            >
            {properties.map((property, index) => (
                <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4 h-[25em] flex flex-col"> 
                <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover mb-14" 
                />
                <div className="absolute left-0 right-0 bottom-3 flex justify-center">
                    <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">
                            {property.title}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            {property.price} <span> | </span> {property.location}
                        </p>
                    </div>
                </div>
            </div>
            
                ))}
            </div>
        </div>
    </div>
  )
}

export default Showcase
