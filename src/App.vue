<template>
<!-- Modal -->
    <modalVue v-if="viewModal" @close="viewModal = false" :show-modal="viewModal" :calltoAction="this.calltoAction"/>
    <pagePrice v-if="viewpagePrice" @close="viewpagePrice = false" :showmodalPage="viewpagePrice"/>
    <avisoPrivacidad v-if="viewpagePrivacity" @close="viewpagePrivacity = false" :show-modal="viewpagePrivacity" />
    <terminosCondiciones v-if="viewpageTerms" @close="viewpageTerms = false" :show-modal="viewpageTerms"/>
    <!-- (c ? t : f) -->
        <v-row class="sticky-top animate__animated animate__fadeInDown " :class="isSelected ? 'click-link-page-active' : 'click-link-page-unactive' " v-model="isSelected">
            <v-col cols="12" md="5" sm="12">
                <router-link to="/Sinntec">
                    <v-img v-if="isSelected === false" :src="require('../public/img/app/logoSinntecfondoBlanco.png')" class="logoSinntec my-3" @click="isSelected = false"/>
                    <v-img v-else :src="require('../public/img/app/logofondoazul.png')" class="logoSinntec my-3" @click="isSelected = false" />
                </router-link>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="tex-link-home">
                <router-link to="/desarrollo-de-apps" v-bind:class="isSelected ? 'optRou2' : 'optRou'" @click="isSelected = true">
                    Apps
                </router-link>
                <router-link to="/desarrollo-de-software" v-bind:class="isSelected ? 'optRou2' : 'optRou'" @click="isSelected = true">
                    Desarrollo
                </router-link>
                <router-link to="/servidores-virtuales" v-bind:class="isSelected ? 'optRou2' : 'optRou'" @click="isSelected = true">
                    Servidores VPS
                </router-link>
                <router-link to="/blog-sinntec" v-bind:class="isSelected ? 'optRou2' : 'optRou'" @click="isSelected = true">
                    Blog
                </router-link>
                <a class="optRou d-none d-sm-none d-md-block" style="text-decoration: none">
                    <v-btn rounded v-bind:class="isSelected ? 'btnContact2' : 'btnContact'" @click="changeModalState('95')" variant="outlined" style="text-transform: initial; color: #1779B6;">Contáctanos</v-btn>
            </a> 
            </v-col>
        </v-row>
