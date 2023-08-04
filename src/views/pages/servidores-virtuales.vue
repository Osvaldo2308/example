<template>
  <modalVue v-if="viewModal" :email-value="inputemailServers" :show-modal="viewModal" @close="viewModal = false" :calltoAction="this.calltoAction"/>
  <v-row>
    <v-btn href="tel:5569433293" append-icon="mdi-phone-outline" class="btn-called4Sm d-sm-block d-md-none animate__animated animate__fadeInRight animate__delay-1s"/>
    <v-btn href="mailto:contacto@sinntec.com.mx" append-icon="mdi-email-outline" class="btn-called4Sm d-sm-block d-md-none animate__animated animate__fadeInRight animate__delay-1s" style="margin-top: 45px"/>
    <v-col cols="12" md="12" sm="12">
    
      <v-row class="backServers">
        <v-col cols="12" sm="12" md="6" class="marginHead">
          <p class="textServersh1 animate__animated animate__fadeInLeft">¡Mantén tu negocio siempre en línea!</p> 
          <p class="text__serves-subtitle animate__animated animate__fadeInLeft">Nuestros expertos lo harán por ti</p>
            <p class="textServersh2 text-left animate__animated animate__fadeInLeft">Con nuestros servidores VPS confiables y de alta calidad, olvídate de preocupaciones técnicas y enfócate en lo que realmente importa: hacer crecer tu negocio.</p>
            <!-- button info -->
            <div>
                <v-row class="mt-7 animate__animated animate__fadeInLeft animate__delay-1s">
                    <v-col cols="6" sm="6" md="6">                    
                        <v-responsive class="in-servers-info">
                            <v-text-field 
                            density="compact" 
                            single-line
                            clearable
                            v-model="inputemailServers"
                            hide-details="auto"
                            label="Escribe tu email"
                            type="email"
                            >
                            </v-text-field>
                        </v-responsive>
                    </v-col>
                    <v-col cols="6" sm="6" md="6" class="d-sm-block d-md-none">
                        <v-btn class="btnServers3 text-start" @click="changeModalState('30')" >
                        Solicitar info
                        </v-btn>
                    </v-col>
                    <v-col cols="6" sm="6" md="6" class="d-none d-sm-none d-md-block">
                        <v-btn class="btnServers3 text-start" style="font-size: 14px !important;" @click="changeModalState('30')"  >
                        Solicitar información
                        </v-btn>
                    </v-col>
                </v-row>
            </div> 
                <v-col cols="12" sm="12" md="3">
                  <v-img :src="require('../../../public/img/servers1.png')" class="imgServers1 d-sm-block d-md-none"/>
                </v-col>
                <!-- End button info -->
                <p class="textServerh3 animate__animated animate__fadeInLeft">Servidores VPS de calidad, rápidos y confiables</p>
                <p class="textServerh4 text-left animate__animated animate__fadeInLeft">En Sinntec, sabemos que cada negocio es único. Por eso, nuestro equipo de expertos y servidores VPS están listos para atender tus necesidades específicas. Obtén el soporte dedicado que necesitas  para alcanzar los objetivos de tu negocio.</p>
        </v-col>
        <v-col cols="12" sm="12" md="3">
          <v-img :src="require('../../../public/img/servers1.png')" class="imgServers1 d-none d-sm-none d-md-block animate__animated animate__fadeInBottomRight"/>
        </v-col>
            <div class="sticky-top d-none d-sm-none d-md-block">
                <v-btn prepend-icon="mdi-phone-outline" href="tel:5569433293" class="btn-called4 animate__animated animate__fadeInRight" >
                  55 6943 3293
                </v-btn>
            </div>
        <v-col cols="12" sm="12" md="12">
          <p class="text-center textServerh5 animate__animated animate__backInUp">No necesitas ser un experto en TI, en Sinntec te asesoramos y lo hacemos por ti</p>
        </v-col>
      </v-row>
    </v-col>
    <v-btn @click="changeModalState('31')" class="btnInfoserver">Solicitar asesoría</v-btn>
  </v-row>
      
    <v-row class="my-12">
      <v-col cols="12" sm="12" md="12">
        <p class="text-center textClaudh1">¿SINNTEC CLOUD ES EL SERVICIO QUÉ REQUIERE TU NEGOCIO?</p>
      </v-col>
      <v-container>
        <v-row class="space-descriptions">
          <v-col cols="12" sm="12" md="6">
              <v-img :src="require('../../../public/img/servidores4.png')" class="imgClaud"/>
            <p class="texth1" >Personalización</p>
            <p class="texth2">No pagues por una solución genérica, nuestros Servidores VPS se personalizan y adaptan a las necesidades de cada cliente,</p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-img :src="require('../../../public/img/servidores5.png')" class="imgClaud mt-4"/>
            <p class="texth1" >Publica lo que necesites</p>
            <p class="texth2">Páginas web, Aplicaciones web, tener identidad propia con un servidor de correos, blogs, sitios de comercio electrónico, el software sencillo, y más.</p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-img :src="require('../../../public/img/servidores6.png')" class="imgClaud"/>
            <p class="texth1" >Siempre Actualizado</p>
            <p class="texth2">Utiliza tecnologías como WordPress, Drupal, Joomla!, Ghost, Magento, Redmine, LAMP, Nginx (LEMP), MEAN, Node.js, Django y más.</p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-img :src="require('../../../public/img/servidores7.png')" class="imgClaud"/>
            <p class="texth1" >Monitoreo de performance</p>
            <p class="texth2">Nos enfocamos en monitorear y mejorar continuamente el rendimiento del servidor, aplicando las mejores prácticas para detectar y solucionar rápidamente cualquier problema que pueda surgir.</p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-img :src="require('../../../public/img/servidores10.png')" class="imgClaud"/>
            <p class="texth1" >Beneficios adicionales</p>
            <p class="texth2">Configuración de correos, ambientación de página web, Implementación y mantenimiento SSL.</p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-img :src="require('../../../public/img/servidores9.png')" class="imgClaud"/>
            <p class="texth1" >soporte personalizado</p>
            <p class="texth2">No te compliques pagando más por capacitación técnica que otros servicios requieren. Sinntec se enfoca en brindar una experiencia personalizada y de alta calidad para cada cliente sin costo extra.</p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-img :src="require('../../../public/img/servidores8.png')" class="imgClaud"/>
            <p class="texth1" >Certificado SSL</p>
            <p class="texth2">El servicio incluye un certificado de seguridad SSL, lo que significa que los sitios web de nuestros clientes siempre estarán encriptados y seguros</p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-img :src="require('../../../public/img/servidores11.png')" class="imgClaud"/>
            <p class="texth1" >dominio .com o .com.mx</p>
            <p class="texth2">Ahorra dinero en la compra de dominio, Sinntec te incluye gratis un dominio con terminación .com o .com.mx </p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-img :src="require('../../../public/img/servidores2.png')" class="imgClaud"/>
            <p class="texth1" >Siempre en línea</p>
            <p class="texth2">Con una alta disponibilidad, tendrás el 99.95% de garantía de disponibilidad</p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-img :src="require('../../../public/img/servidores3.png')" class="imgClaud"/>
            <p class="texth1" >Te devolvemos tu dinero</p>
            <p class="texth2">Con nuestra garantía de satisfacción, prueba el servicio durante 30 días, si no estás satisfecho te devolvemos tu dinero.</p>
          </v-col>
        </v-row>
      </v-container>
      <div class="text-center mt-16">
        <p class="texth3">No lo pienses más y olvídate de los problemas.</p>
        <p class="texth4">SOMOS EL mejor servicio QUE PODRÁS ENCONTRAR en el mercado, ¡Garantizado!</p>
      </div>
      </v-row>

      <!-- Instalation of project -->
        <v-btn @click="changeModalState('118')" class="btn-cot-Serv d-none d-md-block d-sm-none">Solicitar demostración</v-btn>
        <v-row  class="backgrinstPro">
            <v-btn @click="changeModalState('118')" class="btn-cot-Serv d-sm-block d-md-none">Solicitar demostración</v-btn> 
          <v-col cols="12" md="2">
            <v-divider class="border-opacity-100 mt-16" color="info"></v-divider>
          </v-col>
          <v-col cols="12" md="8" >
            <p class="descrpinstPro text-center d-none d-md-block d-sm-none mt-16">¿Cómo se instala tu proyecto en nuestros Servidores Linux VPS?</p>
            <!-- Expansion para poder ver las demás imagenes -->
          <v-expansion-panels class="d-sm-block d-md-none ">
              <v-expansion-panel class="backgrinstPro descrpinstPro text-center">
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col cols="12" class="d-flex justify-start">
                        ¿Como se instala tu proyecto en nuestros servidores linux vps?
                      </v-col>
                      <v-col cols="12" class="text-grey">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0"/>
                          <span v-else key="1"/>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-img :src="require('../../../public/img/Como-se-instala-tu-proyecto2.png')"></v-img>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
        </v-col>

        <v-col cols="12" md="2">
          <v-divider class="border-opacity-100 mt-16" color="info"></v-divider>
        </v-col>
        <v-col cols="12" md="10" class="d-none d-md-block d-sm-none">
          <v-img :src="require('../../../public/img/gpServers4.png')" class="mb-16"/>
        </v-col>
      </v-row>

      <!-- Cards of details proyect -->
      <p class="my-16 text-center plantexth1">Conoce nuestros planes</p>
      <v-row class="text-center d-sm-block d-md-none" style="margin: auto">
        <v-col cols="12" >
            <v-expansion-panels class="mb-3 exp-Card">
                <v-expansion-panel class="exp-Card-header">
                    <v-expansion-panel-title expand-icon="false" collapse-icon="false" style="color: #F79433; " >
                      VPS LINUX &nbsp;<strong> XS</strong> 
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="exp-Card-text">
                      <br> 512 MB
                    </v-expansion-panel-text>
                    <v-expansion-panel-text class="exp-Card-desc">
                      Memoria RAM 512 MB <br>
                      Procesador 1 vCPU <br>
                      Disco SSD de 20 GB <br>
                      1 TB de transferencia*
                      <v-divider class="border-opacity-100" color="#1779B6"/>
                      <v-card-actions class="size__btn-Elegir">
                        <v-btn @click="changeModalState('119')" style="color: #1779B6; text-transform: initial !important;">Elegir</v-btn>
                      </v-card-actions>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels class="mb-3 exp-Card">
                <v-expansion-panel class="exp-Card-header">
                    <v-expansion-panel-title expand-icon="false" collapse-icon="false" style="color: #F79433; " >
                      VPS LINUX &nbsp;<strong> S</strong> 
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="exp-Card-text">
                      <br> 1 GB
                    </v-expansion-panel-text>
                    <v-expansion-panel-text class="exp-Card-desc">
                      Memoria RAM 1 GB <br>
                      Procesador 2 vCPU <br>
                      Disco SSD de 40 GB <br>
                      2 TB de transferencia*
                      <v-divider class="border-opacity-100" color="#1779B6"/>
                      <v-card-actions class="size__btn-Elegir">
                        <v-btn @click="changeModalState('120')" style="color: #1779B6; text-transform: initial;">Elegir</v-btn>
                      </v-card-actions>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels class="mb-3 exp-Card">
                <v-expansion-panel class="exp-Card-header">
                    <v-expansion-panel-title expand-icon="false" collapse-icon="false" style="color: #F79433; " >
                      VPS LINUX &nbsp;<strong> M</strong> 
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="exp-Card-text">
                      <br> 2 GB
                    </v-expansion-panel-text>
                    <v-expansion-panel-text class="exp-Card-desc">
                      Memoria RAM 2 GB <br>
                      Procesador 3 vCPU <br>
                      Disco SSD de 60 GB <br>
                      3 TB de transferencia*
                      <v-divider class="border-opacity-100" color="#1779B6"/>
                      <v-card-actions class="size__btn-Elegir">
                        <v-btn @click="changeModalState('121')" style="color: #1779B6; text-transform: initial;">Elegir</v-btn>
                      </v-card-actions>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels class="mb-3 exp-Card">
                <v-expansion-panel class="exp-Card-header">
                    <v-expansion-panel-title expand-icon="false" collapse-icon="false" style="color: #F79433; " >
                      VPS LINUX &nbsp;<strong> L</strong> 
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="exp-Card-text">
                      <br> 4 GB
                    </v-expansion-panel-text>
                    <v-expansion-panel-text class="exp-Card-desc">
                      Memoria RAM 4 GB <br>
                      Procesador 4 vCPU <br>
                      Disco SSD de 80 GB <br>
                      4 TB de transferencia*
                      <v-divider class="border-opacity-100" color="#1779B6"/>
                      <v-card-actions class="size__btn-Elegir">
                        <v-btn @click="changeModalState('122')" style="color: #1779B6; text-transform: initial;">Elegir</v-btn>
                      </v-card-actions>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels class="mb-3 exp-Card">
                <v-expansion-panel class="exp-Card-header">
                    <v-expansion-panel-title expand-icon="false" collapse-icon="false" style="color: #F79433; " >
                      VPS LINUX &nbsp;<strong> XL</strong> 
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="exp-Card-text">
                      <br> 8 GB
                    </v-expansion-panel-text>
                    <v-expansion-panel-text class="exp-Card-desc">
                      Memoria RAM 8 GB <br>
                      Procesador 5 vCPU <br>
                      Disco SSD de 160 GB <br>
                      5 TB de transferencia*
                      <v-divider class="border-opacity-100" color="#1779B6"/>
                      <v-card-actions class="size__btn-Elegir">
                        <v-btn @click="changeModalState('123')" style="color: #1779B6; text-transform: initial;">Elegir</v-btn>
                      </v-card-actions>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels class="mb-3 exp-Card">
                <v-expansion-panel class="exp-Card-header">
                    <v-expansion-panel-title expand-icon="false" collapse-icon="false" style="color: #F79433; " >
                      VPS LINUX &nbsp;<strong> MEGA</strong> 
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="exp-Card-text">
                      <br> 16 GB
                    </v-expansion-panel-text>
                    <v-expansion-panel-text class="exp-Card-desc">
                      Memoria RAM 16 GB <br>
                      Procesador 6 vCPU <br>
                      Disco SSD de 320 GB <br>
                      6 TB de transferencia*
                      <v-divider class="border-opacity-100" color="#1779B6"/>
                      <v-card-actions class="size__btn-Elegir">
                        <v-btn @click="changeModalState('124')" style="color: #1779B6; text-transform: initial;">Elegir</v-btn>
                      </v-card-actions>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels class="mb-3 exp-Card">
                <v-expansion-panel class="exp-Card-header">
                    <v-expansion-panel-title expand-icon="false" collapse-icon="false" style="color: #F79433; " >
                      VPS LINUX &nbsp;<strong> SUPER</strong> 
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="exp-Card-text">
                      <br> 32 GB
                    </v-expansion-panel-text>
                    <v-expansion-panel-text class="exp-Card-desc">
                      Memoria RAM 32 GB <br>
                      Procesador 7 vCPU <br>
                      Disco SSD de 620 GB <br>
                      7 TB de transferencia*
                      <v-divider class="border-opacity-100" color="#1779B6"/>
                      <v-card-actions class="size__btn-Elegir">
                        <v-btn @click="changeModalState('125')" style="color: #1779B6; text-transform: initial;">Elegir</v-btn>
                      </v-card-actions>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels class="mb-3 exp-Card">
                <v-expansion-panel class="exp-Card-header">
                    <v-expansion-panel-title expand-icon="false" collapse-icon="false" style="color: #F79433; " >
                      VPS LINUX &nbsp;<strong> PREMIUM</strong> 
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="exp-Card-text">
                      <br> + GB
                    </v-expansion-panel-text>
                    <v-expansion-panel-text class="exp-Card-desc">
                      Elige tus propias <br>
                      especificaciones <br>
                      tecnicas y paga <br>
                      solo por lo que necesites
                      <v-divider class="border-opacity-100" color="#1779B6"/>
                      <v-card-actions class="size__btn-Elegir">
                        <v-btn @click="changeModalState('126')" style="color: #1779B6; text-transform: initial; margin-top: 0px; margin-bottom: 0px;">Elegir</v-btn>
                      </v-card-actions>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
      </v-row>

      <v-row style="margin-left: 12%; margin-right: 12%;" >
        <v-col cols="12" sm="12" md="3" class="d-none d-sm-none d-md-block" >
            <v-card align="center" class="cardSizes" data-aos="fade-right" data-aos-duration="2000">
              <v-card-title class="cardTitle">VPS LINUX <strong>XS</strong> </v-card-title>
              <v-card-subtitle class="cardSubti">512 MB</v-card-subtitle>
              <v-card-text class="cardText">Memoria RAM 512 MB</v-card-text>
              <v-card-text class="cardText">Procesador 1 vCPU</v-card-text>
              <v-card-text class="cardText">Disco SSD de 20 GB</v-card-text>
              <v-card-text class="cardText">1 TB de transferencia*</v-card-text>
              <v-divider class="border-opacity-100" color="#1779B6"/>
                <v-card-actions class="justify-center space-action">
                    <v-btn style="color: #1779B6; text-transform: initial !important;" @click="changeModalState('119')">Elegir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" class="d-none d-sm-none d-md-block" >
          <v-card align="center" class="cardSizes" data-aos="fade-right" data-aos-duration="2000" >
              <v-card-title class="cardTitle">VPS LINUX <strong> S</strong></v-card-title>
              <v-card-subtitle class="cardSubti">1 GB</v-card-subtitle>
              <v-card-text class="cardText">Memoria RAM 1 GB</v-card-text>
              <v-card-text class="cardText">Procesador 2 vCPU</v-card-text>
              <v-card-text class="cardText">Disco SSD de 40 GB</v-card-text>
              <v-card-text class="cardText">2 TB de transferencia*</v-card-text>
              <v-divider class="border-opacity-100" color="#1779B6"/>
                <v-card-actions class="justify-center space-action">
                    <v-btn style="color: #1779B6; text-transform: initial !important;" @click="changeModalState('120')">Elegir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" class="d-none d-sm-none d-md-block" >
          <v-card align="center" class="cardSizes" data-aos="fade-left" data-aos-duration="2000">
              <v-card-title class="cardTitle">VPS LINUX <strong> M</strong> </v-card-title>
              <v-card-subtitle class="cardSubti">2 GB</v-card-subtitle>
              <v-card-text class="cardText">Memoria 2 GB</v-card-text>
              <v-card-text class="cardText">Procesador 3 vCPU</v-card-text>
              <v-card-text class="cardText">Disco SSD de 60 GB</v-card-text>
              <v-card-text class="cardText">3 TB de transferencia*</v-card-text>
              <v-divider class="border-opacity-100" color="#1779B6"/>
                <v-card-actions class="justify-center space-action">
                    <v-btn style="color: #1779B6; text-transform: initial !important;" @click="changeModalState('121')">Elegir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" class="d-none d-sm-none d-md-block" >
          <v-card align="center" class="cardSizes" data-aos="fade-left" data-aos-duration="2000">
              <v-card-title class="cardTitle">VPS LINUX <strong> L</strong></v-card-title>
              <v-card-subtitle class="cardSubti">4 GB</v-card-subtitle>
              <v-card-text class="cardText">Memoria RAM 4 GB</v-card-text>
              <v-card-text class="cardText">Procesador 4 vCPU</v-card-text>
              <v-card-text class="cardText">Disco SSD de 80 GB</v-card-text>
              <v-card-text class="cardText">4 TB de transferencia*</v-card-text>
              <v-divider class="border-opacity-100" color="#1779B6"/>
                <v-card-actions class="justify-center space-action">
                    <v-btn style="color: #1779B6; text-transform: initial !important; " @click="changeModalState('122')">Elegir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" class="d-none d-sm-none d-md-block" >
          <v-card align="center" class="cardSizes" data-aos="fade-right" data-aos-duration="2000">
              <v-card-title class="cardTitle">VPS LINUX <strong> XL</strong></v-card-title>
              <v-card-subtitle class="cardSubti">8 GB</v-card-subtitle>
              <v-card-text class="cardText">Memoria RAM 8 GB</v-card-text>
              <v-card-text class="cardText">Procesador 5 vCPU</v-card-text>
              <v-card-text class="cardText">Disco SSD de 160 GB</v-card-text>
              <v-card-text class="cardText">5 TB de transferencia*</v-card-text>
              <v-divider class="border-opacity-100" color="#1779B6"/>
                <v-card-actions class="justify-center space-action">
                    <v-btn style="color: #1779B6; text-transform: initial !important; " @click="changeModalState('123')">Elegir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" class="d-none d-sm-none d-md-block" >
          <v-card align="center" class="cardSizes" data-aos="fade-right" data-aos-duration="2000">
              <v-card-title class="cardTitle">VPS LINUX <strong> MEGA</strong></v-card-title>
              <v-card-subtitle class="cardSubti">16 GB</v-card-subtitle>
              <v-card-text class="cardText">Memoria RAM 16 GB</v-card-text>
              <v-card-text class="cardText">Procesador 6 vCPU</v-card-text>
              <v-card-text class="cardText">Disco SSD de 320 GB</v-card-text>
              <v-card-text class="cardText">6 TB de transferencia*</v-card-text>
              <v-divider class="border-opacity-100" color="#1779B6"/>
                <v-card-actions class="justify-center space-action">
                    <v-btn style="color: #1779B6; text-transform: initial !important;" @click="changeModalState('124')">Elegir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" class="d-none d-sm-none d-md-block" >
          <v-card align="center" class="cardSizes" data-aos="fade-left" data-aos-duration="2000">
              <v-card-title class="cardTitle">VPS LINUX <strong style="font-size: 16px;">SUPER</strong></v-card-title>
              <v-card-subtitle class="cardSubti">32 GB</v-card-subtitle>
              <v-card-text class="cardText" style="font-size: 16px;">Memoria RAM 32 GB</v-card-text>
              <v-card-text class="cardText">Procesador 7 vCPU</v-card-text>
              <v-card-text class="cardText">Disco SSD de 640 GB</v-card-text>
              <v-card-text class="cardText">7 TB de transferencia*</v-card-text>
              <v-divider class="border-opacity-100" color="#1779B6"/>
                <v-card-actions class="justify-center space-action">
                    <v-btn style="color: #1779B6; text-transform: initial !important;" @click="changeModalState('125')">Elegir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" class="d-none d-sm-none d-md-block" >
          <v-card align="center" class="cardSizes" data-aos="fade-left" data-aos-duration="2000">
              <v-card-title class="cardTitle" style="font-size: 15px;">VPS LINUX <strong style="font-size: 13px;">ENTERPRISE</strong></v-card-title>
              <v-card-subtitle class="cardSubti">+ GB</v-card-subtitle>
              <v-card-text class="cardText2 ">Elige tus propias </v-card-text>
              <v-card-text class="cardText2 ">especificaciones </v-card-text>
              <v-card-text class="cardText2 ">técnicas y paga </v-card-text>
              <v-card-text class="cardText2 ">solo por lo que</v-card-text>
              <v-card-text class="cardText2 ">necesites </v-card-text>
              <v-divider class="border-opacity-100" color="#1779B6"/>  
              <v-card-actions class="justify-center space-action">
                    <v-btn style="color: #1779B6; text-transform: initial !important;" @click="changeModalState('126')">Elegir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
      
      <p class="text-center mt-16 mb-10 plainText">Todos nuestros planes incluyen: </p>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <ul class="space-ul" data-aos="fade-right" data-aos-duration="1000">
            <v-img :src="require('../../../public/img/checkmark.png')" class="checkmark"/>
            <p class="text-justify text-ul-plan"><strong>Dirección IP estática </strong> - lo que permite tener una conexión más estable y segura que una dirección IP dinámica.</p>
            <v-img :src="require('../../../public/img/checkmark.png')" class="checkmark"/>
            <p class="text-justify text-ul-plan"><strong>Administración de DNS </strong> - Da mayor control y flexibilidad sobre la gestión de sus nombres de dominio, para que sus usuarios puedan acceder al sitio web o App sin problemas.</p>
          </ul>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <ul class="space-ul2" data-aos="fade-right" data-aos-duration="1000">
            <v-img :src="require('../../../public/img/checkmark.png')" class="checkmark"/>
            <p class="text-justify text-ul-plan2"><strong>Acceso al terminal SSH con un solo clic (Linux/Unix)</strong> - Protocolo de red seguro que permite acceder de forma remota a Servidores VPS a través de una conexión encriptada.</p>
            <v-img :src="require('../../../public/img/checkmark.png')" class="checkmark"/>
            <p class="text-justify text-ul-plan2"><strong>Almacenamiento SSD altamente disponible </strong> - Le permite una mayor velocidad y rendimiento en la lectura y escritura de datos siempre disponibles.</p>
          </ul>
        </v-col>
      </v-row>
      
      <p class="text-center textAs">Además recibe asesoria, soporte y mantenimiento del ambiente del servidor en caso de falla.</p>
      <v-divider :thickness="3" class="border-opacity-100 vdiv1" color="#F79433" />
      <v-row class="vrowQues mb-16">
        <v-col cols="12" md="4" sm="12" class="space-preguntas" data-aos="fade-right" data-aos-duration="1000"> 
          <v-img :src="require('../../../public/img/33.png')" class="chatServ" />
          <p class="preguntFre" >Preguntas frecuentes</p>
          <div class="bacQue my-4 " >
              <p class="textSize" ><strong>¿Qué es un servidor virtual privado?</strong></p><br>
              <p class="textFre">Un servidor privado virtual, también conocido como una “instancia”, permite a los usuarios ejecutar sitios o Apps en un entorno altamente seguro y disponible, a un precio asequible.</p>
          </div>
          <div class="bacQue my-4" >
              <p class="textSize"><strong>¿Qué ventajas ofrece un servidor virtual privado (VPS)?</strong></p><br>
              <p class="textFre">Existen muchos beneficios al usar un servidor privado virtual, incluida la rentabilidad, la escalabilidad, la seguridad y los recursos personalizables.</p>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="12" class="margin-Top" data-aos="fade-right" data-aos-duration="1000">
          <div class="bacQue1 my-4">
              <p class="textSize"><strong>¿Manejan Servidores Windows?</strong></p><br>
              <p class="textFre">No, únicamente trabajamos con Servidores VPS Linux.</p>
          </div>
          <div class="bacQue mt-8" style="margin-top: 24%" >
              <p class="textSize"><strong>¿Qué software puedo ejecutar en la instancia? </strong></p><br>
              <p class="textFre">Lightsail ofrece una gama de plantillas de sistemas operativos y Apps que se instalan automáticamente cuando se crea una instancia nueva de Lightsail. Entre las plantillas de Apps se incluyen WordPress, Drupal, Joomla!, Ghost, Magento, Redmine, LAMP, Nginx (LEMP), MEAN, Node.js, Django y más. <br><br> Puede instalar software adicional en sus instancias con el SSH en el navegador o su propio cliente SSH.</p>
          </div>
        </v-col>
      </v-row>
      <!-- <v-img :src="require('../../../public/img/Groupdevelopment31.png')" class="d-none d-sm-none d-md-block"/> -->
          <div class="text-center d-none d-sm-none d-md-block">
            <v-img :src="require('../../../public/img/Rectangle 340.png')" style="width: 92%; margin: auto; height: 100% !important;">
              <div class="sinntecHandh1" data-aos="zoom-in-up" data-aos-duration="1000">¡Con Sinntec, estás en buenas manos!</div>
                <p class="sinntecHandh2"  data-aos="zoom-in-up" data-aos-duration="1000" >Trabajamos en estrecha colaboración con cada cliente para definir las mejores prácticas y procesos para lograr el éxito en su proyecto.</p>
                  <v-img :src="require('../../../public/img/sintecFigure1.png')" class="sizeimageSinntec"  data-aos="flip-left" data-aos-duration="1000"/>
                  <v-img :src="require('../../../public/img/7.png')" style="width: 25%; margin: auto; margin-bottom: 4%; top: -80px"  data-aos="flip-left" data-aos-duration="1000"/>
            </v-img>
          </div>
      <div class="text-center mx-0 d-none d-sm-none d-md-block">
        <v-btn @click="changeModalState('33')" class="sol-dem-dev mb-16" >Solicitar demostración</v-btn>
    </div>

