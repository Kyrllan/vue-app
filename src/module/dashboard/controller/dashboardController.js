import * as echarts from "echarts";
//import dayjs from "dayjs";

export default class DashboardController {
  context = null;
  totalBalanceChart = null;
  balanceAvailableChart = null;
  dialog = null;
  contextDialog = null;
  loading = false;

  cards = [
    {
      id: 1,
      title: "Total Receitas Liberadas",
      color: "#FD9A13",
      icon: "mdi-chart-bar",
      value: "13.355,82",
    },
    {
      id: 2,
      title: "Total Receitas Bloqueadas",
      color: "#e91e63",
      icon: "mdi-chart-bar",
      value: "280.086,73",
    },
    {
      id: 3,
      title: "Total Despesas Adiantamento",
      color: "#4CAF50",
      icon: "mdi-currency-usd",
      value: "0,00",
    },
    {
      id: 4,
      title: "Total Despesas Vencidas",
      color: "#00CAE3",
      icon: "mdi-cash-multiple",
      value: "-3.559,51",
    },
    {
      id: 5,
      title: "Total Despesas a Vencer",
      color: "#9C27B0",
      icon: "mdi-account-cash",
      value: "-19.643,78",
    },
  ];

  tabela = {
    title: "",
    color: "",
    icon: "",
  };

  items = [
    {
      fil: "001",
      doc: "575/32",
      parc: "1",
      placa: "JAP 9B18",
      motorista: "ADÃO PEDRO BOEIRA",
      obrigacao: "Fretes a Pagar PJ-Associados",
      tipo: "Fatura de Frete - Fatura",
      vencto: "17/09/2021",
      valor: 359.52,
    },
    {
      fil: "001",
      doc: "575/32",
      parc: "1",
      placa: "JAP 9B18",
      motorista: "ADÃO PEDRO BOEIRA",
      obrigacao: "Fretes a Pagar PJ-Associados",
      tipo: "Fatura de Frete - Fatura",
      vencto: "17/09/2021",
      valor: 359.52,
    },
    {
      fil: "001",
      doc: "575/32",
      parc: "1",
      placa: "JAP 9B18",
      motorista: "ADÃO PEDRO BOEIRA",
      obrigacao: "Fretes a Pagar PJ-Associados",
      tipo: "Fatura de Frete - Fatura",
      vencto: "17/09/2021",
      valor: 359.52,
    },
    {
      fil: "001",
      doc: "575/32",
      parc: "1",
      placa: "JAP 9B18",
      motorista: "ADON PEDRO BOEIRA",
      obrigacao: "Fretes a Pagar PJ-Associados",
      tipo: "Fatura de Frete - Fatura",
      vencto: "17/09/2021",
      valor: -359.52,
    },
    {
      fil: "002",
      doc: "575/32",
      parc: "1",
      placa: "JAP 9B18",
      motorista: "ADÃO PEDRO BOEIRA",
      obrigacao: "Fretes a Pagar PJ-Associados",
      tipo: "Fatura de Frete - Fatura",
      vencto: "17/09/2021",
      valor: 359.52,
    },
  ];
  headers = [
    {
      text: "Fil",
      align: "start",
      sortable: true,
      value: "fil",
      divider: true,
    },
    {
      text: "Doc",
      align: "start",
      sortable: true,
      value: "doc",
      divider: true,
    },
    {
      text: "Parc",
      align: "start",
      sortable: true,
      value: "parc",
      divider: true,
    },
    {
      text: "Placa",
      align: "start",
      sortable: true,
      value: "placa",
      divider: true,
    },
    {
      text: "Motorista",
      align: "start",
      sortable: true,
      value: "motorista",
      divider: true,
    },
    {
      text: "Obrigação",
      align: "start",
      sortable: true,
      value: "obrigacao",
      divider: true,
    },
    {
      text: "Tipo",
      align: "start",
      sortable: true,
      value: "tipo",
      divider: true,
    },
    {
      text: "Vencimento",
      align: "start",
      sortable: true,
      value: "vencto",
      divider: true,
    },
    {
      text: "Valor",
      align: "center",
      sortable: true,
      value: "valor",
      divider: true,
      custom: true,
    },
  ];

  constructor(context) {
    this.context = context;
  }

  mounted() {
    this.createtotalBalanceChart();
    this.createBalanceAvailableChart();
  }

  async selectCard(card) {
    this.tabela.color = card.color;
    this.tabela.title = card.title;
    this.tabela.icon = card.icon;
    this.dialog = true;
  }

  async createtotalBalanceChart() {
    await new Promise((resolver) => setTimeout(resolver, 500));
    var chartDom = document.getElementById("total_balance_chart");
    this.totalBalanceChart = echarts.init(chartDom);

    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        top: "10px",
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
        backgroundColor: "#E91E63",
        show: true,
        color: "red",
      },
      xAxis: [
        {
          type: "category",
          data: [
            "Receitas Liberadas",
            "Receitas Bloqueadas",
            "Despesas Adiantamento",
            "Despesas Vencidas",
            "Despesas a Vencer",
          ],
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            interval: 0,
            fontSize: 12,
            rotate: 45,
            color: "white",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            color: "white",
          },
        },
      ],
      series: [
        {
          name: "Saldo",
          type: "bar",
          barWidth: "40%",
          data: [13355.82, 280086.73, 0.0, -3559.51, -19643.78],
          color: "white",
        },
      ],
    };

    option && this.totalBalanceChart.setOption(option);

    this.totalBalanceChart.resize();
  }

  async createBalanceAvailableChart() {
    await new Promise((resolver) => setTimeout(resolver, 500));
    var chartDom = document.getElementById("balance_available_chart");
    this.balanceAvailableChart = echarts.init(chartDom);

    let option = {
      color: "black",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        top: "10px",
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
        backgroundColor: "#4CAF50",
        show: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "Receitas Liberadas",
            "Despesas Adiantamento",
            "Despesas Vencidas",
            "Despesas a Vencer",
          ],
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            interval: 0,
            fontSize: 12,
            rotate: 45,
            color: "white",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            color: "white",
          },
        },
      ],
      series: [
        {
          name: "Saldo",
          type: "bar",
          barWidth: "40%",
          data: [13355.82, 0.0, -3559.51, -19643.78],
          color: "white",
        },
      ],
    };

    option && this.balanceAvailableChart.setOption(option);

    this.balanceAvailableChart.resize();
  }
}
