import { EmailTemplate } from '@/app/components/emailTemplate';
import { Resend } from 'resend';
const key = process.env.key
const resend = new Resend(key);

export async function POST(req) {

  try {       
    const {name,email,subject,message} = await req.json().then((body)=>body)
  


    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['nicolasrubioolivares96@gmail.com','maulen61@gmail.com'],
      subject: subject,
      react:   EmailTemplate({name:name,email:email,subject:subject,message:message}),
  });


    return Response.json({data});
  } catch (error) {
    return Response.json({ error });
  }
}
