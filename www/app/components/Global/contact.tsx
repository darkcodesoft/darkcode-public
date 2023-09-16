import {FaGithub, FaLinkedinIn, FaFilePdf} from 'react-icons/fa';

import {ContactComponent} from "@/app/data";

export default function GlobalContact (props: ContactComponent) {
  return(
    <div className='relative'>
      <ul className='flex gap-8 justify-end text-2xl'>
        <li className='rounded-full p-2 bg-gray-100 text-gray-800 transition duration-300 md:hover:bg-sky-600 md:hover:text-gray-50'>
          <a title="LinkedIn" aria-label='LinkedIn' target='_blank' href={props.linked_in}>
            <FaLinkedinIn />
          </a>
        </li>
        <li className='rounded-full p-2 bg-gray-100 text-gray-800 transition duration-300 md:hover:bg-violet-600 md:hover:text-gray-50'>
        <a title="Github" aria-label='Github' target='_blank' href={props.github}>
          <FaGithub />
        </a>
        </li>
        <li className='rounded-full p-2 bg-gray-100 text-gray-800 transition duration-300 md:hover:bg-red-700 md:hover:text-gray-50'>
        <a title="Resume" aria-label='Resume' target='_blank' href='/resume.pdf'>
          <FaFilePdf />
        </a>
        </li>
      </ul>
      <p className='text-lg mt-4 text-right ease-in-out duration-300 text-gray-500 md:hover:text-white'><a href={'mailto:' + props.email}>{props.email}</a></p>
    </div>
  )
}

