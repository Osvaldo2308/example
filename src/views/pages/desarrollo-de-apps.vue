<template>
    <v-row class="headAplications mb-12"> 
        <v-col cols="12" class="d-none d-sm-none d-md-block sticky-top"> 
            <v-btn href="tel:5569433293" prepend-icon="mdi-phone-outline" class="btn-called2 animate__animated animate__fadeInRight animate__delay-1s" >
                55 6943 3293
            </v-btn> 
        </v-col>

            <v-btn href="tel:5569433293" append-icon="mdi-phone-outline" class="btn-called1 d-sm-block d-md-none animate__animated animate__fadeInRight animate__delay-1s"/>
            <v-btn href="mailto:contacto@sinntec.com.mx" append-icon="mdi-email-outline" class="btn-called1 d-sm-block d-md-none animate__animated animate__fadeInRight animate__delay-1s" style="margin-top: 45px;"/>

        <v-col cols="12" sm="12" md="6"> 
            <h1 class="titeIdea animate__animated animate__backInLeft" >¿Tienes una idea brillante?</h1>
            <p class="subIdea animate__animated animate__backInLeft">¿Quieres una experiencia de usuario excepcional, un diseño atractivo y que realmente funcione? ¡Le damos vida a tu App! </p>
                <div class="sizedivsolInf animate__animated animate__backInLeft animate__delay-1s" >
                    <v-row class="mt-7 marginExperiencia ">
                        <v-col cols="6" sm="6" md="6">      
                                <v-text-field
                                density="compact"
                                class="in-servers"
                                clearable
                                hide-details
                                single-line
                                v-model.trim="inputEmail"
                                :rules="emailRules"
                                label="Escribe tu email"
                                type="email"
                                >
                                </v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" md="6">
                            <v-btn :disabled="btnDisableEmail" @click="changeModalState('21')" class="d-none d-sm-none d-md-block btnServers text-center" style="font-size: 14px !important;">
                            Solicitar información
                            </v-btn>
                            <v-btn @click="changeModalState('21')" class="d-sm-block d-md-none btnServers text-center">
                                Solicitar info
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
                <v-img :src="require('../../../public/img/aplicacionimg2.png')" class="d-sm-block d-md-none my-6 animate__animated animate__backInLeft"/>
            <h1 class="subtitIdea" data-aos="fade-up" >Desarrollo de Apps</h1>
            <p class="contIdea text-left" data-aos="fade-up">Imagina una App atractiva y fácil de usar, con una interfaz de usuario intuitiva y un diseño elegante. Ahora imagina que esa App también es muy eficiente, con funciones que realmente resuelven problemas y hacen la vida más fácil para tus usuarios.</p>
            <!-- <v-img :src="require('../../assets/images/aplicacionimg1.svg')" class="imgCel1" data-aos="fade-right" data-aos-easing="ease-in-sine"/> -->
            <v-img :src="require('../../assets/images/iconos.png')" class="iconsTelphone" data-aos="fade-right" />
            <v-img :src="require('../../assets/images/celular.png')" class="imgCel1" data-aos="fade-right"/>
        </v-col>

        <v-col cols="12" sm="12" md="5">
            <!-- <v-img :src="require('../../../public/img/aplicacionimg2.png')" class="mt-16 d-none d-sm-none d-md-block animate__animated animate__fadeInRight" /> -->
            <v-img :src="require('../../assets/images/cono.png')" class="stylecono d-none d-sm-none d-md-block animate__animated animate__fadeInRight"/>
            <v-img :src="require('../../assets/images/desarrollodeapps1.png')" class="styletelephone d-none d-sm-none d-md-block animate__animated animate__fadeInRight" />
            <div class="image__boll d-none d-sm-none d-md-block" >
                <!-- <div data-aos="fade-left" data-aos-easing="ease-in-sine" class="image__boll d-none d-sm-none d-md-block"> -->
                    <v-img :src="require('../../assets/images/bola.png')" />
                <!-- </div> -->
            </div>
                
            <v-img :src="require('../../../public/img/aplicacionimg3.png')" class="relojAp d-none d-sm-none d-md-block" />
            <v-img :src="require('../../../public/img/aplicacionimg4.png')" class="relojAp my-0 d-none d-sm-none d-md-block" />
            <h1 class="subtitIdea1 mx-7 d-none d-md-block d-sm-none" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-duration="1000" >Apps Nativas o multiplataforma</h1>
            <p class="contIdea ml-7 d-none d-md-block d-sm-none" style="margin-bottom: 80px;" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-duration="1000">Desarrollamos Apps de vanguardia, para Android o iOS. La solución la encontrarás en Sinntec, Java y Kotlin para Android Studio, Swift para iOS, Xamarin.forms, React o Flutter, nuestro equipo de expertos está listo para crear la aplicación perfecta para ti.</p>
            <h1 class="subtitIdea1 mx-7 d-sm-block d-md-none" data-aos="fade-up" >Apps Nativas o multiplataforma</h1>
            <p class="contIdea ml-7 d-sm-block d-md-none" style="margin-bottom: 80px;" data-aos="fade-up">Desarrollamos Apps de vanguardia, para Android o iOS. La solución la encontrarás en Sinntec, Java y Kotlin para Android Studio, Swift para iOS, Xamarin.forms, React o Flutter, nuestro equipo de expertos está listo para crear la aplicación perfecta para ti.</p>
            <v-img :src="require('../../../public/img/aplicacionimg3.png')" class="relojAp d-sm-block d-md-none" data-aos="fade-right" data-aos-easing="ease-in-sine" />
            <v-img :src="require('../../../public/img/aplicacionimg4.png')" class="relojAp d-sm-block d-md-none"/>
        </v-col>
        <v-btn @click="changeModalState('23')" class="btnhidesmApp" style="top:23px; margin-bottom: 0px;">Solicitar demostración</v-btn>
    </v-row> 
    <v-row class="d-none d-sm-none d-md-block" >
        <v-col cols="12" sm="12" md="12" class="mt-10" > 
            <v-img :src="require('../../../public/img/Rectangle 340.png')" style="width: 95%; margin: auto; margin-top: 90px">
                <p class="sinntecHandAplicationh1 text-center" style="margin-top: 80px; top: -90px; position: relative;" data-aos="zoom-in" data-aos-duration="2000">¡Con Sinntec, estás en buenas manos!</p>
                <p class="sinntecHandAplicationh2" data-aos="zoom-in" data-aos-duration="2000"> Trabajamos en estrecha colaboración con cada cliente para definir las mejores prácticas y procesos para lograr el éxito en su proyecto.</p>
                <v-img :src="require('../../../public/img/sintecFigure1.png')" class="sizeImgFigures" data-aos="flip-right" data-aos-duration="2000"/>
                <v-img :src="require('../../../public/img/7.png')" class="sizeImgFigures1"/>
            </v-img>
        </v-col>
        <v-btn  @click="changeModalState('24')" class="btnhidesmApp d-none d-sm-none d-md-block" style="top:-47px;">Solicitar demostración</v-btn>
    </v-row>

    <v-row class="d-sm-block d-md-none text-center"> 
        <v-col cols="12" sm="12" >
            <p class="texthand1" >¡Con Sinntec, estás en buenas manos!</p>
            <p class="textwork1">Trabajamos en estrecha colaboración con cada cliente para definir las mejores prácticas y procesos para lograr el éxito en su proyecto.</p>
            <v-img :src="require('../../../public/img/Groupdevelopment4.png')" style="margin: auto;"/>
            <v-row>
                <v-col cols="12" sm="4">
                    <v-img :src="require('../../../public/img/1.png')" class="imgIcondevelopmentsm" data-aos="zoom-in" data-aos-duration="1000"/>
                    <p class="textsubtitle1" data-aos="zoom-in">Atención a cliente</p>
                    <p class="textsubtitledes1">Te brindamos un servicio completamente personalizado y en todo momento</p>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-img :src="require('../../../public/img/2.png')" class="imgIcondevelopmentsm" data-aos="zoom-in" data-aos-duration="1000"/>
                    <p class="textsubtitle1">Calidad</p>
                    <p class="textsubtitledes1">Llevamos a cabo un proceso ágil y flexible, enfocado a tus necesidades</p>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-img :src="require('../../../public/img/3.png')" class="imgIcondevelopmentsm" data-aos="zoom-in" data-aos-duration="1000"/>
                    <p class="textsubtitle1">Asesoría</p>
                    <p class="textsubtitledes1">Te acompañamos y orientamos durante todo el desarrollo de tu proyecto a través de nuestro equipo de expertos</p>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-img :src="require('../../../public/img/4.png')" class="imgIcondevelopmentsm" data-aos="zoom-in" data-aos-duration="1000"/>
                    <p class="textsubtitle1">Costo - beneficio</p>
                    <p class="textsubtitledes1">La calidad - costo – beneficio que necesitas y acorde a los requerimientos de tu proyecto</p>
                </v-col>
                <v-col cols="12" sm="4"> 
                    <v-img :src="require('../../../public/img/5.png')" class="imgIcondevelopmentsm" data-aos="zoom-in" data-aos-duration="1000"/>
                    <p class="textsubtitle1">Garantía</p>
                    <p class="textsubtitledes1">Contarás con nuestra garantía de calidad y seguridad en la implementación en producción de tu producto</p>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-img :src="require('../../../public/img/6.png')" class="imgIcondevelopmentsm" data-aos="zoom-in" data-aos-duration="1000"/>
                    <p class="textsubtitle1">Post Venta</p>
                    <p class="textsubtitledes1">Con Sinntec siempre tendrás una respuesta positiva a cualquiera que sea tu solicitud aun después de entregado tu proyecto</p>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-img :src="require('../../../public/img/7.png')" class="imgIcondevelopmentsm1" data-aos="zoom-in" data-aos-duration="1000"/>
                </v-col>
            </v-row>
        </v-col>
    <v-btn @click="changeModalState('25')" class="btnhidesmApp">Solicitar demostración</v-btn>
