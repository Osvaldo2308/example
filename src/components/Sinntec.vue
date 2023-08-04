<template>  
  <!-- <modalVue :show-modal="viewModal"/>  -->
  <modalVue v-if="viewModal" @close="viewModal = false" :show-modal="viewModal" :calltoAction="this.calltoAction"/> 
  <pagePrice v-if="viewpagePrice" @close="viewpagePrice = false" :showmodalPage="viewpagePrice" />

  <!--Version of Desktop--->
    <div class="sticky-top d-none d-sm-none d-md-block"> 
      <v-btn href="tel:5569433293" prepend-icon="mdi-phone-outline" class="buttonCall animate__animated animate__fadeInRight">55 6943 3293</v-btn>
    </div>
    <v-btn href="tel:5569433293" append-icon="mdi-phone-outline" class="butonCallsm d-sm-block d-md-none rounded-s"/>
    <v-btn href="mailto:contacto@sinntec.com.mx" append-icon="mdi-email-outline" class="butonCallsm d-sm-block d-md-none rounded-s" style="margin-top: 45px"/>
    <v-row>
    <v-carousel class="mt-0" height="550" cycle hide-delimiter-background show-arrows interval="10000" >
      <v-carousel-item v-for="(slide, i) in slides" :key="i" height="100%">
        <v-row>
          <v-img :src="slide" class="imagCarousel" cover>
            <v-row v-if="i===0">
              <v-col cols="6" sm="6" md="6" class="my-16 mx-16">
                <p class="titleHomh1 animate__animated animate__backInLeft">Hablemos de tu proyecto
                  <v-img :src="require('../../public/img/iconHome1.png')" class="iconsSlide"
                          style="left: 35%; width: 50%;"/>
                </p>
                <p class="titleHomh2 mb-16 animate__animated animate__backInLeft">Cuenta con nosotros como tu equipo de desarrollo</p>
                <v-btn @click="changestatemodalcontact('98')" class="d-none d-sm-none d-md-block btnHome1 animate__animated animate__backInLeft">Cotizar mi proyecto
                </v-btn>
              </v-col> 
            </v-row>

            <v-row v-if="i===1">
              <v-col cols="6" sm="6" md="8" class="my-16 mx-16">
                <v-img :src="require('../../public/img/iconBusae.png')" class="iconsSlide d-none d-sm-none d-md-block"
                        style="left: -26%;"/>
                <v-img :src="require('../../public/img/bussaelogo.png')" class="carImg2"/>
                <p class="titleHomh1">Modernizamos <br> el cobro en autobuses
                  <v-img :src="require('../../public/img/iconBusae.png')" class="d-sm-block d-md-none"
                          style="top: 10%;left: 35%; width: 42.7%; float: right;"/>
                </p>
                <p class="titleHomh2 ">App para pasajeros y conductores de autobuses <br>
                  <v-btn variant="outlined" class="btnIconHome" @click="changestatusmodalBussae()">Casos de éxito
                  </v-btn>
                </p>
                <v-btn @click="changestatemodalcontact('99')" class="btnHome1 d-none d-sm-none d-md-block">Cotizar mi proyecto
                </v-btn>
              </v-col>
            </v-row>

            <v-row v-if="i===2">
              <v-col cols="6" sm="6" md="8" class="my-16 mx-16">
                <v-img :src="require('../../public/img/drd3dlogo.png')" class="carImg3"/>
                <v-img :src="require('../../public/img/iconDrd.png')" class="iconSlide2 d-none d-sm-none d-md-block"
                        style="left:76%"/>

                <p class="titleHomh1">Agilizamos la solicitud <br> de citas médicas
                  <v-img :src="require('../../public/img/iconDrd.png')" class="d-sm-block d-md-none"
                          style="top: -10%;width: 42.7%; float: right; left:29%"/>
                </p>
                <p class="titleHomh2">App para consultas y seguimiento
                  <v-btn variant="outlined" class="btnIconHome" @click="changestatusmodalDrd()">Casos de éxito</v-btn>
                </p>
                <v-btn @click="changestatemodalcontact('100')" class="btnHome1 d-none d-sm-none d-md-block">Cotizar mi proyecto
                </v-btn>
              </v-col>
            </v-row>

            <v-row v-if="i===3">
              <v-col cols="6" sm="6" md="8" class="my-16 mx-16">
                <v-img :src="require('../../public/img/isalogo.png')" class="carImg4"/>
                <v-img :src="require('../../public/img/iconISA.png')" class="iconSlide2 d-none d-sm-none d-md-block"
                        style="left: 55%; top: -10%"/>
                <p class="titleHomh1">Facilitamos el <br> cumplimiento de las NOMs
                  <v-img :src="require('../../public/img/iconISA.png')" class="d-sm-block d-md-none"
                          style="top: -10%;width: 45.7%; float: right; left:20%"/>
                </p>
                <p class="titleHomh2">Sistema web para la gestión de seguridad e higiene
                  <v-btn variant="outlined" class="btnIconHome" @click="changestatusmodalISA()">Casos de éxito</v-btn>
                </p>
                <v-btn @click="changestatemodalcontact('101')" class="btnHome1 d-none d-sm-none d-md-block">Cotizar mi proyecto
                </v-btn>
              </v-col>
            </v-row>

            <v-row v-if="i===4">
              <v-col cols="6" sm="6" md="8" class="my-16 mx-16">
                <v-img :src="require('../../public/img/brazaleteslogo.png')" class="carImg5"/>
                <v-img :src="require('../../public/img/iconBrazaletes.png')"
                        class="iconSlide2 d-none d-sm-none d-md-block" style="left: 80%"/>
                <p class="titleHomh1">Aportamos innovación <br> en accesos y pagos
                  <v-img :src="require('../../public/img/iconBrazaletes.png')" class="d-sm-block d-md-none"
                          style="top: -10%;width: 45%; float: right; left:20%"/>
                </p>
                <p class="titleHomh2">Sistema que automatizó las transacciones en eventos <br>
                  <v-btn variant="outlined" class="btnIconHome" @click="changestatusmodalSmartKey()">Casos de éxito
                  </v-btn>
                </p>
                <v-btn @click="changestatemodalcontact('102')" class="btnHome1 d-none d-sm-none d-md-block">Cotizar mi proyecto
                </v-btn>
              </v-col>
            </v-row>

            <v-row v-if="i===5">
              <v-col cols="6" sm="6" md="8" class="my-16 mx-16">
                <v-img :src="require('../../public/img/schneiderlogo.png')" class="carImg6"/>
                <v-img :src="require('../../public/img/iconSch.png')" class="iconSlide2 d-none d-sm-none d-md-block"
                        style="left:87%; top: -10%"/>
                <p class="titleHomh1" style="margin-left: 136px;">Digitalizamos reportes de mantenimientos correctivos y preventivos
                  <v-img :src="require('../../public/img/iconSch.png')" class="d-sm-block d-md-none"
                          style="top: -10%;width: 55%; float: right; left:20%"/>
                </p>
                <p class="titleHomh2">Sistema de gestión web y App para Ingenieros
                  <v-btn variant="outlined" class="btnIconHome" @click="changestatusmodalSchneider()">Casos de éxito
                  </v-btn>
                </p>
                <v-btn @click="changestatemodalcontact('103')" class="btnHome1 d-none d-sm-none d-md-block">Cotizar mi proyecto
                </v-btn>
              </v-col>
            </v-row>
          </v-img>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <!-- Modal proyect of success BUSSAE --> 
    <v-dialog v-model="carouselProyectBussae" max-width="800" height="700"> 
      <v-card class="carousel__Modal--Success" style="border-radius: 20px;">
        <v-row>
          <v-col cols="12" sm="12" md="6" class="image__modal--Size">
            <v-icon icon="mdi-close-box-outline" color="white" size="x-large" @click="carouselProyectBussae = false" class="btncloseModalsm"/>
            <v-img :src="require('../../public/img/Busae.jpg')" class="d-none d-sm-none d-md-block img__modal" />
            <v-img :src="require('../../public/img/busaesm.png')" class="imagenBusaeSm d-sm-block d-md-none "/>
          </v-col>

          <v-col cols="12" sm="12" md="6" class="image__modal--Size">
            <v-card-text>
              <v-icon icon="mdi-window-close" color="#1779B6" size="x-large" @click="carouselProyectBussae= false" class="btncloseModal"/>
              <v-img :src="require('../../public/img/bussaelogo.png')" class="imgBusaeproyecto"/>
              <p class="titleSuccess">BUSAE</p>
              <p class="subtSuccess">¡Así contribuimos a la modernización del cobro en autobuses!</p>
              <p class="desSuccess">Desarrollamos una App para BUSAE que facilita la operación completa del transporte
                público.</p>
              <ul class="desSuccess">
                <li>Cobro de cuotas</li>
                <li>Monitoreo de las unidades por GPS</li>
                <li>Monitoreo de operadores e impresión de boletos</li>
              </ul>
              <p class="desSuccess">Los usuarios de BUSAE pueden ver en tiempo real la ubicación de los autobuses y
                cuánto tardará en llegar a su parada, así como las facilidades de las que dispone cada unidad.</p>
            </v-card-text>
            <div class="text-center">
              <v-btn @click="changestatemodalcontact('104')" class="btncotSolution1">Cotiza el desarrollo de tu App</v-btn>
            </div>
          </v-col>
        </v-row>
        </v-card>
      </v-dialog>
    <!-- Modal proyect of success DRD -->
    <v-dialog v-model="carouselProyectDrd" width="800">
      <v-card class="carousel__Modal--Success" style="border-radius: 20px;">
        <v-row>
          <v-col cols="12" sm="12" md="6" class="image__modal--Size">
            <v-icon icon="mdi-close-box-outline" color="white" size="x-large" @click="carouselProyectDrd= false" class="btncloseModalsm"/>
            <v-img :src="require('../../public/img/drdcap.png')" class="d-none d-md-block d-sm-none img__modal" />
            <v-img :src="require('../../public/img/busaesm.png')" class="imagenBusaeSm d-sm-block d-md-none"/>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="image__modal--Size">
            <v-card-text>
              <v-icon icon="mdi-window-close" color="#1779B6" size="x-large" @click="carouselProyectDrd= false" class="btncloseModal"/>
              <v-img :src="require('../../public/img/drd3dlogo.png')" class="imgBusaeproyecto"/>
              <p class="titleSuccess">DRD3D</p>
              <p class="subtSuccess">¡Colaboramos en agilizar el proceso para agendar citas médicas!</p>
              <p class="desSuccess">Colaboramos con la empresa DRD3D desarrollando una App disponible al público en general, 
                donde los pacientes pueden elegir la sucursal de su preferencia, obtener información sobre los servicios y 
                horarios disponibles, asi como también los laboratorios ponen a disposición del paciente y el médico los 
                estudios realizados para su tratamiento.</p>
          </v-card-text>
            <div class="text-center">
              <v-btn @click="changestatemodalcontact('105')" class="btncotSolution1">Cotiza el desarrollo de tu App</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <!-- Modal proyect of succes ISA -->
    <v-dialog v-model="carouselProyectISA" width="800">
        <v-card class="carousel__Modal--Success" style="border-radius: 20px;">
            <v-row>
                <v-col cols="12" sm="12" md="6" class="image__modal--Size">
                    <v-icon icon="mdi-close-box-outline" color="white" size="x-large" @click="carouselProyectISA= false" class="btncloseModalsm"/>
                    <v-img :src="require('../../public/img/ISAcap.png')" class="d-none d-md-block d-sm-none img__modal"/>
                    <v-img :src="require('../../public/img/busaesm.png')" class="imagenBusaeSm d-sm-block d-md-none"/>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="image__modal--Size">
                  <v-card-text>
                    <v-icon icon="mdi-window-close" color="#1779B6" size="x-large" @click="carouselProyectISA= false" class="btncloseModal"/>
                      <v-img :src="require('../../public/img/isalogo.png')" class="imgBusaeproyecto"/>
                      <p class="titleSuccess">ISA Ambiental</p>
                      <p class="subtSuccess">¡Facilitamos el cumplimiento de las normas oficiales en seguridad e higiene!</p>
                      <p class="desSuccess">Creamos un sistema web Front & Back-end para ISA Ambiental para agilizar el proceso
                        de registro, atención y seguimiento del cumplimiento de normas oficiales de seguridad e higiene, así
                        como en materia medio ambiental y riesgos de trabajo.</p>
                  </v-card-text>
                  <div class="text-center">
                      <v-btn @click="changestatemodalcontact('106')" class="btncotSolution1">Cotiza el desarrollo de tu App</v-btn>
                  </div>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
    <!-- Modal proyect of success SmartKey -->
    <v-dialog v-model="carouselProyectSmartKey" width="800">
      <v-card class="carousel__Modal--Success" style="border-radius: 20px;">
        <v-row>
          <v-col cols="12" sm="12" md="6" class="image__modal--Size">
            <v-icon icon="mdi-close-box-outline" color="white" size="x-large" @click="carouselProyectSmartKey = false" class="btncloseModalsm"/>
            <v-img :src="require('../../public/img/brazaletescap.png')" class="d-none d-md-block d-sm-none img__modal"/>
            <v-img :src="require('../../public/img/busaesm.png')" class="imagenBusaeSm d-sm-block d-md-none"/>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="image__modal--Size">
            <v-card-text>
              <v-icon icon="mdi-window-close" color="#1779B6" size="x-large" @click="carouselProyectSmartKey= false" class="btncloseModal"/>
              <v-img :src="require('../../public/img/brazaleteslogo.png')" class="imgBusaeproyecto"/>
              <p class="titleSuccess">SmartKey</p>
              <p class="subtSuccess">¡Aportamos nuestra experiencia en la Innovación del acceso y pagos en eventos!</p>
              <p class="desSuccess">Desarrollamos un sistema web, escritorio y App para la empresa Brazaletes México,
                el cual permite a los usuarios acceder a eventos, negocios o establecimientos, así como realizar 
                transacciones monetarias, todo mediante el uso de pulseras con tecnología RFID.</p>
            </v-card-text>
            <div class="text-center">
              <v-btn @click="changestatemodalcontact('107')" class="btncotSolution1">Cotiza el desarrollo de tu App</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <!-- Modal proyect of success Schneider -->
    <v-dialog v-model="carouselProyectSchneider" width="800">
      <v-card class="carousel__Modal--Success" style="border-radius: 20px;">
        <v-row>
          <v-col cols="12" sm="12" md="6" class="image__modal--Size">
            <v-icon icon="mdi-close-box-outline" color="white" size="x-large" @click="carouselProyectSchneider = false" class="btncloseModalsm"/>
            <v-img :src="require('../../public/img/schneider.png')" class="d-none d-md-block d-sm-none img__modal"/>
            <v-img :src="require('../../public/img/busaesm.png')" class="imagenBusaeSm d-sm-block d-md-none"/>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="image__modal--Size">
            <v-card-text>
              <v-icon icon="mdi-window-close" color="#1779B6" size="x-large" @click="carouselProyectSchneider= false" class="btncloseModal"/>
              <v-img :src="require('../../public/img/schneiderlogo.png')" class="imgBusaeproyecto"/>
              <p class="titleSuccess">Schneider Electric</p>
              <p class="subtSuccess">¡Sistematizamos los reportes de mantenimientos preventivos y correctivos!</p>
              <p class="desSuccess">Trabajamos de la mano con Schneider Electric, desarrollando un sistema web y una 
                App online/offline que permitió a los ingenieros de servicio controlar,
                registrar y dar seguimiento a los mantenimientos preventivos y correctivos 
                para centrales de gas y petróleo en México.</p>
            </v-card-text>
            <div class="text-center">
              <v-btn @click="changestatemodalcontact('108')" class="btncotSolution1">Cotiza el desarrollo de tu App</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <v-btn @click="changestatemodalcontact('109')" class="d-sm-block d-md-none ageDemo">Agendar demostración</v-btn>
    <!--End of slide-->
    <!-------------------- Solutions of software -------------------->
    <v-row class="mx-0 backSolutions"> 
      <v-col cols="12" sm="12" md="12">
        <p class="textSol1">Soluciones de software</p>
        <p class="textSol2 ">Nos convertimos en tu equipo tecnológico a largo plazo para el diseño, desarrollo
          y mantenimiento  de tus sistemas web, escritorio y App.</p>
      </v-col>
      <v-col cols="12" sm="12" md="4" data-aos="fade-up" data-aos-duration="500" data-aos-offset="300" class="text-center">
        <v-img :src="require('../../public/img/desarrollodeapps.png')" class="imgHomeSolutions"/>
        <p class="titleimgSolution text-center ">Desarrollo de Apps</p>
        <p class="subtitleimgSolution text-center mx-12 mb-15">Desarrollo de Apps Nativas o Multiplataforma para Android o iOS.</p>
          <v-btn rounded class="view__more--button"><router-link to="/desarrollo-de-apps" class="view__more--link" @click="isSelected= false"> Ver más </router-link></v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="4" data-aos="fade-up" data-aos-duration="750" data-aos-offset="300" class="text-center">
        <v-img :src="require('../../public/img/desarrolloalamedida.png')" class="imgHomeSolutions"/>
        <p class="titleimgSolution text-center">Desarrollo de Aplicaciones Web</p>
        <p class="subtitleimgSolution text-center mx-12 mb-15">Desarrollo de Aplicaciones Web a la medida de tus necesidades.</p>
        <v-btn rounded class="view__more--button"><router-link to="/desarrollo-de-software" class="view__more--link">Ver más</router-link></v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="4" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" class="text-center">
        <v-img :src="require('../../public/img/servidores.png')" class="imgHomeSolutions"/>
        <p class="titleimgSolution text-center">Servidores VPS</p>
        <p class="subtitleimgSolution text-center mx-12 mb-10">Renta de servidores VPS Linux para proyectos básicos o robustos así como correos corporativos</p>
        <v-btn rounded class="view__more--button"><router-link to="/servidores-virtuales" class="view__more--link">Ver más</router-link> </v-btn>
      </v-col>
      <v-btn @click="changestatemodalcontact('110')" class="ageDemo"> Cotizar mi proyecto</v-btn>
    </v-row>
  </v-row>

  <v-row class="mt-12">
    <v-col cols="12" md="12" sm="12" data-aos="zoom-in" data-aos-duration="1500">
      <p class="titlerealProy text-center">Hagamos realidad tu proyecto</p>
      <p class="subtitlerealProy text-center mb-16" >Todo lo que necesitas en un solo lugar ¡Innovamos para que tu empresa
        haga la diferencia!</p>
    </v-col>
    <v-col cols="12" md="12" sm="12" class="mb-5">
      <!-- Carousel with opinions -->
      <v-carousel cycle height="450" hide-delimiters :show-arrows="false" interval="7000">
        <v-carousel-item v-for="(carousels, n) in carousel" :key="n">
          <v-sheet height="87%">
            <v-card class="cardOpinion">
              <v-card-title>
                <v-img :src="carousels" cover class="imgpersonCarousel" />
              </v-card-title>
              <v-img :src="require('../../public/img/groupStars.png')" class="groupStars"/>
              <v-card-text v-if="n===0">
                <p class="text-center opinionClient">"Cada vez que tenía preguntas, el gerente del proyecto respondía de inmediato y se aseguraba de que nuestras necesidades fueran resueltas".</p>
                <p class="text-center autorOpinion">Carlos Zavala - Systems Manager, Stesso <br> Servicios de Limpieza
                </p>
              </v-card-text>
              <v-card-text v-if="n===1">
                <p class="text-center opinionClient my-4">"Siempre estuvieron disponibles cuando los necesitábamos o teníamos alguna pregunta".</p>
                <p class="text-center autorOpinion">Jose Jaime Martinez Villarreal - CEO, Todos en Bici</p>
              </v-card-text>
              <v-card-text v-if="n===2">
                <p class="text-center opinionClient my-4">"Todo el proyecto se siguió como se esperaba".</p>
                <p class="text-center autorOpinion">Hiram Antunez - Business Development & Legal Compliance, Consulting Company</p>
              </v-card-text>
              <v-card-text v-if="n===3">
                <p class="text-center opinionClient my-4">"Si tenemos una emergencia, están disponibles para comenzar en 7 días. Eso es muy bueno".</p>
                <p class="text-center autorOpinion">Fernando Cobo Balaguer - General Director, Busae App</p>
              </v-card-text>
              <v-card-text v-if="n===4">
                <p class="text-center opinionClient my-4">"La comunicación fue tan buena que cualquier detalle se pudo ajustar en el momento".</p>
                <p class="text-center autorOpinion">Alejandro Saracho - CEO, Reconfiguración Financiera</p>
              </v-card-text>
              <v-card-text v-if="n===5">
                <p class="text-center opinionClient my-4">"El nivel de compromiso de Sinntec Innova Tech fue excepcional, todo el tiempo".</p>
                <p class="text-center autorOpinion">Fernando Solano - COO, Lermark Compani</p>
              </v-card-text>
            </v-card>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-btn @click="changeModalPrice()" class="btnAgendarSolucion"> Consultar precios</v-btn>
  </v-row>
  <!-------------------------------------- Team Sinntec --------------------------------------->
  <v-row class="teamSinntec">
    <v-col cols="12" md="5" sm="3">
      <div style="margin-top: 100px; margin-bottom: 100px;" data-aos="fade-right">
        <p class="titTeam">Equipo Sinntec</p>
        <p class="subtitTeam">Elige al mejor equipo para el desarrollo de tu proyecto End to End.</p>
      </div>
    </v-col>
    <v-col cols="12" md="2" sm="3" style="margin:auto;" data-aos="fade-up" data-aos-duration="1000">
      <p class="numsTeam text-center">+9</p>
      <p class="textnumTeam text-center">Años de experiencia <br> en el mercado</p>
    </v-col>
    <v-col cols="12" md="2" sm="3" style="margin:auto;" data-aos="fade-up" data-aos-duration="1500">
      <p class="numsTeam text-center">+40</p>
      <p class="textnumTeam text-center">Empresas han <br> elegido Sinntec</p>
    </v-col>
    <v-col cols="12" md="2" sm="3" style="margin:auto;" data-aos="fade-up" data-aos-duration="2000">
      <p class="numsTeam text-center">+12</p>
      <p class="textnumTeam text-center ">Profesionales <br> altamente calificados</p>
    </v-col>
  </v-row>
  <v-row class="mt-12">
    <v-col cols="12" sm="12" md="12">
      <p class="txttitleIT text-center mt-16">Innovación Tecnológica</p>
      <p class="txtdescIT text-center">Juntos construiremos la solución que incrementará el valor de tus productos y
        servicios.</p>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="12" class="d-sm-block d-md-none">
      <v-carousel cycle height="400" hide-delimiters :show-arrows="false" class="mb-0" interval="7000">
        <v-carousel-item v-for="(image, i) in images" :key="i">
          <v-sheet height="80%">
            <v-card class="cardColab">
              <v-card-text>
                <v-img :src="image" cover class="imgColab"/>
              </v-card-text>
            </v-card>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>

    <v-col cols="12" md="12" class="d-none d-sm-none d-md-block">
      <v-carousel cycle height="250" hide-delimiters :show-arrows="false" interval="7000" style="margin-bottom: -6rem;">
        <v-carousel-item class="mt-1">
          <v-row>
            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/schneiderlogo.png')" style="width: 60%; margin:2rem 1.5rem 0 auto;"/>
            </v-col>
            
            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/Ostrail.png')" style=" height: 30%; margin:.7rem auto;"/>
            </v-col>

            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/bussaelogo.png')" style="height: 30%; margin:auto;"/>
            </v-col>

            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/brazaleteslogo.png')" style="height: 30%; margin:0rem auto;"></v-img>
            </v-col>
            
          </v-row>
        </v-carousel-item>

        <v-carousel-item>
          <v-row>
            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/isalogo.png')" style="width: 30%; margin:.7rem auto;"/>
            </v-col>
            
            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/mis.png')" style="width: 50%; margin:.5rem auto;"/>
            </v-col>
            
            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/drd3dlogo.png')" style="width: 50%; margin:1.8rem auto;"></v-img>
            </v-col>

            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/issfamlogo.png')" style="width: 30%; margin:.5rem auto;"/>
            </v-col>

          </v-row>
        </v-carousel-item>

        <v-carousel-item class="mt-7">
          <v-row >
            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/impeccablelogo.png')" style="width: 80%; margin:.8rem 2rem 0 auto; "/>
            </v-col>

            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/escuelaActiva.png')" style="width: 40%; margin:.8rem 3.5rem auto;"/>
            </v-col>

            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/sociallogo.png')" style="width: 60%; margin:.6rem auto;"/>
            </v-col>

            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/stessologo.png')" style="width: 60%; margin:0rem auto; "/>
            </v-col>
          </v-row>
        </v-carousel-item>

        <v-carousel-item>
          <v-row>
            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/logo__yaoware.png')" style="width: 60%; margin:.5rem auto;" />
            </v-col>
            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/logo__reconfn.png')" style="width: 40%; margin:auto;" />
            </v-col>
            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/logo__bici.png')" style="width: 60%; margin:2.2rem auto;" />
            </v-col>
            <v-col cols="12" md="3">
              <v-img :src="require('../../public/img/logo__evoluziona.png')" style="width: 60%;margin:2rem auto;" />
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-btn @click="changestatemodalcontact('111')" class="btncotSolution d-sm-block d-md-none"> Cotizar mi proyecto</v-btn>
  </v-row>
