<template>
  <div>
    <Fieldset class="response-block" legend="Decrypted data">
      <div class="md-title">Decryption complete</div>
      <i class="pi pi-times close-btn" @click="closeDecryptionBlockChild"></i>
      <p>{{ decryptedData }}</p>
    </Fieldset>
  </div>
</template>

<script>
export default {
  name: "DencryptResponse",
  props: {
    decryptedData: { type: String, required: false },
  },
  methods: {
    closeDecryptionBlockChild: function () {
      this.$emit("closeDecryptionBlockChild");
    },
  },
};
</script>

<style scoped>
.close-btn {
  font-size: 1rem;
  cursor: pointer;
  display: block;
  margin-left: auto;
  width: fit-content;
}
</style>
