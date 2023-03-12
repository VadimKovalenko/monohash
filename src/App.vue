<template>
  <div class="main">
    <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>
    <TabView>
      <TabPanel header="Encryption">
        <EncryptData />
      </TabPanel>
      <TabPanel header="Decryption">
        <DecryptData />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import EncryptData from "./components/EncryptData.vue";
import DecryptData from "./components/DecryptData.vue";

export default {
  components: {
    TabView,
    TabPanel,
    EncryptData,
    DecryptData,
  },
  data() {
    return {
      msg: "monohash",
      title: "0--#",
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
  text-align: center;
}
.tab-layout {
  width: inherit;
  margin-left: auto;
  margin-right: auto;
}
</style>