<v-row class="d-sm-block d-md-none text-center">
    <v-col cols="12" sm="12" md="12">

        <p class="texthand4">¡Con Sinntec, estás en buenas manos!</p>
        <p class="textwork4">Trabajamos en estrecha colaboración con cada cliente para definir las mejores prácticas y procesos para lograr el éxito en su proyecto.</p>
        <v-img :src="require('../../../public/img/Groupdevelopment4.png')" />
        <v-row>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/1.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle4">Atención a cliente</p>
                <p class="textsubtitledes4">Te brindamos un servicio completamente personalizado y en todo momento</p>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/2.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle4">Calidad</p>
                <p class="textsubtitledes4">Llevamos a cabo un proceso ágil y flexible, enfocado a tus necesidades</p>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/3.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle4">Asesoría</p>
                <p class="textsubtitledes4">Te acompañamos y orientamos durante todo el desarrollo de tu proyecto a través de nuestro equipo de expertos</p>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/4.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle4">Costo - beneficio</p>
                <p class="textsubtitledes4">La calidad - costo - beneficio que necesitas y acorde a los requerimientos de tu proyecto</p>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/5.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle4">Garantía</p>
                <p class="textsubtitledes4">Contarás con nuestra garantía de calidad y seguridad en la implementación en producción de tu producto</p>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/6.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle4">Post Venta</p>
                <p class="textsubtitledes4">Con Sinntec siempre tendrás una respuesta positiva a cualquiera que sea tu solicitud aun después de entregado tu proyecto</p>
            </v-col>
            <v-col cols="12" sm="12" class="my-0" style="margin:auto">
                <v-img :src="require('../../../public/img/7.png')" class="imgIcondevelopmentsm1" style="width: 70%;"/>
              </v-col>
        </v-row>
    </v-col>
    <v-btn @click="changeModalState('34')" class="btn-cot-Serv">Solicitar demostración</v-btn>
</v-row>

</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import modalVue from './page_modal_servers.vue';

AOS.init();

export default {
  data(){
        return{
            inputemailServers: '',
            viewModal:false,
            calltoAction: '',
        }
    },
    components:{
        modalVue
    },
    methods:{
        changeModalState(p){
                this.viewModal=true
                this.calltoAction = p
        },
    }
}
</script>

<style scoped>
@import '../../assets/css/page-servers-style.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500;600;700&display=swap');
</style>  