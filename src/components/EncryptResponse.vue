<template>
  <div>
    <md-card class="response-block">
      <md-card-header>
        <div class="md-title">QR-code for your key:</div>
        <md-icon class="close-btn"><span @click="closeEncryptionBlockChild">close</span></md-icon>
      </md-card-header>
      <md-card-content>
        <div>
          <qriously v-model="password" :size="150" />
        </div>
      </md-card-content>
      <md-card-header>
        <div class="md-title">Your encrypted text:</div>
      </md-card-header>
      <md-card-content>
        <p>{{ encryptedData }}</p>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'EncryptResponse',
  props: {
      encryptedData: { type: String, required: false },
      password: { type: String, required: true }
  },
  methods: {
    closeEncryptionBlockChild: function() {
      this.$emit('closeEncryptionBlockChild')
    }
  }
}
</script>
