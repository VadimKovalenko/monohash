<template>
  <!--<div>Encryption component</div>-->
  <Fieldset
    legend="Create your private key"
    class="encrypt-private-key-fieldset"
  >
    <InputText
      :value="password"
      @input="(event) => (password = event.target.value)"
      type="password"
    ></InputText>
  </Fieldset>
  <Fieldset legend="Input text to encrypt">
    <Textarea
      :value="textarea"
      @input="(event) => (textarea = event.target.value)"
    ></Textarea>
  </Fieldset>
  <Button
    class="md-raised md-accent encrypt-btn"
    :disabled="isDisabled"
    @click="handleEncryptText(textarea, password)"
    >Encrypt
  </Button>
  <transition name="fade">
    <EncryptResponse
      v-if="encrypted"
      :password="responsePassword"
      :encryptedData="encrypted"
      @closeEncryptionBlockChild="closeEncryptionBlockParent"
    />
  </transition>
  <LoaderIcon v-if="isLoading" />
</template>

<script>
import EncryptResponse from "./EncryptResponse.vue";
import EncryptService from "./../services/EncryptService";
import LoaderIcon from "./LoaderIcon.vue";

export default {
  components: {
    EncryptResponse,
    LoaderIcon,
  },
  data() {
    return {
      textarea: "",
      password: "",
      encrypted: "",
      responsePassword: "",
      isLoading: false,
    };
  },
  methods: {
    async handleEncryptText(text, password) {
      this.isLoading = true;
      const response = await EncryptService.ecnryptPost(text, password);
      this.encrypted = response.data;
      this.responsePassword = password;
      this.isLoading = false;
    },
    closeEncryptionBlockParent() {
      this.encrypted = "";
      this.responsePassword = "";
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

.encrypt-btn {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
