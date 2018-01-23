<template>
  <div class="container-fluid background-test">
    <div class="row ">
      <div class="col-md-12">
        <h1 class="text-center title-all-pages ">Психологические тесты</h1>
      </div>
    </div>
    <div class="row ">
      <div class="col-md-6 text-center">
        <div class=" positionTest">
          <router-link tag="a" to="/tests/1" class="test-parts-text"><a>Как хорошо ты знаешь книги Фаулза?</a></router-link>
        </div>
      </div>
      <div class="col-md-6 text-center">
        <div class=" positionTest">
          <router-link to="/tests/2"  tag="a" class="test-parts-text" ><a>Кто ты из персонажей?</a></router-link>
        </div>
      </div>
    </div>

  </div>
</template>
