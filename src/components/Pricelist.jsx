import '../styles/components/Class-tables.scss'

export default function Pricelist(){

  return(
    <div className="price-list">
      <h2 className="price-list-title">Árak</h2>
      <div className="price-cards-container">
        <div className="price-card">
          <h3 className="price-title">Csoportos órák</h3>
          <p className="price-detail">Minimum 4 fő részvételével</p>
          <p className="price-amount">2500 Ft / alkalom</p>
        </div>
        <div className="price-card">
          <h3 className="price-title">Egyéni úszás oktatás</h3>
          <p className="price-detail">45 perc</p>
          <p className="price-amount">10.000 Ft / alkalom</p>
        </div>
      </div>
    </div>

  )
}