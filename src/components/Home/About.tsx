import home from './../../../src/assets/Home/About.png'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Acerca de <span className='font-light text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600'>Enroque</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Tu patrimonio bien resguardado, como un enroque perfecto.</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={home} alt="Casa Enroque" className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>10+</p>
                    <p>Años de Experiencia</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>80+</p>
                    <p>Propiedades Vendidas</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>200+</p>
                    <p>Clientes Asesorados</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>70+</p>
                    <p>Familias que han encontrado su hogar con nosotros</p>
                </div>
            </div>
            <p className='my-10 max-w-lg'>
                En Enroque Bienes Raíces, nos enorgullece ofrecer un servicio de alta calidad respaldado por años de experiencia, una red amplia de propiedades y un compromiso firme con la satisfacción de nuestros clientes. Cada transacción es una oportunidad para ayudarte a encontrar el hogar o inversión perfecta, garantizando seguridad y éxito en cada paso del proceso.
            </p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-900'>
                Conoce más
            </button>
        </div>
      </div>
    </div>
  )
}

export default About
