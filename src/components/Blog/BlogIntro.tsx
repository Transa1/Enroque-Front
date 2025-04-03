import React from 'react'

const BlogIntro = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'>
      <h1 className='text-3xl sm:text-4xl font-bold mb-2'>Nuestro <span className='font-light text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600'>Blog</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Para saldar todas las dudas que en algún momento tenemos.</p>
    </div>
  )
}

export default BlogIntro
