<template>
  <div class="main">
    <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>
    <div class="tab-layout">
      <md-tabs md-sync-route>
        <md-tab id="tab-encryption" md-label="Encryption">
          <Encrypt/>
        </md-tab>
        <md-tab id="tab-decryption" md-label="Decryption">
          <Decrypt/>
        </md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
import Decrypt from './Decrypt'
import Encrypt from './Encrypt'

export default {
  name: 'Main',
  data () {
    return {
      msg: 'monohash',
      title: '0--#'
    }
  },
  components: {
    Decrypt,
    Encrypt
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.tab-layout {
  width: 1140px;
  margin-left: auto;
  margin-right: auto;
}
</style>
