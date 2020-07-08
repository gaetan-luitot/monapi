import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

const FlowService = require('../../services/FlowService');
const AccountService = require('../../services/AccountService');

export default {
    data: () => ({
        account: '',
        months: [
            { month: 'January', input: 0, output: 0 },
            { month: 'February', input: 0, output: 0 },
            { month: 'March', input: 0, output: 0 },
            { month: 'April', input: 0, output: 0 },
            { month: 'May', input: 0, output: 0 },
            { month: 'June', input: 0, output: 0 },
            { month: 'July', input: 0, output: 0 },
            { month: 'August', input: 0, output: 0 },
            { month: 'September', input: 0, output: 0 },
            { month: 'October', input: 0, output: 0 },
            { month: 'November', input: 0, output: 0 },
            { month: 'December', input: 0, output: 0 },
        ],
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
            const flowByMonth = await (
                await FlowService.loadAccountForYear(
                    +this.$route.params.accountId,
                    +this.$route.params.year,
                )
            ).json();
            if (flowByMonth.success) {
                for (let i = 0; i < flowByMonth.data.inputs.length; i += 1) {
                    this.months[
                        flowByMonth.data.inputs[i].month - 1
                    ].input = flowByMonth.data.inputs[i].amount;
                }
                for (let i = 0; i < flowByMonth.data.outputs.length; i += 1) {
                    this.months[
                        flowByMonth.data.outputs[i].month - 1
                    ].output = flowByMonth.data.outputs[i].amount;
                }
            }
        },
        createChart() {
            const chart = am4core.create(
                'month-chart', am4charts.XYChart,
            );

            chart.data = this.months;

            const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = 'month';
            categoryAxis.title.text = 'Months';

            const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = 'Amount (€)';
            valueAxis.cursorTooltipEnabled = false;
            valueAxis.min = 0;

            const outputs = chart.series.push(new am4charts.ColumnSeries3D());
            outputs.dataFields.valueY = 'output';
            outputs.dataFields.categoryX = 'month';
            outputs.name = 'Outputs';
            outputs.columns.template.fill = am4core.color('#42B983');
            outputs.tooltipText = '{name} : [bold]{valueY}[/] €';
            outputs.stacked = true;

            const inputs = chart.series.push(new am4charts.ColumnSeries3D());
            inputs.dataFields.valueY = 'input';
            inputs.dataFields.categoryX = 'month';
            inputs.name = 'Inputs';
            inputs.columns.template.fill = am4core.color('#8ed5b5');
            inputs.tooltipText = '{name} : [bold]{valueY}[/] €';
            inputs.stacked = true;

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