</v-row>
    <modalVue v-if="viewModal" :email-value="inputEmail" :show-modal="viewModal" @close="viewModal = false" :calltoAction="this.calltoAction"/>
</template>
<script>
import modalVue from './page_modal.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();
AOS.refreshHard();

export default {
    name:'page_development',
    data:()=>({
            calltoAction: '',

            btnDisableEmail: false,

            viewModal:false,
            procedencia:'',
            valid: false,

            inputEmail: '',
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                v => {
                    if( /[^@ \t\r\n]+@\b(gmail|hotmail|live|yahoo|outlook|icloud|GMAIL|HOTMAIL|LIVE|YAHOO|OUTLOOK|ICLOUD)\b/.test(v) === true){
                        return 'E-mail must be valid';
                    }
                    return true
                }
            ],
        }),
        components:{
            modalVue,
        },
        methods:{
            changeModalState(p){
                this.viewModal = true
                this.calltoAction = p

            },
        },
        created(){
            this.isSelected= " ";
        },
        watch:{
            inputEmail(v){
                    let a = /.+@.+\..+/.test(v); 
                    let p= /[^@ \t\r\n]+@\b(gmail|hotmail|live|yahoo|outlook|icloud|GMAIL|HOTMAIL|LIVE|YAHOO|OUTLOOK|ICLOUD)\b/.test(v)
                    if (a === false || p===true) {
                        // console.log(a,v, p, this.btnDisableEmail);
                        this.btnDisableEmail = true;
                        console.log(a,v, p, this.btnDisableEmail);
                    }else{
                        this.btnDisableEmail = false;
                    }
                
            }
        }
    }
</script>

<style scoped>
@import '../../assets/css/page-aplications-style.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500;600;700&display=swap');
</style>
