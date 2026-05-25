import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [modalAbierto, setModalAbierto] = useState(false)

  const brandName = 'NOMBRE DE LA MARCA'
  const phoneNumber = '34XXXXXXXXX'
  const whatsappNumber = '34XXXXXXXXX'

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hola, quiero información sobre los coches disponibles en ${brandName}.`
  )}`

  return (
    <>
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="mb-6 leading-tight">
                <span className="block text-3xl font-black tracking-wide text-white">
                  {brandName}
                </span>
                <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
                  Vehículos con garantía
                </span>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-white/80">
                Coches de segunda mano revisados, con precios competitivos,
                financiación disponible y atención personalizada para ayudarte a
                encontrar el vehículo que necesitas.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/80">
                  ✓ Coches revisados
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/80">
                  ✓ Garantía incluida
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/80">
                  ✓ Atención directa
                </span>
              </div>

              <div className="mt-8 flex items-center gap-5">
                <a href="#" aria-label="Facebook" className="text-2xl text-green-500 transition hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Instagram" className="text-2xl text-green-500 transition hover:text-white">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-2xl text-green-500 transition hover:text-white">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Enlaces</h3>

              <nav className="mt-6 flex flex-col gap-4 text-lg text-white/75">
                <Link to="/#vehiculos" className="transition hover:text-green-500">
                  Comprar coche
                </Link>
                <Link to="/#por-que-nosotros" className="transition hover:text-green-500">
                  ¿Por qué elegirnos?
                </Link>
                <Link to="/#contacto" className="transition hover:text-green-500">
                  Contacto
                </Link>
                <Link to="/legal" className="transition hover:text-green-500">
                  Aviso legal · Privacidad · Cookies
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Contacto</h3>

              <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/75">
                <p>
                  Dirección pendiente de confirmar<br />
                  Ciudad / Provincia
                </p>

                <p>
                  Lunes a viernes: 09:30 a 20:30h<br />
                  Sábado: 10:00 a 14:00h<br />
                  Domingo: Cerrado
                </p>

                <a
                  href={`tel:${phoneNumber}`}
                  className="block text-3xl font-black text-white transition hover:text-green-500"
                >
                  {phoneNumber}
                </a>

                <a
                  href="mailto:contacto@marca.com"
                  className="block text-green-500 transition hover:text-white"
                >
                  contacto@marca.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-2xl sm:p-8">
            <p className="text-2xl font-black">
              ¿Quieres comprar un coche o resolver una duda?
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              Escríbenos por WhatsApp, llámanos ahora o déjanos tu teléfono y te
              llamamos gratis.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-7 py-4 text-lg font-black text-white transition hover:bg-green-600"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="rounded-xl bg-blue-600 px-7 py-4 text-lg font-black text-white transition hover:bg-blue-700 shadow-lg"
              >
                Llamar ahora
              </a>

              <button
                type="button"
                onClick={() => setModalAbierto(true)}
                className="rounded-xl bg-orange-600 px-7 py-4 text-lg font-black text-white transition hover:bg-orange-700"
              >
                Te llamamos gratis
              </button>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-base text-white/60">
              © 2026 {brandName}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {modalAbierto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-4xl rounded-2xl bg-white p-8 text-slate-950 shadow-2xl sm:p-10">
            <button
              type="button"
              onClick={() => setModalAbierto(false)}
              className="absolute right-6 top-5 text-4xl text-slate-500 transition hover:text-slate-950"
              aria-label="Cerrar"
            >
              ×
            </button>

            <h2 className="pr-10 text-4xl font-black sm:text-5xl">
              ¿Quieres que te llamemos?
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Déjanos tus datos y te contactamos para ayudarte con la compra del
              coche.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Nombre completo"
                className="rounded-xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-orange-600"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                className="rounded-xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-orange-600"
              />
            </div>

            <label className="mt-6 flex items-start gap-3 text-base text-slate-700">
              <input type="checkbox" className="mt-1 h-5 w-5" />
              <span>
                Acepto la política de privacidad y el tratamiento de mis datos.
              </span>
            </label>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-orange-600 px-8 py-4 text-xl font-black text-white transition hover:bg-orange-700 sm:w-auto"
            >
              Llamadme
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer