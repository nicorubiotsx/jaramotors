

import React from "react";


export const EmailTemplate = ({name,email,subject,message}) => (
        <div>
          <h1>Welcome, {name}!</h1>
          <h2>{email}</h2>
          <h3>{subject}</h3>
          <h4>{message}</h4>
        </div>
      );