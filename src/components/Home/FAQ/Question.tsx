import React from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface QuestionProps {
  data: {
    question: string;
    answer: string;
  };
  onClick: () => void;

  isOpen: boolean;
}

const Question: React.FC<QuestionProps> = ({ data, onClick, isOpen }) => {
  return (
    <div className='border-b border-gray-800/25 last:border-b-0 overflow-hidden'>
      <div onClick={onClick} className='flex justify-between gap-8 items-start cursor-pointer text-xl py-4'>
        <h1>{data.question}</h1>
        <span className={`text-gray-500 text-lg ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
            {isOpen ? <FaChevronUp className='text-gray-500' /> : <FaChevronDown className='text-gray-500' />}
        </span>
      </div>
      <p className={`text-lg opacity-75 ease-in-out duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>{data.answer}</p>
    </div>
  )
}

export default Question
