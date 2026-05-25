import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const AudiA3 = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white px-6 pb-24 pt-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-black">Audi A3 Sportback</h1>
          <p className="mt-4 text-2xl text-slate-700">
            2.0 TDI S Line
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AudiA3