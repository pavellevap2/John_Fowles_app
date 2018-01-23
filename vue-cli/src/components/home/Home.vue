<template>
  <div class="section">
    <div class="container-fluid ">
      <div class="row margin-home ">
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
          <img class="img-responsive background-home-first" src="../../assets/images/fowles3.jpg" alt="">
          <div class="col-md-8 col-md-offset-2 col-lg-8 col-sm-8 text-center homeELementsPosition hidden-xs">
            <transition
              appear enter-active-class="animated bounceInDown"
              leave-active-class="animated shake">
              <h1 class="home-title">Джон Роберт Фаулз</h1>
            </transition>
            <transition
              appear enter-active-class="animated bounceInRight"
              leave-active-class="animated shake">
              <p class="home-text ">Джон Фаулз — английский писатель-интеллектуал,
                романист и эссеист, один из выдающихся представителей постмодернизма в литературе XX века.
                Мудрый затворник, большую часть жизни он провел в своем доме на берегу моря,
                занимаясь литературным трудом.<br>
                Подробнее узнать о жизне писателя и его книгах вы можете на этом сайте
              </p>
            </transition>
            <transition
              appear enter-active-class="animated bounceInUp"
              leave-active-class="animated shake">
              <router-link to="/biography" tag="a" class="home-link"><a>Начать знакомство</a></router-link>
            </transition>
          </div>
        </div>
        <!--Мобильная версия !-->
          <div class="col-xs-10 col-xs-offset-1 hidden-md hidden-lg hidden-sm text-center mobileHomeELementsPosition">
            <h2 class="mobile-home-title ">Джон Фаулз</h2>
            <p class="mobile-home-text ">Джон Фаулз — английский писатель-интеллектуал,
              романист и эссеист, один из выдающихся представителей постмодернизма в литературе XX века.
             <br>
              Подробнее узнать о жизне писателя и его книгах вы можете на этом сайте
            </p>
            <router-link to="/biography" tag="a" class="mobile-home-link "><a>Начать знакомство</a></router-link>
          </div>

      </div>
    </div>
  </div>
</template>
<script>
</script>

