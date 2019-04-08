<template>
  <div class="main">
    <v-card height="50px">
      <v-bottom-nav :active.sync="bottomNav" :color="color" :value="true" absolute dark shift>
        <v-btn dark to="/">
          <span>Video</span>
          <v-icon>ondemand_video</v-icon>
        </v-btn>

        <v-btn dark to="/Barracks">
          <span>Music</span>
          <v-icon>music_note</v-icon>
        </v-btn>

        <v-btn dark>
          <span>Book</span>
          <v-icon>book</v-icon>
        </v-btn>

        <v-btn dark>
          <span>Image</span>
          <v-icon>image</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
    <router-view name="game"/>
  </div>
</template>
<script>
export default {
  name: "MainComponent",
  data() {
    return {
      bottomNav: 0
    };
  },

  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
      }
    }
  }
};
</script>
