import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const VolkswagenGolf = () => {
  return (
    <>
      <Navbar />
      <section className="px-6 py-32 text-center">
        <h1 className="text-5xl font-black">Volkswagen Golf</h1>
        <p className="mt-4 text-2xl text-slate-700">
          1.6 TDI Advance
        </p>
      </section>
      <Footer />
    </>
  )
}

export default VolkswagenGolf