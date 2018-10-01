<template>
  <div>
    <md-field>
    <label>Paste encrypted text for decryption</label>
        <md-textarea v-model="textarea"></md-textarea>
    </md-field>
    <md-field>
      <label>Related private key</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
    <md-button class="md-raised md-primary decrypt-btn" :disabled="isDisabled" @click="handleDecryptText(textarea, password)">Decrypt</md-button>
    <transition name="fade">
      <DecryptResponse v-if="decrypted" :decryptedData="decrypted" @closeDecryptionBlockChild="closeDecryptionBlockParent"/>
    </transition>
  </div>
</template>

<script>
import DecryptResponse from './DecryptResponse'
import Api from './../services/Api'
import DecryptService from './../services/DecryptService'

export default {
  name: 'Decrypt',
    data() {
      return {
        textarea: '',
        password: '',
        decrypted: ''
      }
    },
  methods: {
    async handleDecryptText(text, password) {
      const response = await DecryptService.decryptPost(text, password)
      this.decrypted = response.data
    },
    closeDecryptionBlockParent() {
      this.decrypted = ''
    }
  },
  computed: {
    isDisabled() {
      if (this.password !== '' && this.textarea !== '') {
        return false
      } else {
        return true
      }
    }
  },
  components: {
    DecryptResponse,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.decrypt-btn {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
