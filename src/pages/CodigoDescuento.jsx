import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CodigoDescuento = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-50 px-4 pb-24 pt-32 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-green-700">
              Programa de recomendación
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
              Recomienda un coche y gana 100€
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-600">
              Genera tu código descuento y compártelo con un amigo, familiar o
              conocido que esté pensando en comprar un coche. Si esa persona
              compra un vehículo usando tu código, tú recibes <strong>100€</strong>.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              El código no es para uso propio: está pensado para que puedas
              recomendar nuestra marca a otra persona y beneficiarte cuando esa
              recomendación se convierte en una venta.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-slate-200">
                <p className="text-3xl font-black text-green-600">01</p>
                <p className="mt-3 font-bold">Rellena tus datos</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-slate-200">
                <p className="text-3xl font-black text-green-600">02</p>
                <p className="mt-3 font-bold">Comparte tu código</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-slate-200">
                <p className="text-3xl font-black text-green-600">03</p>
                <p className="mt-3 font-bold">Gana 100€</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-200 sm:p-8">
            <h2 className="text-3xl font-black text-slate-950">
              Genera tu código descuento
            </h2>

            <p className="mt-3 text-slate-600">
              Completa el formulario y te prepararemos un código para compartir.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Apellidos
                </label>
                <input
                  type="text"
                  placeholder="Tus apellidos"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Número de teléfono
                </label>
                <input
                  type="tel"
                  placeholder="Tu teléfono"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tuemail@email.com"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-green-600"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input type="checkbox" className="mt-1 h-5 w-5" />
                <span>
                  Confirmo que el código será compartido con otra persona
                  interesada en comprar un coche y acepto la política de
                  privacidad.
                </span>
              </label>

              <button
                type="button"
                className="w-full rounded-xl bg-green-600 px-6 py-4 text-lg font-black text-white transition hover:bg-green-700"
              >
                Generar código descuento
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CodigoDescuento