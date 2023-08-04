<template>
    

    <v-row :style="styleObject">
        <!--TODO:magenes  -->
        <v-btn href="tel:5569433293" class="d-sm-block d-md-none btn-call-sof animate__animated animate__fadeInRight animate__delay-1s" append-icon="mdi-phone-outline" />
        <v-btn href="mailto:contacto@sinntec.com.mx" class="d-sm-block d-md-none btn-call-sof animate__animated animate__fadeInRight animate__delay-1s" append-icon="mdi-email-outline" style="margin-top: 45px !important;"/>
        <v-col cols="12" sm="6" md="4" class="text-center d-none d-sm-none d-md-block">
            <div>
                <v-img :src="require('../../assets/images/avion.png')" class="av-development animate__animated animate__zoomIn" style="width: 50%;"/>
                <v-img :src="require('../../assets/images/13.png')" class="hm-development animate__animated animate__fadeInLeft animate__delay-1s" style="width: 75%;" />
            </div>
        </v-col>
        <v-col cols="12" sm="12" md="6">
            <div class="title-development animate__animated animate__fadeInLeft">
                <p >¡Haz crecer tu <br> negocio!</p>
            </div>
            <div class="text-development">
                <p class="mb-10 animate__animated animate__fadeInLeft">
                    Somos tu equipo experto en <strong>desarrollo de software a la medida,</strong> estamos a tu diposición para ayudarte a alcanzar tus objetivos.
                </p>
                <v-row class="mt-7 animate__animated animate__fadeInUp animate__delay-1s" style="margin: auto;">
                    <v-col cols="6" sm="6" md="6">
                        <v-text-field
                        v-model="inputEmailDevelopment"
                        class="camp-sol-Email"
                        clearable
                        hide-details
                        single-line
                        label="Escribe tu email"
                        type="email"
                        />
                    </v-col>
                    <v-col cols="6" sm="6" md="6" class="d-none d-sm-none d-md-block">
                        <v-btn @click="changeModalState('113')" class="btnServers2 text-start" style="font-size: 14px !important;"> 
                        Solicitar información
                        </v-btn>
                    </v-col>
                    <v-col cols="6" sm="6" md="6" class="d-sm-block d-md-none">
                        <v-btn @click="changeModalState('113')" class="btnServers2 text-start">
                        Solicitar info
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-col>
            <v-col cols="12" sm="12" class="text-center d-sm-block d-md-none">
                <div class="animate__animated animate__backInLeft animate__delay-1s">
                    <v-img :src="require('../../assets/images/avion.png')" class="av-development2" />
                    <v-img :src="require('../../assets/images/13.png')" class="hm-development2" />
                </div>
            </v-col>
        <!-- button for call -->
        <v-col cols="12" sm="6" md="2" class="d-none d-sm-none d-md-block sticky-top">
            <v-btn href="tel:5569433293" prepend-icon="mdi-phone-outline" class="btn-called3 animate__animated animate__fadeInRight animate__delay-1s">
                55 6943 3293
            </v-btn>
        </v-col>
        <v-btn  @click="changeModalState('117')" class="btndevAgendarDemo d-sm-block d-md-none ">Agendar demostración</v-btn>
    </v-row>

    <v-row class="d-none d-sm-none d-md-block">
        <v-col cols="12" md="12">
            <v-carousel cycle height="857" hide-delimiters :show-arrows="false" style="margin-top: -12px" interval="15000">
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <v-row>
                        <v-col cols="6" xs="6" sm="6" md="6" >
                            <v-img :src="slide" class="carouselImg" />
                        </v-col>
                        <v-col cols="6" xs="6" sm="6" md="6" v-if="i===0">
                            <p class="styleCarouseltexth1 my-16">En Sinntec colaboramos con</p>
                            <p class="styleCarouseltexth2 mt-8 mb-3">Startups</p>
                            <p class="styleCarouseltexth3 my-12 text-start">Crea soluciones tecnológicas con nuestra colaboración, nos adaptamos a tus necesidades cambiantes. Nuestros precios son asequibles para startups y te ofrecemos flexibilidad en plazos y tamaño de proyectos.</p>
                            <v-btn  @click="changeModalState('114')" class="btn-development my-8">Cotizar mi proyecto</v-btn>
                        </v-col>
                        <v-col cols="6" xs="6" sm="6" md="6" v-if="i===1">
                            <p class="styleCarouseltexth1 my-16">En Sinntec colaboramos con</p>
                            <p class="styleCarouseltexth2 mt-8 mb-3">Empresas</p>
                            <p class="styleCarouseltexth3 my-12 text-start">Cuenta con tu equipo de desarrollo con un enfoque planificado y estructurado adaptado  a tus necesidades, para crear las soluciones que lleven a tu empresa al siguiente nivel.</p>
                            <v-btn  @click="changeModalState('115')" class="btn-development my-8">Cotizar mi proyecto</v-btn>
                        </v-col>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </v-col>
        <v-btn @click="changeModalState('117')" class="btndevAgendarDemo d-sm-block d-md-none">Cotizar mi proyecto</v-btn>
    </v-row>

    <v-row class="d-sm-block d-md-none">
        <v-col cols="12" sm="12">
            <v-carousel cycle height="auto" hide-delimiter-background :show-arrows="false">
                <v-carousel-item v-for="(imgDevs, a) in imgDev" :key="a">
                    <v-col cols="12" sm="12">
                        <v-img :src="imgDevs" style="max-width: 100%; margin: auto; padding: 0 " ></v-img>
                    </v-col>
                    <v-col cols="12" sm="12" v-if="a===0">
                        <p class="styleCarouseltexth1 ">En Sinntec colaboramos con</p>
                        <p class="styleCarouseltexth2">Startups</p>
                        <p class="styleCarouseltexth3 text-start mb-8" style="font-size: 18px;">Crea soluciones tecnológicas con nuestra colaboración, nos adaptamos a tus necesidades cambiantes. Nuestros precios son asequibles para startups y te ofrecemos flexibilidad en plazos y tamaño de proyectos.</p>
                    </v-col>
                    <v-col cols="12" sm="12" v-if="a===1">
                        <p class="styleCarouseltexth1 my-8">En Sinntec colaboramos con</p>
                        <p class="styleCarouseltexth2">Empresas</p>
                        <p class="styleCarouseltexth3 text-start" style="font-size: 18px;">Cuenta con tu equipo de desarrollo con un enfoque planificado y estructurado adaptado  a tus necesidades, para crear las soluciones que lleven a tu empresa al siguiente nivel.</p>
                    </v-col>
                </v-carousel-item>
            </v-carousel>
        </v-col>
        <v-btn class="btnSlideCot" @click="changeModalState('117')">Cotizar mi producto</v-btn>
    </v-row>

