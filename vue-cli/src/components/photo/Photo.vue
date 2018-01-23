<template>
  <div class="container-fluid background-home-photo ">
    <div class="row ">
      <div class="col-md-12">
        <h2 class="text-center title-all-pages">Фотографии и факты</h2>
      </div>
    </div>
    <div class="row margin-home-second-page pdPhoto">
      <div class="col-md-3 test col-md-offset-1 pd-mobile-photo">
        <div class="flip-container">
          <div  class="card shadow">
            <div class="front face back-img-home">
              <img  src="../../assets/images/fowles2.jpg" alt="" >
            </div>
            <div class="back face center">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">"Волхв"</h3>
                </div>
                <div class="panel-body">
                  <p>
                    Первый роман Фаулза «Волхв» долго не выходил в печать.
                    Он был напечатан только после того как он стал знаменит как писатель
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4  pd-mobile-photo" >
        <div class="flip-container">
          <div  class="card shadow">
            <div class="front face back-img-home">
              <img  src="../../assets/images/fowles4.jpg" alt="" >
            </div>
            <div class="back face center">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Общие факты</h3>
                </div>
                <div class="panel-body">
                  <p>
                    Родился Джон Фаулз 31 марта 1926 года в небольшом городке Ли – он –
                    Си, Эссекс. Его отец занимался табачной торговлей После
                    окончания школы, прошел подготовку к морской службе.
                    Курсы окончил 8 мая 1945 года и целых два года отслужил в
                    Девоне на военной базе. В 1947 году был демобилизован.
                    Занялся изучением французского языка в Оксфорде
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>      </div>
      <div class="col-md-3 pd-mobile-photo" >
        <div class="flip-container">
          <div  class="card shadow">
            <div class="front face back-img-home">
              <img src="../../assets/images/fowles8.jpg" alt="" >
            </div>
            <div class="back face center">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    Интерес к истории
                  </h3>
                </div>
                <div class="panel-body">
                  <p>
                    Писатель очень интересовался историей.
                    В период с 1979 по 1988 год он даже работал куратором музея в Лайм — Реджисе

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pdPhoto">
      <div class="col-md-6 col-md-offset-1  pd-mobile-photo">
        <div class="flip-container">
          <div  class="card shadow">
            <div class="front face back-img-home">
              <img src="../../assets/images/fowles5.jpg" alt="" >
            </div>
            <div class="back face center">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Карьера писателя</h3>
                </div>
                <div class="panel-body">
                  <p>
                    С детства хотел стать преподавателем.
                    До 1963 года занимался преподавательской деятельностью
                    (преподавал английский язык на греческом острове Спеце),
                    но после написания романа «Коллекционер», который принес ему популярность,
                    ушел с работы и стал заниматься только творчеством
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 back-img-home pd-mobile-photo">
        <div class="flip-container">
          <div  class="card shadow">
            <div class="front face back-img-home">
              <img src="../../assets/images/fowles6.jpg" alt="" >
            </div>
            <div class="back face center">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Образ жизни писателя</h3>
                </div>
                <div class="panel-body">
                  <p>Джон Фаулз известен тем, что вел закрытый образ жизни.
                    Он редко появлялся на публичных мероприятиях, предпочитая шумные компании тихой,
                    домашней обстановке</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pdPhoto pdbt20">
      <div class="col-md-4 col-md-offset-1 pd-mobile-photo">
        <div class="flip-container">
          <div  class="card shadow">
            <div class="front face back-img-home">
              <img  src="../../assets/images/fowles7.jpg" alt="" >
            </div>
            <div class="back face center">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Экранизация произведений</h3>
                </div>
                <div class="panel-body">
                  <p>Четыре его романа были экранизированы.Это:</p>
                  <ul>
                    <li v-for="creation in creations" class="text-left ">{{creation}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 pd-mobile-photo">
        <div class="flip-container">
          <div  class="card shadow">
            <div class="front face back-img-home">
              <img src="../../assets/images/fowles1.jpg" alt="" >
            </div>
            <div class="back face center">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Жёны писателя</h3>
                </div>
                <div class="panel-body">
                  <p>
                    Был дважды женат. Первой его женой стала Элизабет Кристи.
                    Они поженились 2 апреля 1954 года и Джон стал приемным отцом для ее
                    дочери от первого брака. Второй женой (после смерти Элизабет) писателя была Сара Фаулз

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        creations:["«Коллекционер»","«Волхв»","«Женщина французского лейтенанта» ","«Башня из черного дерева»" ]
      }
    }
  }
</script>
