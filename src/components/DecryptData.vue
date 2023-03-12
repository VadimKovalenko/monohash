<template>
  <div>
    <Fieldset legend="Paste encrypted text for decryption">
      <Textarea v-model="textarea"></Textarea>
    </Fieldset>
    <Fieldset legend="Related private key">
      <InputText v-model="password" type="password"></InputText>
    </Fieldset>
    <Button
      class="md-raised md-primary decrypt-btn"
      :disabled="isDisabled"
      @click="handleDecryptText(textarea, password)"
      >Decrypt
    </Button>
    <transition name="fade">
      <DecryptResponse
        v-if="decrypted"
        :decryptedData="decrypted"
        @closeDecryptionBlockChild="closeDecryptionBlockParent"
      />
    </transition>
    <transition name="fade">
      <DecryptionError
        v-if="isShowDecriptionErr"
        @closeDecryptionErrorChild="closeDecryptionErrorParent"
      />
    </transition>
    <LoaderIcon v-if="isLoading" />
  </div>
</template>

<script>
import DecryptResponse from "./DecryptResponse.vue";
import DecryptionError from "./DecryptionError.vue";
import LoaderIcon from "./LoaderIcon.vue";
import DecryptService from "./../services/DecryptService";

export default {
  name: "DecryptData",
  data() {
    return {
      textarea: "",
      password: "",
      decrypted: "",
      isShowDecriptionErr: false,
      isLoading: false,
    };
  },
  methods: {
    async handleDecryptText(text, password) {
      this.isLoading = true;
      try {
        const response = await DecryptService.decryptPost(text, password);
        this.decrypted = response.data;
        this.isLoading = false;
      } catch (e) {
        this.decrypted = false;
        //Hihlight error component with timeout
        this.isShowDecriptionErr = true;
        this.isLoading = false;
        let self = this;
        setTimeout(function () {
          self.isShowDecriptionErr = false;
        }, 3000);
      }
    },
    closeDecryptionBlockParent() {
      this.decrypted = "";
    },
    closeDecryptionErrorParent() {
      this.isShowDecriptionErr = false;
    },
  },
  computed: {
    isDisabled() {
      if (this.password !== "" && this.textarea !== "") {
        return false;
      } else {
        return true;
      }
    },
  },
  components: {
    DecryptResponse,
    DecryptionError,
    LoaderIcon,
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

input {
  width: 100%;
}

fieldset {
  margin-bottom: 30px;
}

textarea {
  width: 100%;
}

.decrypt-btn {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
