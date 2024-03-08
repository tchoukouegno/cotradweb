import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/index.css';
import CoTradSarlLogoV1 from "./assets/logo/CoTradSarlLogoV1.jpg";
import paquebot from "./assets/img/paquebot.jpeg";
import CoTradSarlLogoV4 from "./assets/logo/CoTradSarlLogoV4.png";
import facebook from './assets/icons/facebook.svg';
import instagram from './assets/icons/instagram.svg';
import linkedin from './assets/icons/linkedin.svg';
import timeIcon from './assets/icons/timeIcon.svg';
import envelopeRegular from './assets/icons/envelopeRegular.svg';
import phoneSolid from './assets/icons/phoneSolid.svg';
import boat from './assets/icons/boat.svg';
import ancre from './assets/icons/ancre.svg';
import air from './assets/icons/air.svg';
import car from './assets/icons/car.svg';
import backgdLogistics from './assets/img/backgdLogistics.svg';
import kaabaSolid from './assets/icons/kaabaSolid.svg';
import moneyBillSolid from './assets/icons/moneyBillSolid.svg';
import newZeland from './assets/img/newZeland.svg';
import girlCardboat from './assets/img/girlCardboat.svg';
import carton from './assets/img/carton.jpeg';
import teamEmployeesCheckingStock from './assets/img/teamEmployeesCheckingStock.jpg';
import closeUpDeliveryPerson from './assets/img/closeUpDeliveryPerson.jpg';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <section>

          <div className='infos'>

            <div className='logo-name'>

              <img src={CoTradSarlLogoV1} loading="lazy" className='logoV1'/>

              <span className='logo-text'>cotrad sarl</span>


            </div>

            <div className='info-bx'>

               <div className='time'>

                  <div className='time-icon'> <img src={timeIcon} className='clock'/></div>

                  <div className='time-work'>

                      <span>Lun-Sam 9h-18H</span>
                      <span>Dimanche fermé</span>

                  </div>

                </div>

                <div className='time'>

                  <div className='time-icon'><img src={envelopeRegular} className='clock'/></div>

                  <div className='time-work'>

                      <span>Email</span>
                      <span>contact@cotradsarl.com</span>

                  </div>

                </div>

                <div className='time'>

                  <div className='time-icon'><img src={phoneSolid} className='clock'/></div>

                  <div className='time-work'>

                      <span>Tél / Portable</span>
                      <span>+237 673673267</span>
                      <span>+237 654167168 - 692500261</span>

                  </div>

                </div>

            </div>

          </div>

          <header>

            <div className='nav-content'>

                <nav>

                  <li>accueil</li>
                  <li>a propos de nous</li>
                  <li>pages</li>
                  <li>contacts</li>

                </nav>

                
                <div className='social-media'>

                  <img src={instagram} className='icon-media'/>
                  <img src={facebook} className='icon-media'/>
                  <img src={linkedin} className='icon-media'/>



                </div>

                {/* <div className='request'>


                </div> */}




            </div>

           
            <div className='header-filtre' >

              <img src={paquebot} loading="lazy" alt="" className='header-background'/>

              <div className='filtre'></div>

              <div className='filter-content'>

                <div>

                  <h1 className='header-title'>transitaire et commissionnaire de transport international</h1>

                  <p className='header-description'>Nous assurons les meilleurs coûts, délais et conditionnements des marchandises du dédouanement à la livraison.</p>

                  <img className='logo-v4' loading="lazy" src={CoTradSarlLogoV4}/>

                </div>                

            </div>


          </div>










          </header>





      </section>

      <section>

                <div className='wht-we'>

                  <div className='we-do-bx'>

                    <div className='we-do'>

                      <span className='we-do-txt'>what we do</span>

                      <span className='cargo-solution'>safe &  Reliable cargo solutions</span>


                    </div>

                    <div className='logoicon'><img src={boat} className='icon-services'/></div>

                  </div>

                  <div className='services'>

                    <div className='services-bx'>

                      <span className='services-title'>Sea Transport Services</span>

                      <span className='services-txt'>Following the quality of our service thus having gained trust of our many clients.</span>


                    </div>

                    <div className='logoicon'><img src={ancre} className='icon-services'/></div>

                  </div>

                  <div className='services' id='warehousing'>

                    <div className='services-bx'>

                      <span className='services-title'>Warehousing Services</span>

                      <span className='services-txt'>Following the quality of our service thus having gained trust of our many clients.</span>


                    </div>

                  

                  </div>

                </div>

                <div className='wht-we'>

                  <div className='we-do-bx'>

                    <div className='we-do'>

                      <span></span>

                      <span className='cargo-solution'></span>


                    </div>

                    <div className='logoicon'><img src={air} className='icon-services' id='air-icon'/></div>

                  </div>

                  <div className='services'>

                    <div className='services-bx'>

                      <span className='services-title'>Air Fright Services</span>

                      <span className='services-txt'>Following the quality of our service thus having gained trust of our many clients.</span>


                    </div>

                    <div className='logoicon'><img src={car} className='icon-services' id='air-icon'/></div>

                  </div>

                  <div className='services' id='warehousing'>

                    <div className='services-bx'>

                      <span className='services-title'>Local Shipping Services</span>

                      <span className='services-txt'>Following the quality of our service thus having gained trust of our many clients.</span>


                    </div>

                  

                  </div>

                </div>

      </section>

      <section className='logistics'>

              
        <img src={backgdLogistics} className='backgrdLogistics'/>

        <div className='solution'>

              <div className='solution-logistics'>

                <div className='solution-content'>

                  <div className='solution-content-box'>

                    <span className='us'>why us</span>
                    <span className='cargo-solution cargo-logistics'>We provide full range global logistics solution</span>
                    <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
                    <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

                    <div className='time-travel'>

                        <div className='time'>

                          <div className='time-icon'><img src={kaabaSolid} className='clock'/></div>

                          <div className='time-work'>

                              <span className='timer'>Delivery on Time</span>

                          </div>

                        </div>

                        <div className='time'>

                            <div className='time-icon'><img src={moneyBillSolid} className='clock'/></div>

                              <div className='time-work'>

                                  <span className='timer'>Optimized Travel Cost</span>

                              </div>

                        </div>

                      </div>

                        </div>

                      <div>

                  </div>

                  <div className='girlCardboat-box'>

                    <img src={girlCardboat} className='girlCardboat'/>

                  </div>

                 

                  <div>

                    <img src={newZeland} className='newZeland'/>


                  </div>

                </div>

              </div>

        </div>

      </section>

      <section>

          <div className='services-do'>

              <h1>nos services</h1>

              <div className='card-img-services'>

                  <div className='card-img-item'>

                    <img src={carton} className='img-services'/>

                    <div className='card-filtre-missions'></div>

                    <div className='card-img-description'>
                      

                      <span className='card-title'>Emballage et stockage</span>
                      <span className='card-title-description'>Facilite les opérations de manutention, stockage, transport, et distribution du produit</span>

                    </div>

                  </div>
                  
                  <div className='card-img-item'>

                    <img src={teamEmployeesCheckingStock} className='img-services'/>

                    <div className='card-filtre-missions'></div>

                   <div className='card-img-description'>

                   

                      <span className='card-title'>service d' entrepot</span>
                      <span className='card-title-description'>Nous disposons d'un entrepôt de avec une capacité de plus de 2000m² pour accueillir vos marchandises ou produits.</span>

                   </div>

                  </div>

                  <div  className='card-img-item'>

                    <img src={closeUpDeliveryPerson} className='img-services'/>

                    <div className='card-filtre-missions'></div>

                    <div className='card-img-description'>

                    

                      <span className='card-title'>service de livraison</span>
                      <span className='card-title-description'>Un service de livraison fiable et disponible en Afrique (Cameroun, Tchad, et Centrafrique)</span>

                    </div>

                  </div>



              </div>

              <div className='gradient'>




              </div>



          </div>


      </section>



    </>
  )
}

export default App
