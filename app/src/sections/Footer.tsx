import { Github, Twitter, Instagram, Linkedin, Mail, MessageCircle, Crown } from 'lucide-react';

const footerLinks = {
  memberships: [
    { label: 'VIP', href: '#' },
    { label: 'VIP Plus', href: '#' },
    { label: 'Super VIP', href: '#' },
    { label: 'Comparar Planes', href: '#' },
  ],
  scripts: [
    { label: 'Web Scraping', href: '#' },
    { label: 'Automatización', href: '#' },
    { label: 'Finanzas', href: '#' },
    { label: 'Ver Todos', href: '#' },
  ],
  support: [
    { label: 'Documentación', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contacto', href: '#' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="relative bg-carbon-deep">
      {/* Línea Superior Gradiente */}
      <div className="footer-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Contenido Principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Columna de Marca */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Crown className="w-6 h-6 text-amber-400" />
              <span className="font-syncopate text-2xl sm:text-3xl font-bold metal-engraved">
                HLAXHO
              </span>
            </a>
            <p className="font-exo text-amber-100/50 text-sm leading-relaxed max-w-sm mb-6">
              Membresías VIP exclusivas + Scripts premium de élite. 
              Código optimizado, soporte profesional y acceso sin límites.
            </p>
            
            {/* Contacto */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-amber-100/40 hover:text-amber-100/60 transition-colors">
                <Mail className="w-4 h-4 text-copper" />
                <span className="font-exo text-sm">vip@hlaxho.store</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100/40 hover:text-amber-100/60 transition-colors">
                <MessageCircle className="w-4 h-4 text-copper" />
                <span className="font-exo text-sm">discord.gg/hlaxho</span>
              </div>
            </div>
          </div>

          {/* Membresías */}
          <div>
            <h4 className="font-syncopate text-sm text-amber-300 uppercase tracking-wider mb-6">
              Membresías
            </h4>
            <ul className="space-y-3">
              {footerLinks.memberships.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="group font-exo text-sm text-amber-100/50 hover:text-amber-100 transition-all inline-block">
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-copper group-hover:w-full transition-all" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scripts */}
          <div>
            <h4 className="font-syncopate text-sm text-amber-300 uppercase tracking-wider mb-6">
              Scripts
            </h4>
            <ul className="space-y-3">
              {footerLinks.scripts.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="group font-exo text-sm text-amber-100/50 hover:text-amber-100 transition-all inline-block">
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-copper group-hover:w-full transition-all" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-syncopate text-sm text-amber-300 uppercase tracking-wider mb-6">
              Soporte
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="group font-exo text-sm text-amber-100/50 hover:text-amber-100 transition-all inline-block">
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-copper group-hover:w-full transition-all" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="font-exo text-xs text-amber-100/30 text-center sm:text-left">
            <span>© 2024 HLAXHO Store. Todos los derechos reservados.</span>
            <span className="hidden sm:inline mx-3">|</span>
            <br className="sm:hidden" />
            <a href="#" className="hover:text-amber-100/50 transition-colors">Privacidad</a>
            <span className="mx-2 sm:mx-3">|</span>
            <a href="#" className="hover:text-amber-100/50 transition-colors">Términos</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center border border-amber-500/20 text-amber-100/40 hover:text-amber-400 hover:border-amber-500/50 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-12 text-center">
          <p className="font-syncopate text-xs text-amber-100/20 tracking-[0.3em] uppercase">
            Acceso Élite. Código Sin Límites.
          </p>
        </div>
      </div>
    </footer>
  );
}
