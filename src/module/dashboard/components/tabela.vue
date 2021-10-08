<template>
  <div class="pt-6">
    <v-card>
      <v-app-bar
        rounded
        :color="controller.tabela.color"
        class="mx-4"
        style="position: relative; top: -20px; color: white"
      >
        <v-icon color="white">{{ controller.tabela.icon }}</v-icon>
        <h2 v-if="$vuetify.breakpoint.smAndUp" class="pl-4 font-weight-light">
          {{ controller.tabela.title }}
        </h2>
        <h4 v-else class="hidden-xs-and-up pl-4 font-weight-light">
          {{ controller.tabela.title }}
        </h4>
        <v-spacer></v-spacer>
        <v-btn icon @click="controller.dialog = false">
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </v-app-bar>
      <cgi-data-table
        :linhas="controller.items"
        :colunas="controller.headers"
        :carregar="controller.loading"
        altura="600"
        mostra-pesquisa
      >
        <template v-slot:valor="{ item }">
          <v-chip
            small
            :color="item.valor > 0 ? 'green' : 'red'"
            text-color="white"
            >{{ item.valor.toLocaleString("pt-BR") }}</v-chip
          >
        </template>
      </cgi-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    controller: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.controller.contextDialog = this;
  },
};
</script>