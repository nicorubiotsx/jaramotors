'use client'
import React, { useState } from "react"
import Image from 'next/image'
import Link from 'next/link'
import Form from "./form";
export default function Header() {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);

  const googleMapsUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.747824330448!2d-71.28636492351319!3d-34.35689554450643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966383f919ea61e3%3A0xbee75073e83cd9a7!2sAv.%20Independencia%20442%2C%20Pichidegua%2C%20O&#39;Higgins!5e0!3m2!1ses-419!2scl!4v1703455593026!5m2!1ses-419!2scl';

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${encodeURIComponent('Av. Independencia 442, Pichidegua, O\'Higgins')}`, '_blank');

  }

  return (
    <header className={'fixed top-0 w-full clearNav z-50 '}>
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a
            href="/"
            className=" jara  flex text-3xl text-white font-medium mb-4 md:mb-0"
          > <Image
            src={'/jara.png'}
            width={150}
            alt=""
            height={150}
          />
          </a>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <Link  href='#inicio'className="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Inicio
            </Link>
        
            <Link href='#servicios' className="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Servicios
            </Link>
            <Link  href="#nosotros"className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Nosotros
            </Link>
            <Link  href="#contacto"className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Contacto
            </Link>
          </div>
         
        </div>
      </div>
      
    </header>
  );
}