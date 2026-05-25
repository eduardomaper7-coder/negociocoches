const Hero = () => {
  const whatsappNumber = '34XXXXXXXXX'
  const phoneNumber = '34XXXXXXXXX'
  const brandName = 'NOMBRE DE LA MARCA'
  const carTitle = 'BMW X6 M Sport'

  const whatsappMessage = encodeURIComponent(
    `Hola, quiero información sobre ${carTitle} y otros coches disponibles en ${brandName}.`
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-coches-placeholder.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/45"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 pb-6 pt-20 sm:px-6 sm:pb-10 sm:pt-24 lg:grid-cols-2 lg:gap-14 lg:pb-14 lg:pt-28">
        <div className="text-center lg:text-left">
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white/85 backdrop-blur sm:text-sm">
              Venta de coches con garantía
            </span>

            <span className="mt-4 text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
              {brandName}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Tu coche al mejor precio y con garantía
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg md:text-xl lg:leading-8">
            Encuentra vehículos revisados, ofertas exclusivas y atención directa
            para comprar con confianza.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 text-base font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-green-600 sm:w-auto sm:px-8 sm:text-lg"
              aria-label="Consultar coches por WhatsApp"
            >
              <img
                src="/whatsapp.png"
                alt=""
                className="h-6 w-6 sm:h-7 sm:w-7"
                aria-hidden="true"
              />
              Consultar por WhatsApp
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-white px-6 py-4 text-base font-extrabold text-slate-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto sm:px-8 sm:text-lg"
              aria-label={`Llamar a ${brandName}`}
            >
              Llamar ahora
            </a>
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="relative w-full max-w-lg rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <div className="absolute -top-5 left-6 z-20 rounded-full bg-red-600 px-5 py-2 text-sm font-black uppercase tracking-wide text-white shadow-xl">
              Oferta Exclusiva
            </div>

            <div className="relative h-[34rem] overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-xl">
              <img
                src="/coche-oferta-placeholder.webp"
                alt={carTitle}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/75"></div>

              {/* Descuento */}
              <div className="absolute right-5 top-5 z-10 text-right">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-white/80 drop-shadow">
                  Descuento especial
                </p>
                <p className="mt-1 text-5xl font-black leading-none text-white drop-shadow-2xl">
                  X€
                </p>
              </div>

              {/* Info inferior */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <div className="mb-4 text-white">
                  <h3 className="text-3xl font-black leading-tight text-amber-300 drop-shadow-2xl">
  {carTitle}
</h3>
                  <p className="mt-1 text-sm font-medium text-white/80">
                    Oferta destacada con garantía incluida
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-slate-950/65 p-5 text-white shadow-2xl backdrop-blur-md">
                  <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                    La oferta termina en
                  </p>

                  <div className="mt-4 grid grid-cols-4 gap-3 text-center">
                    <div className="rounded-xl bg-white/10 p-3">
                      <span className="block text-2xl font-black">02</span>
                      <span className="text-xs text-white/60">Días</span>
                    </div>

                    <div className="rounded-xl bg-white/10 p-3">
                      <span className="block text-2xl font-black">14</span>
                      <span className="text-xs text-white/60">Horas</span>
                    </div>

                    <div className="rounded-xl bg-white/10 p-3">
                      <span className="block text-2xl font-black">35</span>
                      <span className="text-xs text-white/60">Min</span>
                    </div>

                    <div className="rounded-xl bg-white/10 p-3">
                      <span className="block text-2xl font-black">20</span>
                      <span className="text-xs text-white/60">Seg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-2xl transition hover:scale-110 hover:bg-green-600 sm:h-16 sm:w-16"
        aria-label="Escribir por WhatsApp"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
      </a>

      
    </section>
  )
}

export default Hero