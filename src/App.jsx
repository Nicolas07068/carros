import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"


export default function App() {
  return (
   <main className="min-h-svh bg-offwhite py-20 px-6 ">
    <section>
      <div className="bg-orange p-12 rounded-t-lg">
        <img src={iconSedans} alt="icone do carros sedans" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
        <p className="font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a className="font-lexend  bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange" href="https://www.webmotors.com.br/carros/estoque?idcmp=s08%3Ac03%3A4059ff00caaf42d9a1545d0b89e0a37f&tipoveiculo=carros&anunciante=Concession%C3%A1ria%7CLoja&carroceria=Sed%C3%A3&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZx2dP-9KEE8Q3I4h-u2j214rIXag2sEatn9JfNlqR0ciHpt2uKz7gZxoChcgQAvD_BwE"  target="_blank">Ver Mais</a>
      </div>

      <div className="bg-green p-12">
        <img src={iconSuvs} alt="icone do carro suv" className="mb-7" />  
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
        <p className="font-lexend mb-7 text-offwhite ">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/carros/estoque?idcmp=s08%3Ac03%3A8bcd6c70eb2a4017aac2e34222708902&tipoveiculo=carros&anunciante=Loja%7CConcession%C3%A1ria&carroceria=Utilit%C3%A1rio+esportivo&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZxwRcBbVojHTm7kYVxrZJqzvOgzxECIxjY_p1nk53hCSK5V-oV0rQ1RoCRSEQAvD_BwE"  target="_blank">Ver Mais</a>
      </div>

      <div className="bg-dark-green p-12 rounded-b-lg">
        <img src={iconLuxury} alt="icone do carros luxo"className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg ">Luxuosos</h2>
        <p className="font-lexend mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver Mais</a>
      </div>
    </section>
   </main>
  )
}
