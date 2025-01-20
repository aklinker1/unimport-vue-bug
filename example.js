import { createUnimport } from "unimport";

const id = "/path/to/example.vue";
const code = `<script>
import { ref } from 'vue';

const count = ref(someImport);
</script>

<template>
  <button @click="() => count++">{{ count }}</button>
</template>
`;

const unimport = createUnimport({
  imports: [{ from: "example", name: "someImport" }],
});
const res = await unimport.injectImports(code, id);
console.log(res.code);
