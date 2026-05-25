import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MercedesClaseA = () => {
  return (
    <>
      <Navbar />
      <section className="px-6 py-32 text-center">
        <h1 className="text-5xl font-black">Mercedes Clase A</h1>
        <p className="mt-4 text-2xl text-slate-700">
          A180 Urban
        </p>
      </section>
      <Footer />
    </>
  )
}

export default MercedesClaseA