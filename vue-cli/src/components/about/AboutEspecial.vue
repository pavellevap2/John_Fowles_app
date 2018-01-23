<template>
  <div id="specialSection" >
    <div class="row ">
      <div class="col-md-12 pdSpecialAbout">
        <p class="text-center text-about title-about">Представленная ниже информация предназначена для одного единственного человека - моего преподавателя,можете смело пропустить этот раздел .</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <p v-if="visible" class="title-about">Данный сайт выполнен для показа преподавателю Нестеренко А.Г.
          Одинцовым Павлом Владимировичем гр.415 БИ КубГу</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <button class="btn-about"  @click="visible=!visible">{{buttonText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        visible:false,
      }
    },
    computed: {
      buttonText: function () {
        return this.visible ? 'Закрыть раздел' : 'Открыть раздел'
      }
    }
  }
</script>