<v-container>
    <v-row>
        <v-col cols="12" sm="12" md="12">
            <div class="text-center">
                <p class="solu-development">¿Sabes qué soluciones necesitas para tu negocio?</p>
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="12" md="4">
            <v-img :src="require('../../assets/images/grdevelopment4.svg')" class="svgsicon"/>
                <p class="titdevelopmenticon">Aplicaciones de escritorio</p>
                <p class="descdevelopment">Desarrollo de Aplicaciones de escritorio personalizadas para diferentes necesidades empresariales.</p>
        </v-col>
        <v-col cols="12" sm="12" md="4">
            <v-img :src="require('../../assets/images/grdevelopment2.svg')" class="svgsicon"/>
                <p class="titdevelopmenticon">Aplicaciones web</p>
                <p class="descdevelopment">Permite acceder a una variedad de servicios, sin preocuparse por la infraestructura física</p>
        </v-col>
        <v-col cols="12" sm="12" md="4">
            <v-img :src="require('../../assets/images/grdevelopment1.svg')" class="svgsicon"/>
                <p class="titdevelopmenticon">SOLUCIONES MOVILES</p>
                <p class="descdevelopment">Desarrollo de Apps para dispositivos móviles, en plataformas iOS y Android</p>
        </v-col>
        <v-col cols="12" sm="12" md="4" class="text-center" style="margin: auto">
            <v-img :src="require('../../assets/images/grdevelopment3.svg')" class="svgsicon"/>
                <p class="titdevelopmenticon">INTEGRACIÓN DE SISTEMAS</p>
                <p class="descdevelopment">Integración de diferentes sistemas y herramientas para mejorar la eficiencia de un negocio.</p>
        </v-col>
        
        <v-col cols="12" sm="12" md="4" class="text-center" style="margin: auto">
            <v-img :src="require('../../assets/images/soporteymantenimiento.png')" class="svgsicon" />
                <p class="titdevelopmenticon">SOPORTE Y MANTENIMIENTO</p>
                <p class="descdevelopment">Soporte técnico y mantenimiento de software para garantizar su correcto funcionamiento y seguridad.</p>
        </v-col>
    </v-row>
