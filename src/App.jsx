import Sedans from "./components/Sedans"
import Suvs from "./components/Suvs"
import Luxury from "./components/Luxury"


export default function App() {
  return (
   <main className="min-h-svh bg-offwhite py-20 px-6 antialised lg:flex justify-center items-center">
    <section className="lg:flex max-w-[920px]">
      <Sedans />
      <Suvs />
      <Luxury />
    </section>
   </main>
  )
}
