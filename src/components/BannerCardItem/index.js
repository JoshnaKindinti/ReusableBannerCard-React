// Write your code here.
import './index.css'
const BannerCardItem = props => {
  const {cardData} = props
  const {headerText, description, className} = cardData
  return (
    <li className={`card-block ${className}`}>
      <div>
        <h1 className="title">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
