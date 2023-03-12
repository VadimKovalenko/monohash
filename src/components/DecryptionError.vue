<template>
  <div class="decryption-error-container">
    <div class="decryption-error-container_wrap">
      <div>
        <h2>
          Ooop! Looks like your key and encrypted text are not related
          ¯\_(ツ)_/¯
        </h2>
      </div>
      <div>
        <i class="pi pi-times close-btn" @click="closeDecryptionErrorChild"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DecryptionError",
  data() {
    return {};
  },
  methods: {
    closeDecryptionErrorChild: function () {
      this.$emit("closeDecryptionErrorChild");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  text-align: center;
  padding: 20px 0;
}
h2 {
  text-align: center;
}
.decryption-error-container .decryption-error-container_wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background: #ff5252;
  color: white;
  padding: 0px 20px;
  width: 100%;
}
.decryption-error-container .close-btn {
  position: inherit;
  color: white;
}
.close-btn {
  font-size: 1rem;
  cursor: pointer;
  display: block;
  margin-left: auto;
  width: fit-content;
}
</style>
