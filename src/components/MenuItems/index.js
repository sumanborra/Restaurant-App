import {useState} from 'react'
import {MdLens} from 'react-icons/md'

import {FiPlus, FiMinus} from 'react-icons/fi'

import './index.css'

const MenuItems = props => {
  const [quantity, setQuantity] = useState(0)

  const {listOfItems, items, increaseItems, decreaseItems} = props
  const increase = () => {
    increaseItems()
    setQuantity(prevValue => prevValue + 1)
  }
  const decreas = () => {
    decreaseItems()
    if (quantity < 1) {
      setQuantity(0)
    } else {
      setQuantity(prevValue => prevValue - 1)
    }
  }
  const {
    dishAvailability,
    dishCalories,
    dishCurrency,
    dishDescription,
    dishImage,
    dishName,
    dishPrice,
    addonCat,
  } = listOfItems
  const increaseButton =
    dishAvailability === true ? (
      <div className="items-increses-container">
        <button type="button" onClick={decreas} className="menu-buttons">
          -
        </button>
        <p className="item-increase-text">{quantity}</p>{' '}
        <button type="button" onClick={increase} className="menu-buttons">
          +
        </button>
      </div>
    ) : (
      <p className="not-available-text">Not available</p>
    )
  const iconStyles = dishAvailability === true ? 'custom-style' : 'red-icon'
  return (
    <li className="list-item-menu">
      <div className="item-name-logo-container">
        <MdLens size={20} className={`custom-styles ${iconStyles}`} />
        <div className="item-name-container">
          <h5>{dishName}</h5>

          <p className="dish-currency">
            {dishCurrency} {dishPrice}
          </p>
          <p className="dish-description">{dishDescription}</p>
          {increaseButton}
          {addonCat.length > 0 && (
            <p className="customization-text">Customizations available</p>
          )}
        </div>
      </div>
      <p className="calories-text">{dishCalories} calories</p>
      <img src={dishImage} alt={dishName} className="dish-image" />
    </li>
  )
}
export default MenuItems
