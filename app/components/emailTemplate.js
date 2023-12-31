

import React from "react";
import Image from 'next/image'

export const EmailTemplate = ({name,email,subject,message}) => (
        <div className="email">
                
          <h1 style={{padding:20}} >Nombre: {name}</h1>
          <h2>Asunto:{subject}</h2>
          <p>{message}</p>
          <p>Email:{email}</p>
        </div> 




      );