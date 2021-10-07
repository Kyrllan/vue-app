import * as echarts from "echarts";
//import dayjs from "dayjs";

export default class DashboardController {
  context = null;
  totalBalanceChart = null;
  balanceAvailableChart = null;
  dialog = null;
  contextDialog = null;

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
    { col1: "Teste", col2: "Teste", col3: "Teste" },
    { col1: "Teste 2", col2: "Teste 2", col3: "Teste 2" },
    { col1: "Teste 3", col2: "Teste 3", col3: "Teste 3" },
  ];
  headers = [
    {
      text: "Coluna 1",
      align: "start",
      sortable: true,
      value: "col1",
      divider: true,
    },
    {
      text: "Coluna 2",
      align: "start",
      sortable: true,
      value: "col2",
      divider: true,
    },
    {
      text: "Coluna 2",
      align: "start",
      sortable: true,
      value: "col2",
      divider: true,
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
