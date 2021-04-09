import React, {useState} from 'react'
import './DropDownButton.css'

const DropDownButton = () => {
    const [dropDown, setDropDown] = useState(false)


    const handleDropDown = () => {
      setDropDown(!dropDown)
    }

    return (
        <div>

<div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button onClick={handleDropDown}  class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span  >Dropdown button</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  {dropDown ? <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <span href="#" class="dropdown-item">
        Dropdown item
      </span>
      <span class="dropdown-item">
        Other dropdown item
      </span>
      <span href="#" class="dropdown-item is-active">
        Active dropdown item
      </span>
      <span href="#" class="dropdown-item">
        Other dropdown item
      </span>
      <hr class="dropdown-divider"/>
      <span href="#" class="dropdown-item">
        With a divider
      </span>
    </div>
  </div>: null}
</div>
          
         </div>
    )
}

export default DropDownButton
