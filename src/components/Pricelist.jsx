import '../styles/components/TimeTable.scss'
import { useTranslation } from 'react-i18next'

export default function Pricelist(){

  const { t } = useTranslation()

  return(
    <div className="price-list">
      <h2 className="price-list-title">{t("prices")}</h2>
      <div className="price-cards-container">
        <div className="price-card">
          <h3 className="price-title">{t("groupClass")}</h3>
          <p className="price-detail">{t("groupSize")}</p>
          <p className="price-amount">{t("groupPrice")}</p>
        </div>
        <div className="price-card">
          <h3 className="price-title">{t("oneOnone")}</h3>
          <p className="price-detail">{t("oneOnoneTime")}</p>
          <p className="price-amount">{t("oneOnOnePrice")}</p>
        </div>
      </div>
    </div>

  )
}