'use client'


import React, { useState } from "react"

import Image from 'next/image'
import Link from 'next/link'

export default function Main() {


  const [formData,setFormData]=useState({
    email:'',
    name:'',
    subject:'',
    message:''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =async(e)=>{
    e.preventDefault()
    
    const formDataToSend= new FormData();


    formDataToSend.append('email', formData.email);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('subject',formData.subject)
    formDataToSend.append('message', formData.message);

    try{
      const response = await fetch('api/send',{
        method: 'POST',
        headers:{'Content-Type':'json/application'},
      body: JSON.stringify({
        name:formData.name,
        email:formData.email,
        subject:formData.subject,
        message:formData.message
      })
      
      
      } ) 

    
      if(response.ok){
        const responseData = await response.json()
        console.log(responseData)
  
    

        setFormData({
          email:'',
          name:'',
          subject:'',
          message:''
        })

        return responseData
11
      }else{
        console.error('Failed to send email message');

      }

    }catch(error){
          console.log(error)
        
        }
  }

  const googleMapsUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.747824330448!2d-71.28636492351319!3d-34.35689554450643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966383f919ea61e3%3A0xbee75073e83cd9a7!2sAv.%20Independencia%20442%2C%20Pichidegua%2C%20O&#39;Higgins!5e0!3m2!1ses-419!2scl!4v1703455593026!5m2!1ses-419!2scl';

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${encodeURIComponent('Av. Independencia 442, Pichidegua, O\'Higgins')}`, '_blank');
  };
  

  return (
    <>
    
      
          <section id="inicio" className="text-gray-600 body-font">
        <div className="max-w-5xl pt-52 pb-24 mx-auto">
          <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            JARA MOTORS
          </h1>
          <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
              La solución perfecta para tus necesidades automotrices
          </h2>
          <div className="btn-link ml-6 text-center ">
            <span
              className="inline-flex items-center py-1 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-2 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
              
            >
              <div className="flex text-lg">
                
                <button onClick={openGoogleMaps} className="justify-center">Ubicación</button>
              </div>
            </span>
            <Link
              className="inline-flex items-center py-1 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-2  text-md md:mt-0 focus:shadow-outline"
              href="#servicios"
            >
              Comienza Aquí
              <div className="flex text-lg">
              </div>
            </Link>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto">
          <Image
            className="object-cover "
            alt=""
            src="/portada.jpg"
            width={800}
            height={350}
          />
        </div>
     


      </section>

      <section id="servicios"  className="text-gray-600 body-font">
      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Nuestros Servicios
        </h2>
        <br></br>

        <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
          <div className="ktq4 text-center">
            <Image
             className="mx-auto"
            alt=""
              src='/tren-delantero.jpg'
              width={350}
              height={150}
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Tren delantero y trasero
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Nos especializamos en la reparación integral del tren delantero y trasero, abordando problemas que afectan la estabilidad y la dirección de tu vehículo.
            </p>
          </div>
          <div className="ktq4 text-center">
            <Image
             className="mx-auto"
            alt=""
              src='/scanner.png'
              width={350}
              height={150}
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Scanner Automotriz
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Utilizamos tecnología de vanguardia con nuestro servicio de escaneo automotriz para realizar diagnósticos precisos de los sistemas electrónicos de tu vehículo.
            </p>
          </div>
          <div className="ktq4 text-center">
            <Image
             className="mx-auto"
            alt=""
              src='/frenos.jpg'
              width={350}
              height={150}
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Reparación de Frenos
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Ofrecemos servicios especializados en la reparación de sistemas de frenado. Desde el reemplazo de pastillas y discos hasta la reparación de frenos ABS,
              nos aseguramos de que tu vehículo tenga un rendimiento de frenado óptimo y seguro.
            </p>
          </div>
          <div className="ktq4 text-center">
            <Image
             className="mx-auto"
            alt=""
              src='/alternador.jpeg'
              width={350}
              height={150}
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Reparacion de Alternador
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Nuestro servicio de reparación de alternadores aborda eficazmente problemas eléctricos en tu vehículo.
              Ya sea que necesites una reconstrucción completa o la sustitución de componentes específicos,
              Confía en nosotros para mantener tu batería cargada y tu vehículo en marcha.
            </p>
          </div>
          <div className="ktq4 text-center">
            <Image
             className="mx-auto"
            alt=""
              src='/cambio.jpg'
              width={350}
              height={150}
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Reparación de Cajas De Cambio Mecanica
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
             Nos especializamos en la reparación experta de caja  mecanica,
             para mantener tu vehículo en óptimas condiciones de rendimiento y eficiencia.
            </p>
          </div>
          <div className="ktq4 text-center">
            <Image
             className="mx-auto"
            alt=""
              src='/automatica.jpg'
              width={350}
              height={150}
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Reparación de Cajas De Cambio Automatica
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
             Nos especializamos en la reparación experta de caja  automatica,
             para mantener tu vehículo en óptimas condiciones de rendimiento y eficiencia.
            </p>
          </div>
          <div className="ktq4 text-center">
            <Image
             className="mx-auto"
            alt=""
              src='/motorarranque.jpg'
              width={350}
              height={150}
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Reparación de Motor De Partida
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            En nuestro taller, nos especializamos en la reparación meticulosa de motores de arranque, un componente esencial para el funcionamiento confiable de tu vehículo.
        
            </p>
          </div>
          <div className="ktq4 text-center">
            <Image
             className="mx-auto"
            alt=""
              src='/lavado.png'
              width={350}
              height={150}
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Lavado De Vehiculo
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            En JARA MOTORS, brindamos un lavado de autos de alta calidad. Desde el exterior hasta el interior, nuestro servicio cuida cada detalle.
            </p>
          </div>
          <div className="ktq4 text-center">
            <Image
            alt=""
            className="mx-auto"
              src='/repuestos.jpg'
              width={350}
              height={150}
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
             Venta e Instalación De Repuestos
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
             Te proporcionamos repuestos automotrices de primera calidad y ofrecemos servicios de instalación.
          
            </p>
          </div>

     


        </div>
      </section>

      <section id="nosotros" className="text-gray-600 body-font">

        <h2 className=" mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Acerca De Nosotros
        </h2>
        <br></br>



        <div className="max-w-5xl pt-20 pb-24 mx-auto">
        <div className="ktq5 mx-auto text-center ">
            <Image
            className="image  mx-auto text-center"
            alt=""
              src='/acercade.jpg'
              width={350}
              height={150}
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
             Nuestra Historia
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Desde 2019, hemos estado comprometidos con la misión de proporcionar servicios automotrices de alta calidad a nuestra comunidad. Lo que comenzó como una pequeña operación ha crecido hasta convertirse en un taller de confianza, respaldado por años de experiencia y dedicación inquebrantable.
            </p>

            <h3 className="pt-3 font-semibold text-lg text-white">
            Nuestro Compromiso
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            En JARA MOTORS, creemos en la transparencia, la integridad y la calidad.
             Nos esforzamos por ofrecer a nuestros clientes un servicio excepcional respaldado por nuestro equipo altamente capacitados.
              Cada miembro de nuestro equipo comparte la misma pasión por los automóviles y se compromete a mantener tu vehículo en las mejores condiciones posibles.
            </p>
          </div>
         
   
         


        </div>

      </section>

      <section id="contacto"  className="text-gray-600 body-font">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className=" mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">Contáctanos</h2>
      <form onSubmit={(handleSubmit)} className="space-y-8 pt-8">
          <div>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Correo" required/>
          </div>
          <div>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nombre Completo" required/>
          </div>
          <div>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Asunto" required/>
          </div>
          <div className="sm:col-span-2">
              <textarea id="message" rows="6" name="message" value={formData.message} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Tú mensaje"></textarea>
          </div>
          <button type="submit" className="custom-button-style   mx-auto border-solid border-2 border-#f1f5f9 py-3 px-8 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:inline-block sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar</button>
      </form>
  </div>
</section>
 


    </>

  );
}