<template>
  <div class="unitmodel col-lg-4 col-md-6 ml-auto mr-auto">
    <div class="card card-coin card-plain">
      <div class="card-header">
        <img src="/assets/img/mike.jpg" class="img-center img-fluid rounded-circle">
        <h4 class="title">{{Uname}}</h4>
      </div>
      <div class="card-body">
        <div class="card upper bg-default">
          <div class="card-body">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <i class="tim-icons icon-coins text-white"></i>
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p class="card-title">3,653</p>
                  <p></p>
                  <p class="card-category">Commits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card upper bg-default">
          <div class="card-body">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <i class="tim-icons icon-coins text-white"></i>
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p class="card-title">3,653</p>
                  <p></p>
                  <p class="card-category">Commits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card upper bg-default">
          <div class="card-body">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <i class="tim-icons icon-coins text-white"></i>
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p class="card-title">3,653</p>
                  <p></p>
                  <p class="card-category">Commits</p>
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
  name: "UnitModel",
  props: {
    Uname: String
  }
};
</script>
<style scoped>
.unitmodel {
  padding-top: 90px;
  padding-bottom: 20px;
}
.title {
  text-align: center;
}
.icon-big {
  font-size: 3em;
  min-height: 64px;
}
.card-category {
  color: #9a9a9a;
  font-size: 16px;
  line-height: 1.4em;
}
.numbers {
  text-align: right;
  font-size: 2em;
}
</style>


