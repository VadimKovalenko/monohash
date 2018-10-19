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
    <md-button class="md-raised md-accent encrypt-btn" :disabled="isDisabled" @click="handleEncryptText(textarea, password)">Encrypt</md-button>
    <transition name="fade">
      <EncryptResponse v-if="encrypted" :password="responsePassword" :encryptedData="encrypted" @closeEncryptionBlockChild="closeEncryptionBlockParent"/>
    </transition>
    <Loader v-if="isLoading"/>
  </div>
</template>


<script>
import EncryptResponse from './EncryptResponse'
import Api from './../services/Api'
import EncryptService from './../services/EncryptService'
import Loader from './Loader'

export default {
  name: 'Encrypt',
  data() {
    return {
      textarea: '',
      password: '',
      encrypted: '',
      responsePassword: '',
      isLoading: false,
    }
  },
  methods: {
    async handleEncryptText(text, password) {
      this.isLoading = true
      const response = await EncryptService.ecnryptPost(text, password)
      this.encrypted = response.data
      this.responsePassword = password
      this.isLoading = false
    },
    closeEncryptionBlockParent() {
      this.encrypted = ''
      this.responsePassword = ''
    },
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
    EncryptResponse,
    Loader
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.encrypt-btn {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

</style>
