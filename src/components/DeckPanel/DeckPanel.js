import React from 'react'
import "./DeckPanel.css"

const DeckPanel = () => {
    return (
        <div >
            <nav class="panel">
  <p class="panel-heading" >
    Deck Panel
  </p>
  <div class="panel-block"  >
      
    <p class="control has-icons-left">
      <input class="input" type="text" placeholder="Search"/>
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
 
  <a class="panel-block"  >
    <span class="panel-icon"  >
        
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Kanji 
  </a>
  <a class="panel-block"  >
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Kanji
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    minireset.css
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    jgthms.github.io
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    daniellowtw/infboard
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    mojs
  </a>
  <label class="panel-block">
    <input type="checkbox"/>
    remember me
  </label>
  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      Reset all filters
    </button>
  </div>
</nav>
        </div>
    )
}

export default DeckPanel
