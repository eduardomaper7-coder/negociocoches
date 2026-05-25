import { useNavigate } from 'react-router-dom'

const BlogCoches = () => {
  const navigate = useNavigate()

  const blogs = [
    {
      titulo: 'Cómo elegir un coche de segunda mano sin equivocarte',
      descripcion:
        'Las claves para revisar kilometraje, historial, garantía y estado real antes de comprar.',
      imagen:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titulo: 'Financiación inteligente: paga menos por tu próximo coche',
      descripcion:
        'Consejos prácticos para financiar tu vehículo sin pagar de más.',
      imagen:
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titulo: 'Qué revisar antes de comprar un vehículo seminuevo',
      descripcion:
        'Todo lo que debes comprobar para comprar con seguridad y tranquilidad.',
      imagen:
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <section className="bg-slate-50 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-green-700">
            Blog y consejos
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-950">
            Aprende antes de comprar
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-xl text-slate-600">
            Información útil, consejos reales y guías prácticas para tomar la
            mejor decisión al comprar tu próximo coche.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article
              key={index}
              onClick={() => navigate('/blog')}
              className="cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={blog.imagen}
                alt={blog.titulo}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-950">
                  {blog.titulo}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {blog.descripcion}
                </p>

                <button className="mt-6 font-black text-green-700">
                  Leer artículo →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogCoches