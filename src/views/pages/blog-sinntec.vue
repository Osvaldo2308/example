<template>
    <v-row class="headBlog">
        <v-col cols="12" md="12" sm="12" class="d-none d-sm-none d-md-block sticky-top">
            <div class="text-end">
                <v-btn class="btn-calledBlog animate__animated animate__fadeInRight animate__delay-1s" href="tel:5569433293" prepend-icon="mdi-phone-outline">
                    55 6943 3293
                </v-btn>
            </div>
        </v-col>
        <!-- <v-col cols="12" md="12" sm="12" class="d-sm-block d-md-none"> -->
            <v-btn class="btn-calledBlogSm d-sm-block d-md-none " href="tel:5569433293" append-icon="mdi-phone-outline"/>
            <v-btn class="btn-calledBlogSm d-sm-block d-md-none mt-12" href="mailto:contacto@sinntec.com.mx" append-icon="mdi-email-outline"/>
        <!-- </v-col>  -->
        <v-col cols="12" md="4" sm="6" class="animate__animated animate__fadeInDown animate__delay-1s"> 
            <p class="texth1Blog">Limitantes en la integración de Apps</p> 
            <p class="texth2Blog">Cuenta con tu equipo de desarrollo con un enfoque planificado y estructurado adaptado a tus necesidades, para crear las soluciones que lleven a tu empresa al siguiente nivel <a v-on:click="changeViewMore()">{{text}}</a></p>
        </v-col>
        <v-col cols="12" md="7" sm="6" class="animate__animated animate__fadeInUp animate__delay-1s">
            <v-img :src="require('../../../public/img/40.png')" class="sizeImage"/>
        </v-col>
    </v-row>

    <v-row style="margin: auto; margin-top: 8%; margin-left: 10%; margin-right: 10%;" >
        <v-col cols="12" md="4" sm="12" data-aos="fade-up" data-aos-duration="1000">
            <v-img :src="require('../../../public/img/34.jpg')" class="imgBlog"/>
            <p class="titartBlog">Articulo ejemplo</p>
            <p class="descBlog">Desarrollo de Apps para dispositivos móviles, en plataformas iOS y Android</p>
        </v-col>
        <v-col cols="12" md="4" sm="12" data-aos="fade-up" data-aos-duration="1000">
            <v-img :src="require('../../../public/img/35.jpg')" class="imgBlog"/>
            <p class="titartBlog">Articulo ejemplo</p>
            <p class="descBlog">Permite acceder a una variedad de servicios y Apps, sin preocuparse por la infraestructura física</p>
        </v-col>
        <v-col cols="12" md="4" sm="12" data-aos="fade-up" data-aos-duration="1000">
            <v-img :src="require('../../../public/img/36.jpg')" class="imgBlog"/>
            <p class="titartBlog">Articulo ejemplo</p>
            <p class="descBlog">Desarrollo de plataformas en línea, como tiendas en línea, portales web, y plataformas de aprendizaje.</p>
        </v-col>
    </v-row>

    <v-row style="margin: auto; margin-left: 10%; margin-right: 10%; margin-top: 5%; margin-bottom: 6%;">
        <v-col cols="12" md="4" sm="12" data-aos="fade-up" data-aos-duration="1000">
            <v-img :src="require('../../../public/img/37.jpg')" class="imgBlog"/>
            <p class="titartBlog">Articulo ejemplo</p>
            <p class="descBlog">Integración de diferentes sistemas y herramientas para mejorar la eficiencia de un negocio.</p>
        </v-col>
        <v-col cols="12" md="4" sm="12" data-aos="fade-up" data-aos-duration="1000">
            <v-img :src="require('../../../public/img/38.jpg')" class="imgBlog"/>
            <p class="titartBlog">Articulo ejemplo</p>
            <p class="descBlog">Desarrollo de App web personalizada para diferentes necesidades empresariales.</p>
        </v-col>
        <v-col cols="12" md="4" sm="12" data-aos="fade-up" data-aos-duration="1000">
            <v-img :src="require('../../../public/img/39.jpg')" class="imgBlog"/>
            <p class="titartBlog">Articulo ejemplo</p>
            <p class="descBlog">Soporte técnico y mantenimiento de software para garantizar su correcto funcionamiento y seguridad.</p>
        </v-col>
    </v-row>

    <div class="text-center d-none d-sm-none d-md-block" style="margin-top: 10px">
        <v-img :src="require('../../../public/img/Rectangle 340.png')" style="width: 95%; margin: auto; margin-top: 100px">
            <div class="sinntecHandBlogh1" style="margin-top: 85px; top: -90px; position: relative;" data-aos="zoom-in-up" data-aos-duration="1000">¡Con Sinntec, estás en buenas manos!</div>
                <p class="sinntecHandBlogh2" data-aos="zoom-in-up" data-aos-duration="1000"> Trabajamos en estrecha colaboración con cada cliente para definir las mejores prácticas y procesos para lograr el éxito en su proyecto.</p>
                    <v-img :src="require('../../../public/img/sintecFigure1.png')" style="width: 85%; margin: auto; top: -70px" data-aos="flip-left" data-aos-duration="1000"/>
                    <v-img :src="require('../../../public/img/7.png')" style="width: 25%; margin: auto; margin-top: -70px ;margin-bottom: 7%;" data-aos="flip-left" data-aos-duration="1000"/>
        </v-img>
    </div>

    <div class="text-center mx-0 d-none d-sm-none d-md-block">
        <v-btn rounded @click="changeModalState('70')" class="sol-dem-dev2 mb-10">Solicitar demostración</v-btn>
    </div>
        <v-row class="d-sm-block d-md-none text-center">
            <v-col cols="12" sm="12" md="12">
                <p class="texthand5">¡Con Sinntec, estás en buenas manos!</p>
                <p class="textwork5">Trabajamos en estrecha colaboración con cada cliente para definir las mejores prácticas y procesos para lograr el éxito en su proyecto.</p>
                <v-img :src="require('../../../public/img/Groupdevelopment4.png')" />
                <v-row>
                    <v-col cols="12" sm="4">
                        <v-img :src="require('../../../public/img/1.png')" class="imgIcondevelopmentsm"/>
                        <p class="textsubtitle5">Atención a cliente</p>
                        <p class="textsubtitledes5">Te brindamos un servicio completamente personalizado y en todo momento</p>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-img :src="require('../../../public/img/2.png')" class="imgIcondevelopmentsm"/>
                        <p class="textsubtitle5">Calidad</p>
                        <p class="textsubtitledes5">Llevamos a cabo un proceso ágil y flexible, enfocado a tus necesidades</p>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-img :src="require('../../../public/img/3.png')" class="imgIcondevelopmentsm"/>
                        <p class="textsubtitle5">Asesoría</p>
                        <p class="textsubtitledes5">Te acompañamos y orientamos durante todo el desarrollo de tu proyecto a través de nuestro equipo de expertos</p>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-img :src="require('../../../public/img/4.png')" class="imgIcondevelopmentsm"/>
                        <p class="textsubtitle5">Costo - beneficio</p>
                        <p class="textsubtitledes5">La calidad - costo – beneficio que necesitas y acorde a los requerimientos de tu proyecto</p>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-img :src="require('../../../public/img/5.png')" class="imgIcondevelopmentsm"/>
                        <p class="textsubtitle5">Garantía</p>
                        <p class="textsubtitledes5">Contarás con nuestra garantía de calidad y seguridad en la implementación en producción de tu producto</p>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-img :src="require('../../../public/img/6.png')" class="imgIcondevelopmentsm"/>
                        <p class="textsubtitle5">Post Venta</p>
                        <p class="textsubtitledes5">Con Sinntec siempre tendrás una respuesta positiva a cualquiera que sea tu solicitud aun después de entregado tu proyecto</p>
                    </v-col>
                    <v-col cols="12" sm="12">
                        <v-img :src="require('../../../public/img/7.png')" class="imgIcondevelopmentsm1"/>
                    </v-col>
                </v-row>
            </v-col>
            <v-btn @click="changeModalState('85')" class="sol-dem-dev1">Solicitar demostración</v-btn>
        </v-row>
    <modalVue v-if="viewModal" :show-modal="viewModal" @close="viewModal = false" :calltoAction="this.calltoAction"/>
