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
        altura="600"
        paginacao-servidor
        @paginando="paginando"
        mostra-pesquisa
      >
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