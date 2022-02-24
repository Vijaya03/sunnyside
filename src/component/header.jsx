import  {React, Component , useState,useEffect}  from 'react';
import '../css/header.css';
function Header() {
    const [hideclass , setHide] = useState(false);
    return <header>
                <div className="container">
                    <nav className="nav">
                        <span className="logo">sunnyside</span>
                        <span onClick={(e)=>{ setHide(!hideclass);}}>
                            <svg width="24"className="menu" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
                        </span>
                        <ul>
                            <li><a >Contact</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Services</a></li>
                            <li><a >About</a></li>
                        </ul> 
                    </nav>
                    <div className="main">
                        <p className="main-head">WE ARE CREATIVE</p><br/>
                    </div>
                    <p className="arrow">
                        <svg width="36" viewBox="0 0 60 70" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
                    </p> 
                   
                </div>
                <style jsx>{`
                    ul{
                        display: ${hideclass ? 'none' : 'flex'}
                    }
                    @media only screen and (max-width:375px){
                        nav{
                            display:inline;
                        }
                        ul{
                            display: ${hideclass ? 'flex' : 'none'}
                        }
                  }
                `}
                 
                </style>
        </header>
        
        ;
  }
export default Header;
