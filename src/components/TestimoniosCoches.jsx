const TestimoniosCoches = () => {
  const testimonios = [
    {
      nombre: 'Carlos M.',
      ciudad: 'Madrid',
      texto:
        'Compré mi coche hace 4 meses y todo fue perfecto. Transparencia total, trato cercano y vehículo impecable.',
      coche: 'BMW X6',
    },
    {
      nombre: 'Laura G.',
      ciudad: 'Valencia',
      texto:
        'Me ayudaron en todo el proceso. Financiación clara, sin sorpresas y entrega rapidísima.',
      coche: 'Audi A3',
    },
    {
      nombre: 'David R.',
      ciudad: 'Sevilla',
      texto:
        'Venía con dudas sobre comprar de segunda mano y salí convencido. Muy profesionales.',
      coche: 'Mercedes Clase A',
    },
  ]

  return (
    <section className="bg-white px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-green-700">
            Opiniones reales
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-950">
            Clientes que ya confiaron
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-xl text-slate-600">
            La mejor garantía es la experiencia de quienes ya encontraron su coche con nosotros.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="rounded-[2rem] bg-slate-50 p-8 shadow-xl ring-1 ring-slate-200"
            >
              <div className="mb-6 flex text-amber-400 text-2xl">
                ★★★★★
              </div>

              <p className="text-lg leading-8 text-slate-700">
                “{testimonio.texto}”
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-xl font-black text-slate-950">
                  {testimonio.nombre}
                </p>

                <p className="text-slate-500">
                  {testimonio.ciudad}
                </p>

                <p className="mt-2 font-semibold text-green-700">
                  Compró: {testimonio.coche}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-slate-950 p-10 text-center text-white">
          <h3 className="text-4xl font-black">
            +Número clientes satisfechos
          </h3>

          <p className="mt-4 text-xl text-white/75">
            Vehículos entregados con garantía y máxima transparencia
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestimoniosCoches