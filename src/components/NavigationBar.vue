<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-transparent" color-on-scroll="100">
    <div class="container">
      <div class="navbar-translate">
        <a
          class="navbar-brand"
          href="https://demos.creative-tim.com/blk-design-system/index.html"
          rel="tooltip"
          title="Designed and Coded by Creative Tim"
          data-placement="bottom"
          target="_blank"
        >
          <span>BLK•</span> Design System
        </a>
        <button
          class="navbar-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navigation">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a>BLK•</a>
            </div>
            <div class="col-6 collapse-close text-right">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="tim-icons icon-simple-remove"></i>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item p-0">
            <button class="nav-link" data-toggle="modal" data-target="#loginmodel">
              <i class="fas fa-sign-in-alt"></i>Login
            </button>
          </li>
          <li class="nav-item p-0">
            <button class="nav-link" data-toggle="modal" data-target="#loginmodel">
              <i class="fas fa-user-plus"></i>Register
            </button>
          </li>
          <li class="nav-item p-0">
            <a
              class="nav-link"
              href="https://www.instagram.com/CreativeTimOfficial"
              target="_blank"
            >
              <i class="fas fa-users-cog"></i>Admins
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    msg: String
  }
};
</script>
<style scoped>
.container {
  padding: 10px;
}
</style>
