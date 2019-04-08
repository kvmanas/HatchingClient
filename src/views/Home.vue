<template>
  <div>
    <PageHeader/>
    <MainComponent/>
  </div>
</template>

<script>
import MainComponent from "@/components/MainComponent";
import PageHeader from "@/components/PageHeader.vue";
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    MainComponent,
    PageHeader
  },
  created() {
    document.title = "Look ok!";
    var metaTag = document.createElement("meta");
    metaTag.name = "description";
    metaTag.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
    document.getElementsByTagName("head")[0].appendChild(metaTag);
  }
};
</script>
