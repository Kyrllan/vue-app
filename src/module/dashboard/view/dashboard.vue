<template>
  <div class="py-2">
    <v-row>
      <v-col cols="12" md="6" class="pt-6">
        <v-card>
          <v-card
            color="#e91e63"
            class="mx-4"
            style="position: relative; top: -20px"
            elevation="10"
          >
            <v-card-text>
              <div class="mx-2">
                <div
                  id="total_balance_chart"
                  style="min-height: 35vh; width: 100%"
                ></div>
              </div>
            </v-card-text>
          </v-card>
          <v-card-text class="ml-2">
            <h2 class="font-weight-light">Saldo Total:</h2>
            <h1 class="pt-2">270.239,76</h1>
            <h4 class="py-2 font-weight-light" style="min-height: 60px">
              (Receitas Liberadas + Receitas Bloqueadas) - ( Despesas
              Adiantamento + Despesas Vencidas + Despesas a Vencer )
            </h4>
            <v-divider></v-divider>
            <div class="pt-1 d-flex align-center">
              <v-icon small>mdi-clock-time-eight-outline</v-icon>
              <h4 class="pl-1 pt-1 font-weight-regular">
                Atualizado em
                {{ dayjs(new Date()).format("DD/MM/YYYY - HH:mm:ss") }}
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="pt-6">
        <v-card>
          <v-card
            color="#4CAF50"
            class="mx-4"
            style="position: relative; top: -20px"
            elevation="10"
          >
            <v-card-text>
              <div class="mx-2">
                <div
                  id="balance_available_chart"
                  style="min-height: 35vh; width: 100%"
                ></div>
              </div>
            </v-card-text>
          </v-card>
          <v-card-text class="ml-2">
            <h2 class="font-weight-light">Saldo Disponível:</h2>
            <h1 class="pt-2">-9.486,97</h1>
            <h4 class="py-2 font-weight-light" style="min-height: 60px">
              Receitas Liberadas - ( Despesas Adiantamento + Despesas Vencidas +
              Despesas a Vencer )
            </h4>
            <v-divider></v-divider>
            <div class="pt-1 d-flex align-center">
              <v-icon small>mdi-clock-time-eight-outline</v-icon>
              <h4 class="pl-1 pt-1 font-weight-regular">
                Atualizado em
                {{ dayjs(new Date()).format("DD/MM/YYYY - HH:mm:ss") }}
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="pt-2">
      <v-col class="pt-4" v-for="(card, i) in controller.cards" :key="i">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            min-width="320"
            @click.stop="controller.selectCard(card)"
          >
            <v-card
              :color="card.color"
              height="80"
              width="80"
              class="ml-4 d-flex justify-center align-center"
              style="position: absolute; top: -20px; z-index: 1"
              elevation="4"
            >
              <v-icon size="40" color="white">{{ card.icon }}</v-icon>
            </v-card>
            <v-card-text>
              <h1 class="pt-6 text-end">{{ card.value }}</h1>
              <h2 class="py-4 font-weight-light text-end">
                {{ card.title }}
              </h2>
              <v-divider class="py-2"></v-divider>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-dialog v-model="controller.dialog">
      <tabela :controller="controller" />
    </v-dialog>
  </div>
</template>

<script>
import tabela from "../components/tabela.vue";
import { dashboardController } from "../di/di";

export default {
  components: {
    tabela: tabela,
  },
  data: (context) => ({
    controller: dashboardController(context),
  }),
  mounted() {
    this.controller.mounted();

    window.addEventListener("resize", () => {
      this.controller.totalBalanceChart.resize({ height: 380 });
      this.controller.balanceAvailableChart.resize({ height: 380 });
    });
  },
};
</script>