<!-- Show the content of the pages -->
    <router-view/>

    <v-row class="footerApp">
        <v-img :src="require('../public/img/app/sinntecForm.png')" class="sinntecForm mt-6"/>
        <v-col cols="12" md="12" sm="12">
                <p class="titForm">Seamos equipo en </p>
                <p class="subtiForm">Tu próximo proyecto </p>
                <p class="descriptionForm">Solicita un presupuesto</p>
        </v-col>
        <v-col cols="12" md="2" >
            <div style="margin-left: -7%" class="d-none d-sm-none d-md-block">
                <v-img :src="require('../public/img/app/avion.png')" style="width: 300px; height:300px" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-offset="300"/>
            </div>
        </v-col>
        <v-col cols="12" md="8" sm="12" style="margin:auto; ">
            <v-form v-model="valid" fast-fail @submit.prevent ref="formFooter">
                <v-row>
                    <v-col cols="12" md="6" sm="12">
                        <div>
                            <v-text-field
                                v-model="name"
                                :rules="nameRules"
                                :counter="50"
                                label="Ingresa tu nombre*"
                                class="campForms"
                                hide-details="false"
                                required
                            />
                        </div>
                        <div>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="Correo*"
                                class="campForms"
                                hide-details="false"
                                required
                            />
                        </div>
                        <div>
                            <v-text-field
                                v-model="empresaForm"
                                :rules="enterpriseRules"
                                :counter="20"
                                label="Empresa*"
                                class="campForms"
                                hide-details="false"
                                required
                            />
                        </div>
                        <div>
                            <v-text-field
                                v-model="telefonoForm"
                                :rules="telephoneRules"
                                :counter="10"
                                label="Teléfono (10 digitos)*"
                                class="campForms"
                                hide-details="false"
                                required
                            />
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                        <v-textarea 
                        v-model="descripcionForm"
                        :rules="descForm"
                        class="textAreaForm mx-6"
                        label="Descripción breve del servicio deseado:*" 
                        hide-details="false"
                        required
                        />
                        <vueReCaptcha 
                        class="recaptcha__footer"
                        v-show="showRecaptcha" 
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        size="normal" 
                        theme="light"
                        hl="tr"
                        @verify="recaptchaVerified"
                        @expire="recaptchaExpired"
                        @fail="recaptchaFailed"
                        @error="recaptchaError"
                        ref="vueRecaptcha">
                        </vueReCaptcha>
                    </v-col>
                        <div class="sizeBtn">
                            <v-btn 
                            :disabled="!ReCaptchaVerificate || !valid"
                            @click="sendform('97')"
                            type="submit" 
                            block 
                            class="btnSubmit"
                            >
                            Enviar solicitud 
                            </v-btn>
                        </div>
                </v-row>
            </v-form>
        </v-col>
        <v-col cols="12" md="2">
            <v-img class="d-none d-sm-none d-md-block" :src="require('../public/img/app/taza.png')" style="width:100% ; height: 100%; top: -370px;" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-offset="300"/>
        </v-col>
    </v-row>
    <!-- Section of images footer -->
    <v-row style="background-color: #0c2139;" class="mt-0" align-content="center">
        <v-col class="img_footer" cols="12" sm="12" md="3">
            <v-img :src="require('../public/img/ariba_logo.png')"/>
        </v-col>
        <v-col class="img_footer" cols="12" sm="12" md="3">
            <v-img :src="require('../public/img/android_developers_logo.png')"/>
        </v-col>
        <v-col class="img_footer" cols="12" sm="12" md="3">
            <v-img :src="require('../public/img/apple_developers_logo.png')"/>
        </v-col>
        <v-col class="img_footer mb-10" cols="12" sm="12" md="3"> 
            <v-img :src="require('../public/img/microsoft_partnerN_logo.png')"/>
        </v-col>
    </v-row>
    <!------------------------------- Footer Services & contact Desktop------------------------------->
    <v-row class="footerApp mt-0">
        <v-divider :thickness="1" class="sizeLine mt-0 mb-10" color="#F79433"/>
            <v-col cols="12" md="3" sm="12">
                <div class="marginSize">
                    <p style="color: #F79433;">Productos y servicios</p>
                    <router-link to="/desarrollo-de-software" class="tex-footer" :class="isSelected ? 'optRou3' : 'optRou4'" @click="isSelected = true">Desarrollo a la medida</router-link><br>
                    <router-link to="/desarrollo-de-apps" class="tex-footer" :class="isSelected ? 'optRou3' : 'optRou4'" @click="isSelected = true">Desarrollo de apps</router-link><br>
                    <router-link to="/servidores-virtuales" class="tex-footer" :class="isSelected ? 'optRou3' : 'optRou4'" @click="isSelected = true">Servidores VPS</router-link>
                </div>
            </v-col>
            <v-col cols="12" md="5" sm="12">
                <div class="marginSizePrec">
                    <a @click="changeModalPrice()" class="tex-footer" :class="isSelected ? 'optRou3' : 'optRou4'" style="text-decoration: none; cursor: pointer;">Precios</a><br>
                    <a @click="changeModalState('96')" class="tex-footer" :class="isSelected ? 'optRou3' : 'optRou4'" style="text-decoration: none; cursor: pointer;">Solicitar presupuesto</a><br>
                    <router-link to="/blog-sinntec" class="tex-footer" :class="isSelected ? 'optRou3' : 'optRou4'" @click="isSelected = true">Blog</router-link><br>
                </div>
            </v-col>
        <v-divider :thickness="1" class="border-opacity-100 sizeLine d-sm-block d-md-none" color="#F79433" ></v-divider>
        
            <v-col cols="12" sm="12" md="4">
                <div class="marginSize1">
                    <a href="tel:5569433293" class="contact-a">
                        <v-icon><v-img :src="require('../src/assets/images/call1.png')" class="Icons"></v-img></v-icon> 
                            556 943 3293
                    </a>
                    <br>
                    <a href="mailto:contacto@sinntec.com.mx" class="contact-a"><v-icon><v-img :src="require('../src/assets/images/mailto.png')" class="Icons"></v-img></v-icon> 
                        contacto@sinntec.com.mx
                    </a>
                    <br>
                    <a target="_blank" href="https://goo.gl/maps/dpZqPfSxDNQuWUwo7" class="contact-a">
                        <v-icon><v-img :src="require('../src/assets/images/ubication.png')" class="Icons"></v-img></v-icon>
                        Polanco, CDMX.
                    </a>
                </div>
            </v-col>
        <v-divider :thickness="1" class="border-opacity-100 sizeLine d-none d-sm-none d-md-block my-10" color="#F79433" ></v-divider>
    </v-row>
    <!------------------------------------------------ Footer notice of privacy ------------------------------------------------>
    <v-row class="footerApp mt-0">
        <v-col cols="12" sm="12" md="12" class="text-center my-2">
            <p style="color: #D8DEE6; font-size: 13px;">
                    © Copyright 2023. Designed by
                <a style="color: #D8DEE6; font-size: 13px;">
                    Sinntec Innovación Tecnológica S.A. de C.V.
                </a>
                <a @click="changeModalPrivacity()" class="textNotice">
                    &nbsp; Aviso de Privacidad |
                </a>
                <a @click="changeModalTerms()" class="textNotice">
                    Términos y Condiciones
                </a>
            </p>
        </v-col>
    </v-row>
