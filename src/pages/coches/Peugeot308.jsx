import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Peugeot308 = () => {
  const [imagenActiva, setImagenActiva] = useState(0)
  const [modalAbierto, setModalAbierto] = useState(false)
  const [acordeon, setAcordeon] = useState('Multimedia')

  const imagenes = [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    'https://images.unsplash.com/photo-1542282088-fe8426682b8f',
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c',
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d',
  ]

  const recomendados = [
    {
      nombre: 'Jeep Compass',
      version: '4Xe 1.3 PHEV 190CV Limited AT AWD',
      precioAntes: '22.490€',
      precio: '19.490€',
      cuota: 'Desde 302€/mes*',
      imagen: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341',
      datos: ['2023', '50.000 km', 'Híbrido', 'Automática'],
    },
    {
      nombre: 'Audi Q3',
      version: '35 TDI S Line',
      precioAntes: '21.900€',
      precio: '18.790€',
      cuota: 'Desde 292€/mes*',
      imagen: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
      datos: ['2019', '106.896 km', 'Diésel', 'Automática'],
    },
    {
      nombre: 'BMW X1',
      version: 'sDrive 18d Advantage',
      precioAntes: '23.990€',
      precio: '20.290€',
      cuota: 'Desde 316€/mes*',
      imagen: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      datos: ['2021', '74.200 km', 'Diésel', 'Manual'],
    },
    {
      nombre: 'SEAT Ateca',
      version: '1.5 TSI Style',
      precioAntes: '19.790€',
      precio: '16.590€',
      cuota: 'Desde 258€/mes*',
      imagen: 'https://images.unsplash.com/photo-1502877338535-766e1452684a',
      datos: ['2020', '88.000 km', 'Gasolina', 'Manual'],
    },
  ]

  const cambiarImagen = (direccion) => {
    setImagenActiva((prev) =>
      direccion === 'next'
        ? (prev + 1) % imagenes.length
        : (prev - 1 + imagenes.length) % imagenes.length
    )
  }

  const secciones = {
    'Ficha Técnica': ['Motor 1.2 PureTech', '130 CV', 'Tracción delantera', 'Etiqueta C'],
    Comfort: ['Climatizador', 'Control de crucero', 'Elevalunas eléctricos', 'Cierre centralizado'],
    Multimedia: [
      'Pantalla táctil a color',
      'Bluetooth',
      'USB delantero',
      'Control de audio en volante',
    ],
    Seguridad: ['ABS', 'ESP', 'Airbags frontales y laterales', 'Sensor de aparcamiento'],
    Interior: ['Tapicería en buen estado', 'Volante multifunción', 'Asientos cómodos'],
    Exterior: ['Llantas de aleación', 'Faros LED', 'Carrocería revisada'],
  }

  return (
    <>
      <Navbar />

      <section className="bg-white px-4 pb-24 pt-28 sm:px-6">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-4 text-sm text-slate-600">
            <span className="text-orange-600">Coches de segunda mano</span> › Peugeot › 308 › 1.2 PureTech 130CV Allure
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={imagenes[imagenActiva]}
                  alt="Peugeot 308"
                  className="h-[620px] w-full object-cover"
                />

                <button
                  onClick={() => cambiarImagen('prev')}
                  className="absolute left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-lg bg-white/80 text-4xl"
                >
                  ‹
                </button>

                <button
                  onClick={() => cambiarImagen('next')}
                  className="absolute right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-lg bg-white/80 text-4xl"
                >
                  ›
                </button>
              </div>

              <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
                {imagenes.map((imagen, index) => (
                  <button
                    key={imagen}
                    onClick={() => setImagenActiva(index)}
                    className={`h-24 min-w-36 overflow-hidden rounded-lg border-4 ${
                      imagenActiva === index ? 'border-orange-600' : 'border-transparent'
                    }`}
                  >
                    <img src={imagen} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-slate-200 p-6">
                <p className="mb-4 text-center text-xl font-bold">📍 Madrid - Vehículos con garantía</p>

                <div className="grid gap-4 sm:grid-cols-4 lg:grid-cols-7">
                  {[
                    ['⛽', 'Combustible', 'Gasolina'],
                    ['⚙️', 'Potencia', '130 CV'],
                    ['🔀', 'Cambio', 'Manual'],
                    ['🎨', 'Color', 'Azul'],
                    ['🚪', 'Puertas / Plazas', '5 / 5'],
                    ['📉', 'Consumo', '5.2 L/100'],
                    ['✅', 'I.V.A.', 'Deducible No'],
                  ].map((item) => (
                    <div key={item[1]} className="rounded-xl bg-white p-4 text-center shadow ring-1 ring-slate-100">
                      <div className="text-3xl">{item[0]}</div>
                      <p className="mt-3 text-sm text-slate-500">{item[1]}</p>
                      <p className="mt-2 font-black">{item[2]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-white p-6 shadow ring-1 ring-slate-100">
                <h2 className="mb-6 text-3xl font-black">Equipamiento</h2>

                {Object.entries(secciones).map(([titulo, items]) => (
                  <div key={titulo} className="border-b border-slate-200 py-4">
                    <button
                      onClick={() => setAcordeon(acordeon === titulo ? '' : titulo)}
                      className="flex w-full items-center justify-between text-left text-xl font-bold italic"
                    >
                      {titulo}
                      <span>{acordeon === titulo ? '⌃' : '⌄'}</span>
                    </button>

                    {acordeon === titulo && (
                      <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-slate-700">
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-slate-50 p-8">
                <h2 className="text-3xl font-black">Vehículo revisado</h2>
                <p className="mt-4 text-lg text-slate-700">
                  Este coche ha sido revisado y preparado para garantizar que el vehículo está en perfectas condiciones.
                </p>
                <ul className="mt-6 space-y-3 text-lg">
                  <li>✓ Revisión mecánica completa</li>
                  <li>✓ Certificación de kilometraje</li>
                  <li>✓ Sin daños estructurales</li>
                  <li>✓ Libre de cargas</li>
                  <li>✓ Limpieza a fondo</li>
                </ul>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <h1 className="text-5xl font-black">Peugeot 308</h1>
              <p className="mt-3 text-2xl">1.2 PureTech 130CV Allure</p>

              <div className="mt-6 grid grid-cols-4 rounded-xl bg-slate-100 text-center text-slate-700">
                <span className="p-3">2019</span>
                <span className="p-3">98.000 km</span>
                <span className="p-3">Gasolina</span>
                <span className="p-3">Manual</span>
              </div>

              <div className="mt-8 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
                <div className="flex justify-between">
                  <div>
                    <p className="text-xl">Precio en oferta</p>
                    <p className="mt-2 text-lg line-through text-slate-500">12.900€</p>
                    <p className="text-5xl font-black">10.990€</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xl">Desde</p>
                    <p className="mt-8 text-4xl font-black">179€/mes*</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/34XXXXXXXXX?text=Hola,%20quiero%20información%20sobre%20el%20Peugeot%20308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block rounded-xl bg-green-500 px-6 py-5 text-center text-xl font-black text-white hover:bg-green-600"
                >
                  Me interesa por WhatsApp
                </a>

                <button
                  onClick={() => setModalAbierto(true)}
                  className="mt-4 w-full rounded-xl bg-orange-600 px-6 py-5 text-xl font-black text-white hover:bg-orange-700"
                >
                  Te llamamos gratis
                </button>
              </div>

              <div className="mt-8 rounded-2xl bg-white p-8 shadow ring-1 ring-slate-100">
                <h2 className="text-3xl font-black">Garantía del vehículo</h2>
                <p className="mt-4 text-lg">
                  Este vehículo cuenta con hasta <strong>3 años de garantía*</strong>
                </p>

                <div className="mt-6 rounded-xl bg-orange-50 p-5 text-orange-700">
                  <p className="font-black">Garantía Premium extendida 3 años</p>
                  <p className="mt-2 text-2xl font-black">1.790€</p>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    <li>✓ Bloque motor y caja de cambios</li>
                    <li>✓ Sistema electrónico</li>
                    <li>✓ Vehículo de sustitución</li>
                    <li>✓ Cobertura en la Unión Europea</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid overflow-hidden rounded-xl border border-slate-300 lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-black">Madrid - Centro vehículos</h3>
                <p className="mt-6 text-lg">
                  Lunes a viernes: 09:30 a 20:30h<br />
                  Sábado: 10:00 a 14:00h y 16:30 a 20:30h<br />
                  Domingo: Cerrado
                </p>
                <p className="mt-6 text-lg">Email: contacto@marca.com</p>
              </div>

              <div className="flex min-h-[300px] items-center justify-center bg-slate-100 text-center text-slate-500">
                Aquí puedes insertar Google Maps
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-black">¿Quieres comprar un coche?</h3>
              <p className="mt-4 text-lg">Si tienes cualquier duda, llámanos</p>
              <a href="tel:34XXXXXXXXX" className="mt-3 text-5xl text-orange-600">
                34 XXX XXX XXX
              </a>
              <button
                onClick={() => setModalAbierto(true)}
                className="mt-8 rounded-xl border border-orange-600 px-8 py-4 font-bold text-orange-600 hover:bg-orange-50"
              >
                ☎ Te llamamos gratis
              </button>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="mb-8 text-4xl font-black">Vehículos recomendados</h2>

            <div className="grid gap-8 lg:grid-cols-4">
              {recomendados.map((coche) => (
                <article key={coche.nombre} className="rounded-2xl bg-white shadow ring-1 ring-slate-100">
                  <img src={coche.imagen} alt={coche.nombre} className="h-56 w-full rounded-t-2xl object-cover" />

                  <div className="p-5">
                    <div className="flex justify-between">
                      <p>{coche.cuota}</p>
                      <div className="text-right">
                        <p className="text-sm line-through text-slate-500">{coche.precioAntes}</p>
                        <p className="text-2xl font-black">{coche.precio}</p>
                      </div>
                    </div>

                    <h3 className="mt-4 text-2xl font-black">{coche.nombre}</h3>
                    <p className="mt-1 text-slate-600">{coche.version}</p>

                    <div className="mt-5 grid grid-cols-2 gap-2 text-sm text-slate-600">
                      {coche.datos.map((dato) => (
                        <span key={dato}>{dato}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {modalAbierto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-5xl rounded-xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setModalAbierto(false)}
              className="absolute right-6 top-5 text-4xl text-slate-500"
            >
              ×
            </button>

            <h2 className="text-5xl font-black">¿Quieres que te llamemos?</h2>
            <p className="mt-6 text-xl">Todos los campos son obligatorios</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Nombre completo"
                className="rounded-lg border border-slate-300 px-5 py-4 text-xl"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="rounded-lg border border-slate-300 px-5 py-4 text-xl"
              />
            </div>

            <label className="mt-8 flex gap-3 text-lg">
              <input type="checkbox" />
              Acepto la política de privacidad
            </label>

            <button className="mt-8 rounded-xl bg-orange-600 px-12 py-4 text-xl font-black text-white hover:bg-orange-700">
              Llamadme
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Peugeot308