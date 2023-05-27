import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imageUrl, className} = cardDetails
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
    </li>
  )
}

export default CardItem
