<template>
    <modalVue v-if="viewModal" @close="viewModal = false" :show-modal="viewModal" persistent :calltoAction="this.calltoAction"/>

    <v-dialog v-model="statepagePrice" class="sizeDialog" persistent >
        <v-card class="backPrice" style="border-radius: 23px;">
            <v-icon size="large" class="icon-close-modal" color="#fff" @click="$emit('close')">mdi-close</v-icon>
                <p class="titPrecio">¿Cuánto cuesta lo que estoy buscando?</p>
                <p class="descPrecio">Revisa algunos de nuestros proyectos y date una idea.</p>
            <v-carousel hide-delimiters show-arrows class="v-carousel-Size" :continuous="false">
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                class="sizeCarousel"
                >
                    <v-sheet
                        :color="colors[i]"
                        height="100%"
                    >
                        <div class="text-center">
                            <div class="titletarjetCarousel"><br>
                                {{ slide }}
                                <v-divider class="border-opacity-100 mt-4" color="info" width="85%" style="margin: auto;"></v-divider>
                                <div v-if="i===0">
                                    <h2  class="preciosProyect">
                                        $ 350,000.00 MXN
                                    </h2>
                                        <p class="tiempo-desarrollo">8 Semanas</p>
                                        <p class="descripcion-precio">App para la configuración y generación de promociones, registro de producto, control de ventas, y devoluciones, App móvil Online-Offline.</p>
                                </div>
                              <div v-if="i===1">
                                <h2 class="preciosProyect">
                                  $ 700,000.00 MXN
                                </h2>
                                <p class="tiempo-desarrollo">14 semanas</p>
                                <p class="descripcion-precio">Sistema para la implementación de metodología específica del deporte, registro de grupos, registro de alumnos, registro de profesores, control de ciclos escolares, control de evaluaciones, gestion de contenidos, estadísticas, etc. App con operación Online-Offline</p>
                              </div>
                              <div v-if="i===2">
                                <h2 class="preciosProyect">
                                  $ 250,000.00 MXN
                                </h2>
                                <p class="tiempo-desarrollo">20 semanas</p>
                                <p class="descripcion-precio">Sistema Web para la configuración, aplicación y generación de estadísticas para la información capturada por medio de los formularios, App con operación Online-Offline</p>
                              </div>
                              <div v-if="i===3">
                                <h2 class="preciosProyect">
                                  $ 170,000.00 MXN
                                </h2>
                                <p class="tiempo-desarrollo">8 semanas</p>
                                <p class="descripcion-precio">Sistema para punto de venta, para el control de ventas, impresón de tickets, control de ventas por usuario, estadísticas de venta, etc. Con funcionalidad híbrida online - offline</p>
                              </div>
                              <div v-if="i===4">
                                  <h2 class="preciosProyect">$ 110,000.00 MXN
                                  </h2>
                                <p class="tiempo-desarrollo">10 semanas</p>
                                <p class="descripcion-precio">App para el registro de organizaciones civiles, control de documentos registrados en el sistema, seguimiento a cumplimiento de lineamientos legales, estadísticas de cumplimiento, etc.</p>
                              </div>
                            </div>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
            <v-btn 
            class="btnPrecio"
            @click="changeModalState('112')"
            >
                Cotizar desarrollo de apps 
            </v-btn>
        </v-card>
    </v-dialog>
</template>

<script>
import modalVue from './page_modal.vue';

export default {
data:()=>({
    calltoAction:'',

    statepagePrice: true,
    viewModal: false,
    colors: [
        'white',
    ],
    slides: [
        'Sistema web + App Android + App iOS',
        'Sistema web + App Android ',
        'Sistema web + App Android + App iOS ',
        'Sistema web',
        'Sistema web',
        'Sistema web',
        'Sistema web',
        'Sistema web',
        'Sistema web',
        'Sistema web',
        ],
}),
components:{
    modalVue
},
methods:{
    changeModalState(p){
        this.viewModal=true
        this.calltoAction = p
    }
},
created(){
        this.statepagePrice = this.showmodalPage
    },
    props: {
        showmodalPage:{
            type:Boolean
        }
    },
}
</script>

<style scoped>
@import url('../../assets/css/page-price-style.css');
</style>