</template>
<script>

import AOS from 'aos'
import 'aos/dist/aos.css'

import modalVue from './page_modal.vue'
import api from '@/api'

AOS.init();

export default {
    name:'page_development',
    data(){
        return{
            calltoAction:'',

            viewModal:false,
            showMore:false,
            showtextMore: '...Ver más',
            text:''
        }
    },
    components:{
        modalVue
    },
    methods:{
        changeModalState(p){
            this.viewModal = true
            this.calltoAction = p
        },
        prueba(){
            api.put("api/pos/show-title/")
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                this.notificationMessage('success',error.message)
                console.log(error.message)
            })
        },
        changeViewMore(){
            if(this.showMore === false){
                this.showMore = true
                this.text= 'pero muchas veces esta necesidad se ha visto pausada y en otros casos no lo han logrado concretar por no contemplar las limitantes que se pueden presentar en el camino.'
                // this.showtextMore = 'Ver menos'
            }else{
                this.showMore = false
                this.showtextMore = '...Ver más',
                this.text= 'pero muchas veces esta necesidad se ha visto pausada y en otros casos no lo han logrado concretar por no contemplar las limitantes que se pueden presentar en el camino.'
            }
        },
    }
}
</script>

<style scoped>
@import '../../assets/css/page-blog-style.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500;600;700&display=swap');
</style>