const Reviews = () => {
    const testimonials = [
        { text: "El proceso de compra fue rápido y sencillo. Enroque Bienes Raíces me ayudó a encontrar la casa perfecta para mi familia.", author: "Carlos Flores" },
        { text: "Excelente atención y asesoramiento. Me guiaron en cada paso hasta la firma del contrato sin complicaciones.", author: "María López" },
        { text: "Gracias a Enroque Bienes Raíces encontré la inversión ideal. Son muy profesionales y confiables.", author: "Javier Ruiz" }
      ];
  
    return (
      <section aria-labelledby="testimonial-heading" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="testimonial-heading" className="text-2xl font-bold tracking-tight text-gray-900">¿Qué dicen nuestros clientes?</h2>
          <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="sm:flex lg:block">
                <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                  <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                </svg>
                <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p className="text-lg text-gray-600">{testimonial.text}</p>
                  <cite className="mt-4 block font-semibold not-italic text-gray-900">{testimonial.author}</cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Reviews;