const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2.5">
        
        {/* Marca */}
        <a href="#inicio" className="flex items-center">
          <div className="leading-tight">
            <span className="block text-lg font-black tracking-wide text-slate-950 md:text-xl">
              NOMBRE DE LA MARCA
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500 md:text-[11px]">
              Vehículos con garantía
            </span>
          </div>
        </a>

        {/* Menú */}
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="/#vehiculos"
            className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
          >
            Comprar coche
          </a>

          <a
            href="/#por-que-nosotros"
            className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
          >
            ¿Por qué Marca?
          </a>

          <a
            href="/#contacto"
            className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
          >
            Contacto
          </a>

          <a
  href="/codigo-descuento"
  className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
>
  Código Descuento
</a>
        </nav>

        

        {/* Botón */}
        <a
  href="tel:34XXXXXXXXX"
  className="rounded-lg bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700 md:px-5 md:text-sm"
>
  Llamar ahora
</a>


      </div>
    </header>
  )
}

export default Navbar