<template>
  <div
    class="modal fade modal-black"
    id="loginmodel"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="tim-icons icon-simple-remove text-white"></i>
          </button>
          <div class="text-muted text-center ml-auto mr-auto">
            <h3 class="mb-0">Log in</h3>
          </div>
        </div>
        <div class="modal-body">
          <div class="row justify-content-md-center">
            <div class="col-10">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-key"></i>
                  </span>
                </div>
                <input type="text" class="form-control" placeholder="Enter Private Key">
              </div>
              <div class="text-center">
                <button type="button" class="btn btn-primary my-4">Sign in</button>
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
  name: "LoginModel"
};
</script>
