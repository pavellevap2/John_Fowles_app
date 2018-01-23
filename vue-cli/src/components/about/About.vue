<template>
  <div class="container-fluid background-home-books">
    <div class="row pdAbout">
      <div class="col-md-12">
        <div class="h1 text-center title-all-pages">О блоге</div>
      </div>
    </div>
    <div class="row pdbt50">
      <about-grid></about-grid>
      <about-content></about-content>
    </div>
    <about-special></about-special>

  </div>
</template>
<script>
  import aboutPhotoGrid from "./AboutPhotoGrid";
  import aboutContent from './AboutContent';
  import aboutEspecial from "./AboutEspecial";

  export default {
    components:{
      aboutGrid:aboutPhotoGrid,
      aboutContent:aboutContent,
      aboutSpecial:aboutEspecial
    }
  }
</script>

