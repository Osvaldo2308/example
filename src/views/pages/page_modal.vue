<template>
<!-- -- -----------------------------Modal con Vuetify----------------------------- -->
<v-row> 
<v-dialog v-model="stateModal" width="480px" persistent>
    <v-card class="container" style="border-top-left-radius: 35px;border-bottom-left-radius: 35px; border-top-right-radius: 35px; border-bottom-right-radius: 35px;">
        <v-card-text >
            <div class="icon__close">
                <v-icon color="#19395966" icon="mdi-close-box" size="x-large" @click="$emit('close')" class="d-sm-block d-md-none"/>
                <v-icon color="blue-lighten-1" icon="mdi-window-close" size="x-large" @click="$emit('close')" class="d-none d-sm-none d-md-block"/>
            </div>
            <v-row justify="center">
                <v-col cols="12" sm="12" md="12">
                    <v-img :src="require('../../../public/img/app/logoSinntecfondoBlanco.png')" class="mx-16 my-0"/>
                    <v-form v-model="valid" fast-fail @submit.prevent ref="form">
                    <v-text-field
                        rounded
                        class="mt-16 mx-4 inputModal" 
                        v-model.trim="name"
                        :rules="nameRules"
                        :counter="50"
                        label="Ingresa tu nombre*"
                        hide-details="false"
                        required
                    ></v-text-field>
                    <v-text-field
                        rounded
                        class="mt-4 mx-4 inputModal"
                        v-model.trim="email"
                        :rules="emailRules"
                        label="Correo*"
                        hide-details="false"
                        required
                    ></v-text-field>
                    <v-text-field
                    rounded
                        class="mt-4 mx-4 inputModal"
                        v-model.trim="empresaForm"
                        :rules="enterpriseRules"
                        :counter="20"
                        label="Empresa*"
                        hide-details="false"
                        required
                    ></v-text-field>
                    <v-text-field
                    rounded
                        class="mt-4 mx-4 inputModal"
                        v-model.trim="telefonoForm"
                        :rules="telephoneRules"
                        :counter="10"
                        label="Teléfono (10 digitos)*"
                        hide-details="false"
                        required
                    ></v-text-field>
                    <v-select
                        rounded
                        v-model="puestoEmp"
                        class="mt-4 mx-4 mb-3 inputModal"
                        item-title="name"
                        item-value="id"
                        :items="puestos"
                        label="Selecciona tu puesto*"
                        hide-details="false"
                        required
                    ></v-select>
                    <p class="mx-4 textModal">¿Cuentas los requerimiento técnicos y de negocio del proyecto?</p>
                    <v-radio-group
                    class="mx-4 textModal"
                    v-model.number="selectradioRequer"
                    inline
                    >
                    <v-radio
                        label="No"
                        name="presupuesto"
                        value="0"
                    />
                    <v-radio
                        label="Si"
                        name="presupuesto"
                        value="1"
                        :click="showRequeriments()"
                    />
                    </v-radio-group>

                    <v-select
                        rounded
                        class="inputModal mb-3"
                        hide-details="false"
                        v-model="tipoProyecto" 
                        v-if="requeriments"
                        item-title="name"
                        item-value="id"
                        :items="proyectos"
                        label="Elige el tipo de proyecto a desarrollar*"
                        required
                    ></v-select>
                    <v-select
                        hide-details="false"
                        class="inputModal mb-3"
                        v-model="nivelProyecto" 
                        v-if="requeriments"
                        item-title="name"
                        item-value="id"
                        :items="niveles"
                        label="Elige la etapa actual del proyecto*"
                        required
                    ></v-select>
                    <v-select
                        rounded
                        hide-details="false"
                        class="inputModal mb-3"
                        v-model="presupuestomxn"
                        v-if="requeriments"
                        item-title="name"
                        item-value="id"
                        :items="balance"
                        label="Elige el rango del presupuesto*"
                        required
                    ></v-select>
                    <p class="mx-4 textModal">¿El proyecto se ha intentado realizar anteriormente?</p>
                    <v-radio-group
                    class="mx-4 textModal"
                    v-model="selectradioRealizarProy"
                    inline
                    >
                    <v-radio
                        label="No"
                        value='0'
                    ></v-radio>
                    <v-radio
                        label="Si"
                        value='1'
                    ></v-radio>
                    </v-radio-group>
                    <v-textarea 
                        hide-details
                        v-model="description"
                        :rules="descripcionForm"
                        class="mx-4 descriptionProyect"
                        label="Descripción breve del servicio deseado:*" 
                        required
                    ></v-textarea>
                    <vueReCaptcha 
                        class="recaptcha__modal"
                        v-show="showRecaptcha" 
                        size="normal"
                        theme="light"
                        hl="tr"
                        :loading-timeout="loadingTimeout"
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        @verify="recaptchaVerified"
                        @expire="recaptchaExpired"
                        @fail="recaptchaFailed"
                        @error="recaptchaError"
                        ref="vueRecaptcha">
                        <p>Completa la verificación</p>
                    </vueReCaptcha>

                        <v-btn
                            :disabled="!ReCaptacha || !valid"
                            rounded
                            @click="sendform()"
                            type="submit" 
                            block       
                            class="btnsendForm mt-3"
                        >
                            Enviar solicitud
                        </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-card-text>    
    </v-card>
</v-dialog>
</v-row>
</template>