</template>
<!------------------------------------------------ Init scripts ------------------------------------------------>
<script>
import modalVue from '../views/pages/page_modal.vue'
import pagePrice from '../views/pages/page_price.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

export default {
  name: 'page_development',
  data: () => ({
    viewModal: false,
    viewpagePrice: false,

    calltoAction: '',

    isSelected: '',

    slides: [
      '/img/diseno1.png',
      '/img/busaedesign.png',
      '/img/drd.png',
      '/img/ISA.png',
      '/img/brazaletes.png',
      '/img/mantenimiento.png',
      
    ],
    carousel: [
      '/img/person1.png',
      '/img/person1.png',
      '/img/person1.png',
      '/img/person1.png',
      '/img/person1.png',
      '/img/person1.png',
    ],
    images: [
      '/img/Ostrail.png',
      '/img/brazaleteslogo.png',
      '/img/bussaelogo.png',
      '/img/drd3dlogo.png',
      '/img/escuelaActiva.png',
      '/img/mis.png',
      '/img/isalogo.png',
      '/img/issfamlogo.png',
      '/img/schneiderlogo.png',
      '/img/sociallogo.png',
      '/img/stessologo.png',
      '/img/logo__yaoware.png',
      '/img/logo__reconfn.png',
      '/img/logo__bici.png',
      '/img/logo__evoluziona.png',
    ],
    carouselProyectBussae: false,
    carouselProyectDrd: false,
    carouselProyectISA: false,
    carouselProyectSmartKey: false,
    carouselProyectSchneider: false,
  }),
  components: {
    modalVue,
    pagePrice
  },
  methods: {
    changestatemodalcontact(p){
        this.viewModal = true
        this.calltoAction = p 
    },
    changeModalPrice(){
          this.viewpagePrice = true
        },
    changestatusmodalBussae() {
      if (this.carouselProyectBussae === false) {
        setTimeout(this.carouselProyectBussae = true, 5000);
      } else {
        setTimeout(this.carouselProyectBussae = false, 5000);
      }
    },
    changestatusmodalDrd() {
      if (this.carouselProyectDrd === false) {
        this.carouselProyectDrd = true
      } else {
        this.carouselProyectDrd = false
      }
    },
    changestatusmodalISA() {
      if (this.carouselProyectISA === false) {
        this.carouselProyectISA = true
      } else {
        this.carouselProyectISA = false
      }
    },
    changestatusmodalSmartKey() {
      if (this.carouselProyectSmartKey === false) {
        this.carouselProyectSmartKey = true
      } else {
        this.carouselProyectSmartKey = false
      }
    },
    changestatusmodalSchneider() {
      if (this.carouselProyectSchneider === false) {
        this.carouselProyectSchneider = true
      } else {
        this.carouselProyectSchneider = false
      }
    }
  }
}
</script>
<style scoped>
@import '../assets/css/page-home-style.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500;600;700&display=swap');
</style>