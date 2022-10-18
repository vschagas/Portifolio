import React from 'react'

const Body = () => {

  return (
    <div className='body-container'>
      <div className='text-container'>
        {/* <p>Coding is <span class="typed-text"></span><span class="cursor">&nbsp;</span></p> */}
        <div className="dev-name">
          <p>Olá, meu nome é</p>
          <h1>Valmir Chagas</h1>
          <h1>Desenvolvedor</h1>
        </div>
        <p>sou desenvolvedor back-end (e ocasionalmente front-end)</p>
        <button className='download-button'>Download CV</button>
      </div>
      <div className='image-container'>
        {/* <img /> */}
      </div>
    </div>
  )
}

export default Body