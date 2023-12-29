'use client'

import React from "react";

export function EmailTemplate({ name, email, subject, message }) {

        return (

                <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
                 

                        <main className="mt-8">


                                <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                                        Nombre :  <span className="font-semibold ">{name}</span>
                                </p>

                                <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                                        Asunto:  <span className="font-semibold ">{subject} </span>
                                </p>


                                <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                                        {message}
                                </p>





                        </main>


                        <footer className="mt-8">
                                <p className="text-gray-500 dark:text-gray-400">
                                        Este email fue enviado por :{email}
                                </p>

                                <p className="mt-3 text-gray-500 dark:text-gray-400">© 2023 JARA MOTORS</p>
                        </footer>
                </section>
        )
}