</template>
<!------------------------------- INIT SCRIPTS ------------------------------->
<script>
// import api from './api'
// import axios from 'axios';
import api from '../src/api/index.js'
import modalVue from './views/pages/page_modal.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css';
import pagePrice from './views/pages/page_price.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'
import swal from 'sweetalert'
import avisoPrivacidad from './views/pages/aviso-privacidad.vue'
import terminosCondiciones from './views/pages/terminos-condiciones.vue';


import vueReCaptcha from 'vue3-recaptcha2'

AOS.init();
AOS.refreshHard();

export default {

name:'App',


data:()=>({
    viewModal: false,
    viewpagePrice: false,
    viewpagePrivacity: false,
    viewpageTerms: false,

    calltoAction:'',

    ReCaptchaVerificate: false,
    showRecaptcha: true,

    result: null,
    // Variables para el formulario
    nombre: '',
    correo: '',
    empresa: '',
    telefono: '',
    descripcion: '',
    tab: '',
    origen: '',

    id_call_action: '',
    
    paginaOrigen:'Pagina Principal',

    isSelected: false,
    // Scripts for validation form
    valid: false,
    name: '',
    nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <=50 ) || 'Name must be less than 50 character',
        v =>  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[\sa-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(v) || 'Name must be valid'
    ],
        email: '',
        emailRules: [
        v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            v => {
            if( /[^@ \t\r\n]+@\b(gmail|hotmail|live|yahoo|outlook|icloud|GMAIL|HOTMAIL|LIVE|YAHOO|OUTLOOK|ICLOUD)\b/.test(v) === true){
                return 'E-mail must be valid';
            }
            return true
        },
    ],
    empresaForm:'',
    enterpriseRules: [
        v => !!v || 'Name enterprise is required',
        v => (v && v.length <=50) || 'Name enterprise must be less than 50 character'
    ],
    telefonoForm: '',
    telephoneRules: [
        v => !!v || 'Number telephone is required',
        v => /^\d{10}$/.test(v) || 'Number telephone must be valid'
    ],
    descripcionForm:'',
    descForm:[
        v => !!v || 'Description is required',
        v =>  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[\sa-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(v) || 'Description must be valid'
    ],
    }),
    components:{
        modalVue,
        pagePrice,
        avisoPrivacidad,
        terminosCondiciones,
        vueReCaptcha
    },
    methods:{
        recaptchaVerified() {
            this.ReCaptchaVerificate = true
        },
        recaptchaExpired() {
            this.ReCaptchaVerificate = false
            this.$refs.vueRecaptcha.reset();
        // this.valid ===false
        },
        recaptchaFailed() {
            this.ReCaptchaVerificate = false
            this.$refs.vueRecaptcha.reset();
            // this.valid === false
        },
        recaptchaError() {
            this.ReCaptchaVerificate = false
            this.$refs.vueRecaptcha.reset();
        },


        changeModalState(p){
            this.viewModal = true
            this.calltoAction = p
        },
        changeModalPrice(){
            this.viewpagePrice = true
        },
        changeModalPrivacity(){
            this.viewpagePrivacity = true
        },
        changeModalTerms(){
            this.viewpageTerms = true
        },
        async sendform(sndForm){ 
            this.calltoAction = sndForm
            // Build of object for send to CRM
            const postFooter = await api.post("oauth/clients/save",{
                nombre: this.name,
                email: this.email,
                empresa: this.empresaForm,
                tamanio: 1,
                office_phone:null,
                extension: 11,
                telefono: this.telefonoForm,
                puesto: '',
                area: 'Tec',
                descripcion: this.descripcionForm,
                procedencia: this.calltoAction,
                id_call_action: this.calltoAction,

                requerimientos: '',
                nivel: 1,
                contacto: 1,
                editar: '',
                personId: '',
                status: 1,
                requirement: '',
                tipoProyecto: '', 
                nivelProyecto: '',
                previous: '',
                presupuestoMXN: this.presupuesto,
                presupuestoUsd: '',
                paginaOrigen: 'Pagina Beta',
            })
            this.result = postFooter.status;
            if (this.result >= 200 && this.result <= 299) {
                this.ReCaptchaVerificate = false
                swal({
                    title:"Pronto tendrás noticias de nosotros.",
                    text:"¡Gracias por confiar en Sinntec!",
                    icon: "img/app/sinntecForm.png",
                    button: false,
                    timer: 3000,
                })
                this.$refs.formFooter.reset();
            }
        },
    },
  // Functions onload page
created() {
    window.fbq("track", "PageView");
    this.isSelected= " ";
    },
}
</script>
<!------------------------------- Styles of page ------------------------------->
<style scoped>
@import './assets/css/page-app-style.css';
</style>