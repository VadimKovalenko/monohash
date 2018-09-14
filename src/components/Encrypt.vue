<template>
  <div>
    <md-field>
      <label>Create your private key</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
    <md-field>
      <label>Input text to encrypt</label>
      <md-textarea v-model="textarea"></md-textarea>
    </md-field>
    <md-button class="md-raised md-accent"  @click="handleEncryptText(textarea, password)">Encrypt</md-button>
    <transition name="fade">
      <EncryptResponse v-if="encrypted" :password="responsePassword" :encryptedData="encrypted" @closeEncryptionBlockChild="closeEncryptionBlockParent"/>
    </transition>
  </div>
</template>


<script>
import EncryptResponse from './EncryptResponse'
import Api from './../services/Api'
import EncryptService from './../services/EncryptService'

export default {
  name: 'Encrypt',
  data() {
    return {
      textarea: '',
      password: '',
      encrypted: '',
      responsePassword: '',
    }
  },
  methods: {
    async handleEncryptText(text, password) {
      const response = await EncryptService.ecnryptPost(text, password)
      this.encrypted = response.data
      this.responsePassword = password
    },
    closeEncryptionBlockParent() {
      this.encrypted = ''
      this.responsePassword = ''
    }
  },
  components: {
    EncryptResponse
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
