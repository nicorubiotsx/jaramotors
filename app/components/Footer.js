'use client'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-row  lg:mb-0  sm:flex-row mx-auto">
            <li className="flex items-center ">
              <a
                href="https://wa.me/56950969197?text=%20Hola%20quiero%20realizar%20una%20consulta%20" target='blank'
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold flex items-center px-2"
              >
                <Image
                  src={'/whatsapp.png'}
                  width={30}
                  height={30}
                  alt="WhatsApp Icon"
                  className="mr-2"
                />
                +56950969197
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://wa.me/56930668350?text=%20Hola%20quiero%20realizar%20una%20consulta%20" target='blank'
                className="px-2 text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold flex items-center"
              >
                <Image
                  src={'/whatsapp.png'}
                  width={30}
                  height={30}
                  alt="WhatsApp Icon"
                  className="mr-2"
                />
                +56930668350
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://wa.me/56950158731?text=%20Hola%20quiero%20realizar%20una%20consulta%20" target='blank'
                className=" px-2 text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold flex items-center"
              >
                <Image
                  src={'/whatsapp.png'}
                  width={30}
                  height={30}
                  alt="WhatsApp Icon"
                  className="mr-2 "
                />
                +56950158731
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row mx-auto">
            <a
             
              className=" jaramotors mt-3 px-8 text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold flex items-center"
            >
              © 2023 JARA MOTORS.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
  }