<template>
  <v-row>
    <v-dialog v-model="statemodalAviso" width="800px" persistent>
      <v-card  class="style__Modal">
        <div class="icon__Privacity">
            <v-icon color="#19395966" icon="mdi-close-box" size="x-large" @click="$emit('close')" class="d-sm-block d-md-none"/>
            <v-icon color="blue-lighten-1" icon="mdi-window-close" size="x-large" @click="$emit('close')" class="d-none d-sm-none d-md-block"/>
        </div>
        <v-card-text> 
          <v-row justify="center">
            <v-col>
              <p class="text__title--Privacity"> Aviso de privacidad</p>
              <p class="text__Privacity">
              Sinntec Innovacción Tecnólogica S.A. de C.V., con domicilio en Av.
              Presidente Masaryk No. 61 Interior 901 B, Polanco V Sección, C.P.
              11560. Ciudad De México., es responsable de recabar sus datos
              personales, del uso que se le dé a los mismos y de su protección. Su
              información personal será utilizada para proveer los servicios y
              productos que ha solicitado, informarle sobre cambios en los mismos y
              evaluar la calidad del servicio que le brindamos. Para las finalidades
              antes mencionadas, requerimos obtener los siguientes datos personales:
              Nombre completo, correo electrónico, considerado como sensible según
              la Ley Federal de Protección de Datos Personales en Posesión de los
              Particulares, datos personales. Usted tiene derecho de acceder,
              rectificar y cancelar sus datos personales, así como de oponerse al
              tratamiento de los mismos o revocar el consentimiento que para tal fin
              nos haya otorgado, a través de los procedimientos que hemos
              implementado. Para conocer dichos procedimientos, los requisitos y
              plazos, se puede poner en contacto con nuestro departamento de datos
              personales en contacto@sinntec.com.mx o visitar nuestra página de
              Internet www.sinntec.com.mx. Asimismo, le informamos que sus datos
              personales pueden ser transferidos y tratados dentro y fuera del país,
              por personas distintas a esta empresa. En ese sentido, su información
              puede ser compartida con nuestros proveedores, para la adquisición de
              servicios de TI. Si usted no manifiesta su oposición para que sus
              datos personales sean transferidos, se entenderá que ha otorgado su
              consentimiento para ello. No consiento que mis datos personales sean
              transferidos en los términos que señala el presente aviso de
              privacidad. Si usted desea dejar de recibir mensajes promocionales de
              nuestra parte puede solicitarlo a través de contacto@sinntec.com.mx.
              Cualquier modificación a este aviso de privacidad podrá consultarla en
              www.sinntec.com.mx. 
            </p>
            <p class="text__Privacity"><strong>
              Fecha última actualización 07/12/2020.
            </strong>
            </p>
            </v-col>
          </v-row>
        </v-card-text>
    </v-card>
    </v-dialog>
</v-row>
</template>

<script>

  export default{
    data:()=>({
        statemodalAviso: true
    }),
    created(){
      this.statemodalAviso = this.showModal
    },
    props: {
      showModal:{
        type: Boolean
      }
    }
}
</script>

<style scoped>
@import '../../../src/assets/css/modal-privacidad-style.css';
</style>