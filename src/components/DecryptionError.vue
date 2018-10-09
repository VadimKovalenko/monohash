<template>
  <div class="md-layout md-alignment-center">
    <div class="md-layout-item md-medium">
      <h2 class="md-title">Ooop! Looks like your key and encrypted text are not related ¯\_(ツ)_/¯</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DecryptionError',
    data() {
      return {
      }
    },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center {
    text-align: center;
    padding: 20px 0;
  }
  h2 {
    text-align: center;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    background: #ff5252;
    color: white;
    padding: 15px 10px;
    width: 100%;
  }
</style>