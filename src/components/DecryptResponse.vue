<template>
  <div>
      <md-card class="response-block">
        <md-card-header>
            <div class="md-title">Decryption complete</div>
            <md-icon class="close-btn"><span @click="closeDecryptionBlockChild">close</span></md-icon>
        </md-card-header>
        <md-card-content>
            <p>{{ decryptedData }}</p>
        </md-card-content>
      </md-card>
  </div>
</template>

<script>
export default {
  name: 'DencryptResponse',
  props: {
      decryptedData: { type: String, required: false }
  },
  methods: {
    closeDecryptionBlockChild: function() {
      this.$emit('closeDecryptionBlockChild')
    }
  }
}
</script>

<style scoped>
  .md-title {
    text-align: center;
  }
</style>