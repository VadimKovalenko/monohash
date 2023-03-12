<template>
  <div>
    <Fieldset class="response-block" legend="Encrypted hash">
      <!--<div class="md-title">QR-code for your key:</div>-->
      <i class="pi pi-times close-btn" @click="closeEncryptionBlockChild"></i>
      <div class="qr-block">
        <!--<qriously v-bind="password" :size="150" />-->
      </div>
      <div class="md-title">Your encrypted text:</div>
      <p>{{ encryptedData }}</p>
    </Fieldset>
  </div>
</template>

<script>
export default {
  name: "EncryptResponse",
  props: {
    encryptedData: { type: String, required: false },
    password: { type: String, required: true },
  },
  methods: {
    closeEncryptionBlockChild() {
      this.$emit("closeEncryptionBlockChild");
    },
  },
};
</script>

<style scoped>
.md-title,
.qr-block {
  text-align: center;
}

.close-btn {
  font-size: 1rem;
  cursor: pointer;
  display: block;
  margin-left: auto;
  width: fit-content;
}
</style>
