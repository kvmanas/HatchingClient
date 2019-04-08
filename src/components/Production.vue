<template>
  <div class="section section-basic" id="basic-elements">
    <img src="/assets/img/path1.png" class="path">
    <div class="container">
      <h2 class="title">Basic Elements</h2>
      <h3>Buttons</h3>
      <p class="category">Pick your style</p>
      <div class="row">
        <div class="col-md-10">
          <button class="btn btn-primary" type="button">Default</button>
          <button class="btn btn-primary btn-round" type="button">Round</button>
          <button class="btn btn-primary btn-round" type="button">
            <i class="tim-icons icon-heart-2"></i> With Icon
          </button>
          <button class="btn btn-primary btn-icon btn-round" type="button">
            <i class="tim-icons icon-heart-2"></i>
          </button>
          <button class="btn btn-primary btn-simple btn-round" type="button">Simple</button>
        </div>
      </div>
      <p class="category">Pick your size</p>
      <div class="row">
        <div class="col-md-10">
          <button class="btn btn-primary btn-sm">Small</button>
          <button class="btn btn-primary">Regular</button>
          <button class="btn btn-primary btn-lg">Large</button>
        </div>
      </div>
      <p class="category">Pick your color</p>
      <div class="row">
        <div class="col-md-12">
          <button class="btn">Default</button>
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-info">Info</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-danger">Danger</button>
          <button class="btn btn-neutral">Neutral</button>
        </div>
      </div>
      <br>
      <h3>Links</h3>
      <div class="row">
        <div class="col-md-8">
          <button class="btn btn-link">Default</button>
          <button class="btn btn-link btn-primary">Primary</button>
          <button class="btn btn-link btn-info">Info</button>
          <button class="btn btn-link btn-success">Success</button>
          <button class="btn btn-link btn-warning">Warning</button>
          <button class="btn btn-link btn-danger">Danger</button>
        </div>
      </div>
      <div class="space-70"></div>
      <div id="inputs">
        <h3>Inputs</h3>
        <p class="category">Form Controls</p>
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="form-group">
              <input type="text" value placeholder="Regular" class="form-control">
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="form-group has-success">
              <input type="text" value="Success" class="form-control form-control-success">
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="form-group has-danger">
              <input type="email" value="Error Input" class="form-control form-control-danger">
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Left Font Awesome Icon">
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Right Nucleo Icon">
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="tim-icons icon-lock-circle"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="space-70"></div>
      <div class="row" id="checkRadios">
        <div class="col-sm-6 col-lg-3">
          <p class="category">Checkboxes</p>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox">
              <span class="form-check-sign"></span>
              Unchecked
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" checked>
              <span class="form-check-sign"></span>
              Checked
            </label>
          </div>
          <div class="form-check disabled">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" disabled>
              <span class="form-check-sign"></span>
              Disabled Unchecked
            </label>
          </div>
          <div class="form-check disabled">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" checked disabled>
              <span class="form-check-sign"></span>
              Disabled Checked
            </label>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Radios</p>
          <div class="form-check form-check-radio">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              >
              <span class="form-check-sign"></span>
              Radio is off
            </label>
          </div>
          <div class="form-check form-check-radio">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option2"
                checked
              >
              <span class="form-check-sign"></span>
              Radio is on
            </label>
          </div>
          <div class="form-check form-check-radio disabled">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios1"
                id="exampleRadios2"
                value="option3"
                disabled
              >
              <span class="form-check-sign"></span>
              Disabled radio is off
            </label>
          </div>
          <div class="form-check form-check-radio disabled">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios1"
                id="exampleRadios2"
                value="option4"
                disabled
                checked
              >
              <span class="form-check-sign"></span>
              Disabled radio is on
            </label>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Toggle Buttons</p>
          <input type="checkbox" name="checkbox" class="bootstrap-switch" checked>
          <br>
          <input
            type="checkbox"
            name="checkbox"
            class="bootstrap-switch"
            data-on-label="ON"
            data-off-label="OFF"
          >
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Sliders</p>
          <div id="sliderRegular" class="slider"></div>
          <br>
          <div id="sliderDouble" class="slider slider-primary"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Production"
};
</script>

