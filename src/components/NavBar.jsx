
import {Link,  Outlet} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';


function NavBar() {
 const ref =useRef(null)
 const navRef = useRef(null)
 const [windowWidth, setWindowWidth] = useState(window.innerWidth)

 useEffect( () => {
  window.addEventListener('resize',function(){
    setWindowWidth(window.innerWidth)
  })

  return () => {
    window.removeEventListener('resize',function(){
      setWindowWidth(window.innerWidth)
    })
  }
 })

 
 
 function handleClick(){
  
  ref.current.classList.toggle('active')
  if(ref.current.classList.contains('active')){
    navRef.current.style.transform ='translate(-2% ,45%)'
  }
  else{
   navRef.current.style.transform = 'translate(102%, 45%)'
  }
 }

 function navBarRemove(){

  ref.current.classList.remove('active')
  navRef.current.style.transform = 'translate(102%,45%)'
 }




 return ( 
  <>
   <header>
  

      <Link to='.' className='the--planets'>
        The Planets
       </Link>

         <div ref={ref} onClick={handleClick} className='menu--bar '>
           <span></span>
           <span></span>
           <span></span>
          
         </div>

     <nav ref={navRef} >
      <ul className='nav--list'>
        <li onClick={navBarRemove} className='mercury--link'><Link  to='.'>Mercury</Link>

          {windowWidth < 670 &&  <span> &#707; </span>}

         </li>
        <li  onClick={navBarRemove} className='venus--link'><Link  to='venus'>Venus</Link>

          {windowWidth < 670 &&  <span> &#707; </span>}

         </li>
        <li  onClick={navBarRemove} className='earth--link'><Link to='earth'>Earth</Link> 

          {windowWidth < 670 &&  <span> &#707; </span>}

        </li>
        <li  onClick={navBarRemove} className='mars--link'><Link to='mars'>Mars</Link>

          {windowWidth < 670 &&  <span> &#707; </span>}

         </li>
        <li  onClick={navBarRemove} className='jupiter--link'><Link to='jupiter'>Jupiter</Link>

          {windowWidth < 670 &&  <span> &#707; </span>}

         </li>
        <li  onClick={navBarRemove} className='saturn--link'><Link to='saturn'>saturn</Link>

          {windowWidth < 670 &&  <span> &#707; </span>}

         </li>
        <li  onClick={navBarRemove} className='uranus--link'><Link to='uranus'>Uranus</Link> 

          {windowWidth < 670 &&  <span> &#707; </span>}

        </li>
        <li  onClick={navBarRemove} className='neptune--link'><Link to='neptune'>Neptune</Link>

         {windowWidth < 670 &&  <span> &#707; </span>}
        
        </li>
      </ul>

     </nav>
   </header>

   <Outlet />

   
  </>

  )
}

export default NavBar;
