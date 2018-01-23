<template>
  <section>
    <div class="container-fluid background-home-books">
      <div class="row">
        <div class="col-md-12">
          <div class="h1 title-all-pages text-center">Биография писателя</div>
        </div>
      </div>
      <div class="row pdBio">
        <bio-sidebar></bio-sidebar>
        <bio-content></bio-content>
      </div>
    </div>
  </section>
</template>
<script>
  import Sidebar from './BioSidebar'
  import Content from './BioContent'
  export default {
    components:{
      bioSidebar:Sidebar,
      bioContent:Content
    }
  }
</script>
