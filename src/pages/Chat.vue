<script setup>
import { ref } from "vue";

const messages = ref([]);
const message = ref("");
</script>

<template>
  <section>
    <div>
      <textarea class="bg-red" id="messages" cols="30" rows="10"></textarea>

      <p>{{ message }}</p>
      <input v-model="message" type="text" />
      <button>Enviar</button>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
