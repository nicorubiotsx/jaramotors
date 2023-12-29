import { EmailTemplate } from '@/app/components/emailTemplate';
import { request } from 'http';
import { Resend } from 'resend';

const resend = new Resend(process.env.KEY_RESEND);

export async function POST(req) {

  try {       
    const {name,email,subject,message} = await req.json().then((body)=>body)
              console.log("daxta",name,email,subject,email) 
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['nicolasrubioolivares96@gmail.com'],
      subject: subject,
      react: EmailTemplate({name,email,subject,message}),
  });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