</v-container>
<!-- Technolgy with of the job -->

<v-row class="tecworks text-center">
    <v-btn class="btn-cot-Tec d-sm-block d-md-none" @click="changeModalState('116')">Solicitar demostración</v-btn>
    <v-container>
        <v-btn class="btn-cot-Tec d-none d-sm-none d-md-block" @click="changeModalState('116')">Solicitar demostración</v-btn>
    </v-container>
        <v-col cols="12" md="2" sm="12">
            <v-img :src="require('../../../public/img/tec1.png')" class="imgicondevelopment1" data-aos="fade-right" data-aos-duration="1000"/>
        </v-col>
        <v-col cols="12" md="2" sm="6">
            <v-img :src="require('../../../public/img/tec2.png')" class="imgicondevelopment2" data-aos="fade-right" data-aos-duration="1000"/>
        </v-col>
        <v-col cols="12" md="2" sm="6">
            <v-img :src="require('../../../public/img/tec3.png')" class="imgicondevelopment3" data-aos="fade-right" data-aos-duration="1000"/>
        </v-col>
        <v-col cols="12" md="2" sm="6">
            <v-img :src="require('../../../public/img/tec4.png')" class="imgicondevelopment4" data-aos="fade-right" data-aos-duration="1000"/>
        </v-col>
        <v-col cols="12" md="2" sm="6">
            <v-img :src="require('../../../public/img/tec5.png')" class="imgicondevelopment5" data-aos="fade-right" data-aos-duration="1000"/>
        </v-col>
        <v-col cols="12" md="2" sm="12">
            <v-img :src="require('../../../public/img/tec6.png')" class="imgicondevelopment5" data-aos="fade-right" data-aos-duration="1000"/>
        </v-col>
        <v-col cols="12" md="3" sm="3" class="d-none d-md-block d-sm-none">
            <v-divider :thickness="1" class="border-opacity-100 ml-2" color="info"/>
        </v-col>
        <v-col cols="12" md="6" sm="12">
            <div class="text-center">
                <p class="tecdevelopment">Tecnologías con las que trabajamos</p> 
            </div>
        </v-col>
        <v-col cols="12" md="3" sm="3" class="d-none d-sm-none d-md-block">
            <v-divider :thickness="1" class="border-opacity-100 ml-2" color="info"/>
        </v-col>
        <v-col cols="12" md="3" sm="12" class="d-sm-block d-md-none">
            <v-divider width="25%" :thickness="1" class="border-opacity-100" color="info" style="margin: auto; margin-top: -5%"/>
        </v-col>
</v-row>