<script>
import swal from 'sweetalert';


import vueReCaptcha from 'vue3-recaptcha2'

// import axios from 'axios'
import api from "../../api/index.js";


export default {
    components:{
        vueReCaptcha
    },
    data:()=>({
            selectradioRequer: '0',
            selectradioRealizarProy: '0',
            requeriments: false,
            result: null,
            stateModal: true,

            // ReCaptcha
            ReCaptacha: false,
            showRecaptcha: true,
            loadingTimeout: 10000, //10 seconds

        // Variables para el formulario
            nombre:             '',
            correo:             '',
            empresa:            '',
            telefono:           '',
            puestoEmp:          '',
            descripcion:        '',
            tipoProyecto:       '',
            nivelProyecto:      '',
            presupuestomxn:     '',
            procedencia:        '',
            paginaOrigen:       '',
            id_call_action:     '',

            // Puesto para seleccionar
            puestos:[
            {id: 1, name: 'Responsable de área'}, 
            {id: 2, name: 'Supervisor de área' },
            {id: 3, name: 'Gerente de área'}, 
            {id: 4, name: 'Director de área'},
            {id: 5, name: 'Director general'},
            {id: 6, name: 'Presidente'},
            {id: 7, name: 'CEO & Founder'},
            {id: 8, name: 'Otro'}
            ],
            proyectos:[
            {id: 1, name: 'Sistema web/ Escritorio'}, 
            {id: 2, name: 'Sistema web y App iOS/ Android'}, 
            {id: 3, name: 'App Multiplataforma iOS/ Android'}, 
            {id: 4, name: 'App Nativa iOS/ Android'}, 
            {id: 5, name: 'Integración con algun sistema CRM/ ERP'}
            ],
            niveles:[
            {id: 1, name:'Es un proyecto en idea'}, 
            {id: 2, name:'Es un proyecto en estudio de mercado'}, 
            {id: 3, name:'Es un proyecto autorizado'}, 
            {id: 4, name:'Es un proyecto en cotización para autorización'}, 
            {id: 5, name:'Es un proyecto en RFP o Licitación'}
            ],
            balance:[
            {id: 1, name: 'Menos de $200,000.00'}, 
            {id: 2, name: 'De $200,001.00 a $500,000.00'}, 
            {id: 3, name: 'De $500,001.00 a $1,500,000.00'}, 
            {id: 4, name: 'De $1,500,001.00 a 3,000,000.00'}, 
            {id: 5, name: 'Más de $3,000,000.00'}
            ],
            //Scripts for validation modal
            valid: false,
            name:'',
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
                }
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
            description:'',
            descripcionForm:[
                v => !! v || 'Description is required',
                v =>  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[\sa-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(v) || 'Description must be valid'
            ],
    }),
    created(){
        this.stateModal = this.showModal

        if(this.calltoAction === '21' || this.calltoAction === '113'){
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
            type: String,
        },

    },
    // watch:{
    //     validateValue(){
    //         console.log(this.emailValue)
    //         this.email = (this.emailValue == '' ) ? 'Default' : this.emailValue 
    //         return this.email
    //     }
    // },
    methods:{
        recaptchaVerified() {
            this.ReCaptacha = true
        },
        recaptchaExpired() {
            this.ReCaptacha = false
            this.$refs.vueRecaptcha.reset();
        },
        recaptchaFailed() {
            this.ReCaptacha = false
            this.$refs.vueRecaptcha.reset();

        },
        recaptchaError() {
            this.ReCaptacha = false
            this.$refs.vueRecaptcha.reset();
        },


        showRequeriments(){
            this.selectradioRequer=document.querySelector('input[name="presupuesto"]:checked')?.value
            this.requeriments = this.selectradioRequer !== '0';
        },
        async sendform(){ 
            // Build of object for send to CRM
            const postCRM = await api.post("oauth/clients/save",{
                nombre:          this.name,
                email:           this.email,
                empresa:         this.empresaForm,
                tamanio:         1,
                office_phone:    this.telefonoForm,
                extension:       '',
                telefono:        this.telefonoForm,
                puesto:          this.puestoEmp,
                area:            'Tec',
                descripcion:     this.description,
                procedencia:     this.calltoAction,
                id_call_action:  this.calltoAction,
                requerimientos:  '',
                nivel:           1,
                contacto:        1,
                editar:          0,
                personId:        0,
                status:          1,
                //value of radio button
                requirement:     this.selectradioRequer,
                tipoProyecto:    this.tipoProyecto,
                nivelProyecto:   this.nivelProyecto,
                presupuestoUsd:  '',
                presupuestoMXN:  this.presupuestomxn,
                previous:        '',
                paginaOrigen:    'Pagina Beta',

            })
            this.result= postCRM.status;
            if (this.result >= 200 && this.result<=299) {
                
                await swal({
                    title: "Pronto tendrás noticias de nosotros.",
                    text: "¡Gracias por confiar en Sinntec!",
                    icon: "img/app/sinntecForm.png",
                    button: false,
                    timer: 3000,
                    })
                    this.$refs.form.reset();
                    this.$emit('close')
            }else{
                await swal({
                    title: "No se pudo ingresar tu proyecto",
                    text: "Intenta más tarde",
                    icon: "danger",
                    button: false
                })
            }
        },
    },
}
</script>

<style scoped>
@import '../../assets/css/style.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500;600;700&display=swap');
</style>