import React from 'react'
import Question from './Question';

const FAQ = () => {
    const [show, setShow] = React.useState<number | null>(null);

    const showAnswer = (index: number) => {
        setShow(index === show ? null : index);
    }

    const data: { id: number; question: string; answer: string; }[] = [
        {
            id: 1,
            question: "¿Cuáles son los requisitos para comprar una casa en Hermosillo?",
            answer: "Para comprar una casa en Hermosillo, necesitas contar con una identificación oficial, CURP, comprobante de ingresos, historial crediticio (en caso de financiamiento) y una oferta de compra aceptada por el vendedor. Además, se recomienda contar con asesoría legal y notarial."
        },
        {
            id: 2,
            question: "¿Cuánto tiempo tarda el proceso de compra-venta de una casa?",
            answer: "El proceso puede tardar entre 30 y 90 días, dependiendo de la rapidez con la que se obtengan los documentos, la aprobación del financiamiento (si aplica) y la firma ante notario."
        },
        {
            id: 3,
            question: "¿Qué impuestos y gastos adicionales debo considerar al comprar una casa?",
            answer: "Debes considerar el Impuesto sobre Adquisición de Inmuebles (ISAI), los honorarios notariales, la inscripción en el Registro Público de la Propiedad y, en caso de financiamiento, los gastos de avalúo y apertura de crédito."
        },
        {
            id: 4,
            question: "¿Qué documentos debe entregar el vendedor al comprador?",
            answer: "El vendedor debe entregar la escritura de la propiedad, el certificado de libertad de gravamen, el pago del predial al corriente, el avalúo actualizado y, en caso de ser necesario, el régimen de condominio."
        },
        {
            id: 5,
            question: "¿Es obligatorio firmar un contrato de compra-venta antes de la escritura?",
            answer: "Sí, el contrato de compra-venta es un documento preliminar que establece los términos y condiciones de la transacción. Este contrato protege a ambas partes y es recomendable firmarlo antes de formalizar la operación ante notario."
        },
        {
            id: 6,
            question: "¿Qué hace un notario en el proceso de compra-venta?",
            answer: "El notario revisa que la documentación esté en regla, verifica que la propiedad no tenga adeudos o problemas legales, elabora la escritura pública y la inscribe en el Registro Público de la Propiedad para formalizar el cambio de propietario."
        }
    ];

    return (
        <div className='bg-white text-neutral-950 py-10 lg:py-20'>
            <div className='mx-auto space-y-12 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5'>
                <h1 className='text-4xl font-bold text-center mb-8'>Preguntas Frecuentes</h1>
                <div className='space-y-6'>
                    {data.map((d, index) => (
                        <Question key={d.id} data={d} onClick={() => showAnswer(index)} isOpen={show === index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ;
