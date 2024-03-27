import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"


export default function App() {
  return (
   <main className="min-h-svh bg-offwhite py-20 px-6">
    <section>
      <div className="bg-orange">
        <img src={iconSedans} alt="icone do carros sedans" />
        <h2 className="font-shoulders">Sedans</h2>
        <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a href="https://www.webmotors.com.br/carros/estoque?idcmp=s08%3Ac03%3A4059ff00caaf42d9a1545d0b89e0a37f&tipoveiculo=carros&anunciante=Concession%C3%A1ria%7CLoja&carroceria=Sed%C3%A3&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZx2dP-9KEE8Q3I4h-u2j214rIXag2sEatn9JfNlqR0ciHpt2uKz7gZxoChcgQAvD_BwE"  target="_blank">Ver Mais</a>
      </div>

      <div className="bg-green">
        <img src={iconSuvs} alt="icone do carro suv" />
        <h2 className="font-shoulders">SUVs</h2>
        <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a href="https://www.webmotors.com.br/carros/estoque?idcmp=s08%3Ac03%3A8bcd6c70eb2a4017aac2e34222708902&tipoveiculo=carros&anunciante=Loja%7CConcession%C3%A1ria&carroceria=Utilit%C3%A1rio+esportivo&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZxwRcBbVojHTm7kYVxrZJqzvOgzxECIxjY_p1nk53hCSK5V-oV0rQ1RoCRSEQAvD_BwE"  target="_blank">Ver Mais</a>
      </div>

      <div className="bg-dark-green">
        <img src={iconLuxury} alt="icone do carros luxo" />
        <h2 className="font-shoulders">Luxuosos</h2>
        <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver Mais</a>
      </div>
    </section>
   </main>
  )
}
