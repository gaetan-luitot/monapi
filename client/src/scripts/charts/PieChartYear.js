import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

const FlowService = require('../../services/FlowService');
const AccountService = require('../../services/AccountService');

export default {
    data: () => ({
        account: '',
        categories: [],
    }),
    methods: {
        async loadOperator() {
            const name = await (
                await AccountService.getAccountName(+this.$route.params.accountId)
            ).json();
            if (name.success && name.data.name) {
                this.account = name.data.name;
            } else {
                this.account = 'Unknown';
            }
        },
        async loadForYear() {
            const flowByCat = await (
                await FlowService.loadCategoriesForYear(
                    +this.$route.params.accountId,
                    +this.$route.params.year,
                )
            ).json();
            console.log('flowByCat', flowByCat);
            if (flowByCat.success) {
                this.categories = flowByCat.data;
                console.log('a');
                /* for (let i = 0; i < flowByCat.data.length; i += 1) {
                    this.categories[
                        flowByCat.data.inputs[i].month - 1
                    ].input = flowByCat.data.inputs[i].amount;
                }
                for (let i = 0; i < flowByCat.data.outputs.length; i += 1) {
                    this.categories[
                        flowByCat.data.outputs[i].month - 1
                    ].output = flowByCat.data.outputs[i].amount;
                } */
            }
        },
        createChart() {
            const chart = am4core.create(
                'category-chart', am4charts.PieChart,
            );

            chart.data = this.categories;

            // Donuts :
            // chart.innerRadius = am4core.percent(40);


            const pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = 'amount';
            pieSeries.dataFields.category = 'name';

            // Disable legend lines :
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;

            //
            pieSeries.slices.template.tooltipText = '{name} : [bold]{value}[/] €';

            // Add cursor
            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineY.disabled = true;
            chart.cursor.lineX.disabled = true;

            // Legend :
            chart.legend = new am4charts.Legend();
            chart.legend.position = 'top';
        },
    },
    async mounted() {
        am4core.useTheme(am4themesAnimated);
        await this.loadOperator();
        await this.loadForYear();
        this.createChart();
    },
};
