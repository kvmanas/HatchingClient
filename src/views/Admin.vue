<template>
  <div>
    <PageHeader/>
    <v-card height="50px">
      <v-bottom-nav :active.sync="bottomNav" :color="color" :value="true" absolute dark shift>
        <v-btn dark to="/">
          <span>Shop</span>
          <i aria-hidden="true" class="v-icon theme--dark fas fa-store"></i>
        </v-btn>

        <v-btn dark to="/Barracks">
          <span>Production</span>
          <i aria-hidden="true" class="v-icon theme--dark fab fa-earlybirds"></i>
        </v-btn>

        <v-btn dark>
          <span>Barracks</span>
          <i aria-hidden="true" class="v-icon theme--dark fas fa-paw"></i>
        </v-btn>

        <v-btn dark>
          <span>Battle</span>
          <i aria-hidden="true" class="v-icon theme--dark fas fa-bolt"></i>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "Admin",
  components: {
    PageHeader
  }
};
</script>
