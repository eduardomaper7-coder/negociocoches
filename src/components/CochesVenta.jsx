import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { coches } from '../data/coches'

const CochesVenta = () => {
  const navigate = useNavigate()
  const whatsappNumber = '34XXXXXXXXX'
  const phoneNumber = '34XXXXXXXXX'
  const [imagenActiva, setImagenActiva] = useState({})

  const cambiarImagen = (e, index, direccion, total) => {
    e.stopPropagation()

    setImagenActiva((prev) => {
      const actual = prev[index] || 0
      const siguiente =
        direccion === 'next'
          ? (actual + 1) % total
          : (actual - 1 + total) % total

      return { ...prev, [index]: siguiente }
    })
  }

  return (
    <section id="vehiculos" className="relative bg-slate-50 pb-24 pt-40">
  <div className="absolute -top-[140px] left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block h-[140px] w-full"
    viewBox="0 0 1440 140"
    preserveAspectRatio="none"
  >
    <path
      d="M0,120 
         C220,40 420,150 720,70 
         C980,10 1180,110 1440,50 
         L1440,140 
         L0,140 Z"
      fill="#f8fafc"
    />
  </svg>
</div>

  <div className="mx-auto max-w-[1650px] px-6"></div>
      <div className="mx-auto max-w-[1650px] px-6">
        <div className="mb-20 -mt-12 text-center">
  <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-green-700">
    OFERTAS EXCLUSIVAS DISPONIBLES
  </span>

  <h2 className="mt-6 text-6xl font-black tracking-tight text-slate-950">
    Encuentra tu próximo coche
  </h2>

  <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-slate-600">
    Vehículos revisados, garantía certificada y precios especiales por tiempo limitado.
    Descubre oportunidades reales para estrenar coche con total confianza.
  </p>
</div>

        <div className="grid gap-12 lg:grid-cols-2">
          {coches.map((coche, index) => {
            const imagenActual = imagenActiva[index] || 0

            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hola, quiero información sobre el ${coche.nombre}`
            )}`

            return (
              <article
                key={coche.slug}
                onClick={() => navigate(`/coches/${coche.slug}`)}
                className="flex cursor-pointer flex-col overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={coche.imagenes[imagenActual]}
                    alt={coche.nombre}
                    className="h-full w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={(e) =>
                      cambiarImagen(e, index, 'prev', coche.imagenes.length)
                    }
                    className="absolute left-5 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/80 text-2xl"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={(e) =>
                      cambiarImagen(e, index, 'next', coche.imagenes.length)
                    }
                    className="absolute right-5 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/80 text-2xl"
                  >
                    ›
                  </button>

                  {coche.vendido && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                      <span className="rounded-xl border-4 border-white px-8 py-3 text-4xl font-black text-white">
                        VENDIDO
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <div className="flex justify-between gap-6">
                    <p className="text-xl">{coche.cuota}</p>

                    <div className="text-right">
                      <p className="text-base line-through text-slate-500">
                        {coche.precioAntes}
                      </p>
                      <p className="text-4xl font-black text-green-600">
                        {coche.precio}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-5 text-4xl font-black">
                    {coche.nombre}
                  </h3>

                  <p className="mt-2 text-xl text-slate-700">
                    {coche.version}
                  </p>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {coche.descripcion}
                  </p>

                  <div className="mt-6 grid grid-cols-4 gap-4 text-lg">
                    <span>{coche.ano}</span>
                    <span>{coche.km}</span>
                    <span>{coche.combustible}</span>
                    <span>{coche.cambio}</span>
                  </div>

                  <div className="mt-auto flex gap-4 pt-8">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 rounded-xl bg-green-500 px-6 py-4 text-center font-bold text-white hover:bg-green-600"
                    >
                      WhatsApp
                    </a>

                    <a
                      href={`tel:${phoneNumber}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 rounded-xl bg-orange-600 px-6 py-4 text-center font-bold text-white hover:bg-orange-700"
                    >
                      Llamar
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CochesVenta