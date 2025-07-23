import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white border-t border-neutral-800">
      {/* Google Maps */}
      <div className="w-full">
        <iframe
          title="Localização"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14955.866819247736!2d-40.33283257164308!3d-20.42545131810163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83f001794b765%3A0x8c09b6d443bf9a56!2sNova%20ponte%20da%20Madalena!5e0!3m2!1spt-BR!2sbr!4v1753263611719!5m2!1spt-BR!"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>

      {/* Linha com logo, direitos e redes sociais */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-4 py-6 gap-4 text-sm">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/logo.png" alt="Logo ClickBeard" width={120} className="cursor-pointer" />
        </Link>

        {/* Texto */}
        <p className="text-center">© {new Date().getFullYear()} ClickBeard - Todos os direitos reservados.</p>

        {/* Redes sociais */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com/danielsiqueiral/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-neutral-400 transition" />
          </a>
          <a href="https://www.facebook.com/danielsiqueira111/" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:text-neutral-400 transition" />
          </a>
          <a href="https://wa.me/5527998304256" target="_blank" rel="noopener noreferrer">
            <Phone className="w-6 h-6 hover:text-neutral-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
