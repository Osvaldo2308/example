<template>
    <!-- -- -----------------------------Modal con Vuetify----------------------------- -->
    <v-row>
    <v-dialog transition="dialog-bottom-transition" v-model="stateModal" width="480px" persistent>
        <v-card class="container" style="border-radius: 35px;">
            <v-card-text>
                <div class="icon__close">
                    <v-icon color="#19395966" icon="mdi-close-box" size="x-large" @click="$emit('close')" class="d-sm-block d-md-none"/>
                    <v-icon color="blue-lighten-1" icon="mdi-window-close" size="x-large" @click="$emit('close')" class="d-none d-sm-none d-md-block"/>
                </div>
                <v-row justify="center">
                    <v-col cols="12" sm="12" md="12">
                        <v-img :src="require('../../../public/img/app/logoSinntecfondoBlanco.png')" class="mx-16 my-0"/>
                        <v-form fast-fail v-model="form" @submit.prevent="onSubmit" ref="formServer">
                        <v-text-field
                        rounded
                            class="mt-16 mx-4 inputModal" 
                            v-model="name"
                            :rules="nameRules"
                            :counter="50"
                            label="Ingresa tu nombre*"
                            hide-details="false"
                        ></v-text-field>
                        <v-text-field
                        rounded
                            class="mt-4 mx-4 inputModal"
                            v-model="email"
                            :rules="emailrules"
                            label="Correo*"
                            hide-details="false"
                        ></v-text-field>
                        <v-text-field
                        rounded
                            class="mt-4 mx-4 inputModal"
                            v-model="empresaForm"
                            :rules="rulesempresaForm"
                            label="Empresa*"
                            hide-details="false"
                        ></v-text-field>
                        <v-text-field
                        rounded
                            class="mt-4 mx-4 inputModal"
                            v-model="telefonoForm"
                            :rules="rulestelephoneForm"
                            label="Teléfono (10 digitos)*"
                            hide-details="false"
                        ></v-text-field>
                        <v-textarea 
                            :rules="rulesdescriptionform"
                            hide-details="false"
                            v-model="descripcionForm"
                            class="mx-4 mt-4 descriptionProyect"
                            label="Descripción breve del servicio deseado:*" 
                        ></v-textarea>
                        <vueReCaptcha 
                            class="recaptcha__modal"
                            v-show="showRecaptcha" 
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            size="normal" 
                            theme="light"
                            :loading-timeout="loadingTimeout"
                            @verify="recaptchaVerified"
                            @expire="recaptchaExpired"
                            @fail="recaptchaFailed"
                            @error="recaptchaError"
                            ref="vueRecaptcha">
                            <p>No soy un robot</p>
                        </vueReCaptcha>
                        <v-btn
                        :disabled="!ReCaptchaVerification || !form"
                        block       
                        class="btnsendForm mt-3"
                        rounded
                        @click="sendform()"
                        type="submit" 
                        >Enviar solicitud</v-btn>
                    </v-form>
                    </v-col>
                </v-row>
            </v-card-text>    
        </v-card>
    </v-dialog>
    </v-row>
    </template>
    
<script> 
import api from "@/api/index.js";
import swal from 'sweetalert';

import vueReCaptcha from 'vue3-recaptcha2'
    
    export default {
        components:{
            vueReCaptcha
        },
        data:()=>({
            stateModal:true,
            result: null,

            // ReCaptcha
            loadingTimeout: 10000, //10segundos
            ReCaptchaVerification: false,
            showRecaptcha: true,

            // Variables para el formulario
            nombre:'',
            correo:'',
            empresa:'',
            telefono: '',
            descripcion: '',
            id_call_action:'',
            
    
            //Scripts for validation modal
            form: false,
            // Validation the name
            name:'',
            nameRules:[
                v => !!v || 'Name is required',
                v => (v && v.length <=50 ) || 'Name must be less than 50 character',
                v =>  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[\sa-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(v) || 'Name must be valid'
            ],

            // validation email enterpise
            email:'',
            emailrules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            // v =>  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[\sa-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(v) || 'E-mail must be valid'
            ],

            // validation name enterprise
            empresaForm:'',
            rulesempresaForm: [
                v => !!v || 'Name enterprise is required',
                v => (v && v.length <=50) || 'Name enterprise must be less than 50 character',
                v =>  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[\sa-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(v) || 'Name enterprise must be valid'
            ],

            // validation nummber telephone
            telefonoForm: '',
            rulestelephoneForm: [
                v => !!v || 'Number telephone is required',
                v => /^\d{10}$/.test(v) || 'Number telephone must be valid',
            //   v =>  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[\sa-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(v) || 'Number must be valid'
            ],

            // validation description
            descripcionForm:'',
            rulesdescriptionform:[
                v => !!v || 'Description is required'
            ],
        }),
        created(){
            this.stateModal = this.showModal
            if (this.calltoAction === '30') {
                this.email=this.emailValue;
            }
        },
        props: {
            showModal:{
                type:Boolean
            },
            calltoAction:{
                type: String
            },
            emailValue:{
                type: String
            },
        },
        methods:{
            recaptchaVerified() {
                this.ReCaptchaVerification = true
            },
            recaptchaExpired() {
                this.$refs.vueRecaptcha.reset();
            },
            recaptchaFailed() {
                this.loadingTimeout = 10000
            },
            recaptchaError() {
                this.ReCaptchaVerification = false
            },

            onSubmit(){
                if(!this.form) return
            },

            async sendform(){ 
                // Build of object for send to CRM
                const postServers = await api.post("oauth/clients/save", {
                    nombre:         this.name,
                    email:          this.email,
                    empresa:        this.empresaForm,
                    tamanio:        1,
                    office_phone:   this.telefonoForm,
                    extension:      '',
                    telefono:       this.telefonoForm,
                    puesto:         '',
                    area:           'Tec',
                    descripcion:    this.descripcionForm,
                    procedencia:    this.calltoAction,
                    id_call_action: this.calltoAction,
                    requerimientos: '',
                    nivel:          1,
                    contacto:       1,
                    editar:         '',
                    personId:       '',
                    status:         1,
                    requirement:    '',
                    tipoProyecto:   '',
                    nivelProyecto:  '',
                    presupuestoUsd: '',
                    presupuestoMXN: '',
                    previous:       '',
                    paginaOrigen:   'Pagina Beta',
                })
                this.result= postServers.status;
                if (this.result >= 200 && this.result <=299) {
                    await swal({
                    title: "Pronto tendrás noticias de nosotros.",
                    text: "¡Gracias por confiar en Sinntec!",
                    icon: "img/app/sinntecForm.png",
                    button: false,
                    timer: 3000,
                    })
                    this.$refs.formServer.reset();
                    this.$emit('close')
                }
            },
            
        },
        
    }
    </script>

    <style scoped>
    @import '../../assets/css/style.css';
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500;600;700&display=swap');
    </style>