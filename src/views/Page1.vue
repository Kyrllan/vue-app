<template>
  <div>
    <h1>Page 1</h1>
    <v-card>
      <v-container>
        <div>
          <v-text-field-simplemask
            v-model="value"
            v-bind:label="label"
            v-bind:properties="{
              prefix: '',
              suffix: '',
              readonly: false,
              disabled: false,
              outlined: false,
              clearable: true,
              placeholder: '',
            }"
            v-bind:options="{
              inputMask:
                value.length < 11 ? '(##) ####-####' : '(##) #####-####',
              outputMask:
                value.length < 11 ? '(##) ####-####' : '(##) #####-####',
              empty: null,
              applyAfter: false,
              alphanumeric: true,
              lowerCase: false,
            }"
            v-bind:focus="focus"
            v-on:focus="focus = false"
          />
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: "99999999999",
    label: "Phone Number",
    focus: false,
  }),
  mounted() {
    console.log("Montou pagina 1");
  },
  destroyed() {
    console.log("Destruiu pagina 1");
  },
};
</script>
