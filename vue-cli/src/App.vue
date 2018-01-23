<template>
  <section>
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

    <app-footer></app-footer>
  </section>

</template>

<script>
  import Header from './components/shared/Header';
  import Footer from './components/shared/Footer'
  export default {
    components:{
      appHeader:Header,
      appFooter:Footer
    }
  }
</script>

<style>
  .slide-enter-active{
    animation: slide-in 400ms ease-out forwards;
  }
  .slide-leave-active{
    animation: slide-out 400ms ease-out forwards;
  }
  @keyframes slide-in {
    from{
      transform: translateY(-30px);
      opacity: 0;
    }
    to{
      transform: translateY(0);
      opacity: 1 ;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to{
      transform: translateY(-30px);
      opacity: 0;
    }
  }

</style>
