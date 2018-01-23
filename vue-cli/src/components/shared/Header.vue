<template>
  <section>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header pdheader">
          <button type="button" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand brand-style" >John Fowles</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <router-link to="/biography"  tag="li" class="header-list" activeClass="active"><a >Биография</a></router-link>
            <router-link to="/photo"  tag="li" class="header-list" activeClass="active"><a>Фотогалерея</a></router-link>
            <router-link to="/books"  tag="li" class="header-list" activeClass="active"><a>Книги</a></router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right" >
            <li :class="{open:show}"
            @click="show=!show">
              <a class="header-list dropdown-toggle"
                 data-toggle="dropdown"
                 role="button"
                 aria-haspopup="true"
                 aria-expanded="false"
                 href="#" >
                Разное <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <router-link to="/calendar" tag="li" activeClass="active"><a class="dropdown-links">Календарь</a></router-link>
                <router-link to="/tests" tag="li"  activeClass="active"><a class="dropdown-links">Тесты</a></router-link>
              </ul>
            </li>
            <router-link class="header-list" tag="li" to="/about" activeClass="active"><a>О блоге</a></router-link>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </section>
</template>
<script>
  export default {
    data(){
      return{
        show:false
      }
    }
  }
</script>
<style>
</style>