<v-container style="margin-top: 5%;">
    <v-row>
        <v-col cols="12" md="6" sm="12">
                <p class="enf" data-aos="fade-right" data-aos-duration="1000">Enfoque adaptable y flexible</p>
                <p class="waterfalltext2 d-sm-block d-md-none" data-aos="fade-right" data-aos-duration="1000">Trabajamos con procesos y metodologías que permiten alcanzar resultados a corto plazo, asegurando que nuestros proyectos se ajusten a las necesidades y objetivos específicos de cada cliente.</p>
            <v-img :src="require('../../assets/images/enfoque1.png')" class="enfimgg1 d-none d-md-block d-sm-none" data-aos="zoom-in" data-aos-duration="1000"/>
                    <p class="waterfalltitle" data-aos="fade-right" data-aos-duration="1000">WATERFALL</p>
                    <p class="waterfalltext mr-7" data-aos="fade-right" data-aos-duration="1000">La metodología Waterfall se enfoca en un <strong>enfoque planificado y estructurado</strong>, lo que permite una mayor claridad y estabilidad en el proceso. </p>
                <v-img :src="require('../../assets/images/enfoque1.png')" class="enfimgg1 d-md-none d-sm-block"/>
                <div  data-aos="fade-right" data-aos-duration="1000">
                    <ul class="ul-development">
                        <li>Integración: Gestión, administración y coordinación de procesos y actividades</li>
                        <li>Alcance: Definir todos y cada uno de los procesos y actividades</li>
                        <li>Tiempo: Gestión del tiempo de ejecución de los procesos implicados en el proyecto</li>
                        <li>Costos: Gestión de los costos del proyecto y control de los mismos</li>
                        <li>Calidad: Determina responsabilidades en los resultados de las actividades y los procesos Recursos </li>
                        <li>Recursos humanos: Gestión y dirección del / los equipos humanos</li>
                        <li>Comunicaciones: Gestión y administración de los mecanismos y estrategias de comunicación</li>
                        <li>Riesgos: Gestión, detección y solución de los riesgos</li>
                        <li>Adquisiciones: Gestión de compra de bienes, estructuras, herramientas o servicios</li>
                        <li>Skateholders: Gestión de los interesados o posibles inversores</li>
                    </ul>
                </div>
        </v-col>
        <v-col cols="12" md="6" sm="12" >
                <p class="waterfalltext2 d-none d-md-block d-sm-none" data-aos="fade-left" data-aos-duration="1000">Trabajamos con procesos y metodologías que permiten alcanzar resultados a corto plazo, asegurando que nuestros proyectos se ajusten a las necesidades y objetivos específicos de cada cliente.</p>
            <v-img :src="require('../../assets/images/enfoque2.png')" class="enfimgg2 d-none d-sm-none d-md-block" data-aos="zoom-in" data-aos-duration="1000"/>
                <p class="waterfalltitle2" data-aos="fade-right" data-aos-duration="1000">AGILE</p>
                <p class="waterfalltext2" data-aos="fade-right" data-aos-duration="1000">La metodología Agile se enfoca en la entrega continua y la colaboración constante con el cliente, lo que permite un mayor control y flexibilidad en el proceso de desarrollo.</p>
            <v-img :src="require('../../assets/images/enfoque2.png')" class="enfimgg2 d-sm-block d-md-none"/>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <ul class="ul-development">
                            <li>Adaptabilidad y transparencia</li>
                            <li>Retroalimentación y mejora continua</li>
                            <li>Entregas continuas (Iteraciones) y ritmo sostenible</li>
                            <li>Entregas tempranas (entregables)</li>
                            <li>Motivación y solución rápida a problemas</li>
                            <li>Entregables efectivos centrados en el Cliente</li>
                            <li>Ambiente de alta confianza y de innovación</li>
                        </ul>
                    </div>    
            <v-img :src="require('../../assets/images/fig2.png')" class="fig2" data-aos="zoom-in" data-aos-duration="1000"/>
            <v-img :src="require('../../assets/images/fig1.png')" class="fig1" data-aos="zoom-in" data-aos-duration="1000"/>
        </v-col>
    </v-row>
