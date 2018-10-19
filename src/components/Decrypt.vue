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
    <transition name="fade">
      <DecryptionError v-if="isShowDecriptionErr" @closeDecryptionErrorChild="closeDecryptionErrorParent"/>
    </transition>
    <Loader v-if="isLoading"/>
  </div>
</template>

<script>
import DecryptResponse from './DecryptResponse'
import DecryptionError from './DecryptionError'
import Loader from './Loader'
import Api from './../services/Api'
import DecryptService from './../services/DecryptService'

export default {
  name: 'Decrypt',
    data() {
      return {
        textarea: '',
        password: '',
        decrypted: '',
        isShowDecriptionErr: false,
        isLoading: false,
      }
    },
  methods: {
    async handleDecryptText(text, password) {
        this.isLoading = true
        const response = await DecryptService.decryptPost(text, password)
        if (response.data !== 'Bad input string') {
          this.decrypted = response.data
          this.isLoading = false
        } else {
          //Hihlight error component with timeout
          this.isShowDecriptionErr = true;
          this.isLoading = false
          var self = this;
          setTimeout(function(){
              self.isShowDecriptionErr = false;
          }, 3000);
        }
    },
    closeDecryptionBlockParent() {
      this.decrypted = ''
    },
    closeDecryptionErrorParent() {
      this.isShowDecriptionErr = false
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
    DecryptionError,
    Loader
  }
}
</script>

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
