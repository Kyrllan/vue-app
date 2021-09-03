<template>
  <div>
    <h1>Page 1</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Montou pagina 1");
  },
  destroyed() {
    console.log("Destruiu pagina 1");
  },
};
</script>