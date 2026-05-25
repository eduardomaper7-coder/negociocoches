import { useState } from 'react'

const PorQueMarca = () => {
  const brandName = 'NOMBRE DE LA MARCA'

  const imagenes = [
    '/equipo-1.webp',
    '/equipo-2.webp',
    '/equipo-3.webp',
  ]

  const [imagenActiva, setImagenActiva] = useState(0)

  const cambiarImagen = (direccion) => {
    setImagenActiva((prev) =>
      direccion === 'next'
        ? (prev + 1) % imagenes.length
        : (prev - 1 + imagenes.length) % imagenes.length
    )
  }

  return (
    <section
      id="por-que-nosotros"
      className="bg-slate-50 px-4 py-24 text-slate-950 sm:px-6"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-green-700">
            ¿Por qué {brandName}?
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
            Trato cercano, coches revisados y confianza real
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Detrás de cada vehículo hay un equipo que revisa, prepara y asesora
            de forma personalizada. Nuestro objetivo es que compres tu coche con
            seguridad, claridad y sin sorpresas.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200">
              <p className="text-3xl font-black text-green-700">01</p>
              <h3 className="mt-3 text-xl font-black">
                Vehículos revisados
              </h3>
              <p className="mt-2 text-slate-600">
                Comprobamos estado, documentación y condiciones antes de la entrega.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200">
              <p className="text-3xl font-black text-green-700">02</p>
              <h3 className="mt-3 text-xl font-black">
                Atención directa
              </h3>
              <p className="mt-2 text-slate-600">
                Hablas con personas reales para resolver dudas y elegir bien.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200">
              <p className="text-3xl font-black text-green-700">03</p>
              <h3 className="mt-3 text-xl font-black">
                Garantía incluida
              </h3>
              <p className="mt-2 text-slate-600">
                Compra con tranquilidad gracias a nuestra garantía en vehículos.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200">
              <p className="text-3xl font-black text-green-700">04</p>
              <h3 className="mt-3 text-xl font-black">
                Precio competitivo
              </h3>
              <p className="mt-2 text-slate-600">
                Seleccionamos coches con la mejor relación calidad-precio.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl">
            <img
              src={imagenes[imagenActiva]}
              alt={`Equipo de ${brandName}`}
              className="h-[520px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <button
            type="button"
            onClick={() => cambiarImagen('prev')}
            className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl text-3xl font-bold text-slate-950 transition hover:scale-105"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => cambiarImagen('next')}
            className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl text-3xl font-bold text-slate-950 transition hover:scale-105"
          >
            ›
          </button>

          <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Equipo y atención personalizada
            </p>

            <p className="mt-2 text-2xl font-black text-slate-950">
              Personas reales detrás de cada venta
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PorQueMarca