</v-container>
<div class="text-center d-none d-sm-none d-md-block">
    <v-img :src="require('../../../public/img/Rectangle 340.png')" style="width: 95%; margin:auto">
    <div class="sinntecdevelopmentHandh1" data-aos="zoom-in-up" data-aos-duration="1000">¡Con Sinntec, estás en buenas manos!</div>
    <p class="sinntecdevelopmentHandh2" data-aos="zoom-in-up" data-aos-duration="1000"> Trabajamos en estrecha colaboración con cada cliente para definir las mejores prácticas y procesos para lograr el éxito en su proyecto.</p>
        <v-img :src="require('../../../public/img/sintecFigure1.png')" style="width: 85%; margin: auto; top: -120px" data-aos="flip-left" data-aos-duration="1000"/>
        <v-img :src="require('../../../public/img/7.png')" style="width: 25%; margin: auto; top: -120px" data-aos="flip-left" data-aos-duration="1000"/>
    </v-img>
        <div class="text-center mx-0 d-none d-sm-none d-md-block">
            <v-btn @click="changeModalState('117')" class="sol-dem-dev3 mb-10" data-aos="zoom-in" data-aos-duration="1000">Solicitar demostración</v-btn>
        </div>
</div>
<br>

<v-row class="d-sm-block d-md-none text-center">
    <v-col cols="12" sm="12" md="12">
        <p class="texthand">¡Con Sinntec, estás en buenas manos!</p>
        <p class="textwork">Trabajamos en estrecha colaboración con cada cliente para definir las mejores prácticas y procesos para lograr el éxito en su proyecto.</p>
        <v-img :src="require('../../../public/img/Groupdevelopment4.png')" />
        <v-row>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/1.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle2">Atención a cliente</p>
                <p class="textsubtitledes2">Te brindamos un servicio completamente personalizado y en todo momento</p>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/2.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle2">Calidad</p>
                <p class="textsubtitledes2">Llevamos a cabo un proceso ágil y flexible, enfocado a tus necesidades</p>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/3.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle2">Asesoría</p>
                <p class="textsubtitledes2">Te acompañamos y orientamos durante todo el desarrollo de tu proyecto a través de nuestro equipo de expertos</p>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/4.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle2">Costo - beneficio</p>
                <p class="textsubtitledes2">La calidad - costo – beneficio que necesitas y acorde a los requerimientos de tu proyecto</p>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/5.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle2">Garantía</p>
                <p class="textsubtitledes2">Contarás con nuestra garantía de calidad y seguridad en la implementación en producción de tu producto</p>
            </v-col>
            <v-col cols="12" sm="4">
                <v-img :src="require('../../../public/img/6.png')" class="imgIcondevelopmentsm"/>
                <p class="textsubtitle2">Post Venta</p>
                <p class="textsubtitledes2">Con Sinntec siempre tendrás una respuesta positiva a cualquiera que sea tu solicitud aun después de entregado tu proyecto</p>
            </v-col>
            <v-col cols="12" sm="12">
                <v-img :src="require('../../../public/img/7.png')" style="width: 53%; margin: auto; margin-bottom: 23px; margin-top: 2%;"/>
            </v-col>
            <v-btn @click="changeModalState('117')" class="cotProydev">Solicitar demostración</v-btn>
        </v-row>
    </v-col> 
</v-row>

<modalVue v-if="viewModal" :email-value="inputEmailDevelopment" :show-modal="viewModal" @close="viewModal = false" :calltoAction="this.calltoAction"/>

</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'
import modalVue from './page_modal.vue'


AOS.init();

export default {
    name:'page_development',
    data:()=>({
        inputEmailDevelopment:'',

        viewModal:false,
        calltoAction: '',

        slides: [
            '/img/Groupdevelopment.png',
            '/img/Groupdevelopment21.png',
        ],
        imgDev:[
            '/img/Groupdevelopment.png',
            '/img/Groupdevelopment21.png'
        ],
        styleObject: {
            background: '#0C2139',
            // background: 'radial-gradient(49.41% 120.83% at 53.34% -67%, #28557E 0%, #0C2139 100%)',
            height:'100%'
        },        
    }),
    components:{
        modalVue
    },
    methods:{
        changeModalState(p){
            this.viewModal = true
            this.calltoAction = p
        },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500;600;700&display=swap');
@import '../../assets/css/page-development-style.css';
</style>