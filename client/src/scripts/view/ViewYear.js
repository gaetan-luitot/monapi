import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

const FlowService = require('../../services/FlowService');

export default {
    data: () => ({
        months: [
            { month: 'January', amount: 0 },
            { month: 'February', amount: 0 },
            { month: 'March', amount: 0 },
            { month: 'April', amount: 0 },
            { month: 'May', amount: 0 },
            { month: 'June', amount: 0 },
            { month: 'July', amount: 0 },
            { month: 'August', amount: 0 },
            { month: 'September', amount: 0 },
            { month: 'October', amount: 0 },
            { month: 'November', amount: 0 },
            { month: 'December', amount: 0 },
        ],
    }),
    methods: {
        async loadForYear() {
            const flowByMonth = await (
                await FlowService.loadForYear(+this.$route.params.year)
            ).json();

            if (flowByMonth.success) {
                for (let i = 0; i < flowByMonth.data.length; i += 1) {
                    this.months[flowByMonth.data[i].month - 1].amount = flowByMonth.data[i].amount;
                }
            }
        },
        async createChart() {
            const chart = am4core.create(
                'month-chart', am4charts.XYChart,
            );

            console.log(this.months);
            chart.data = this.months;

            const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = 'month';
            categoryAxis.title.text = 'Months';

            const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = 'Money Spent (€)';
            valueAxis.cursorTooltipEnabled = false;
            valueAxis.min = 0;

            const series = chart.series.push(new am4charts.ColumnSeries3D());
            series.dataFields.valueY = 'amount';
            series.dataFields.categoryX = 'month';
            series.name = 'Amount';
            series.columns.template.fill = am4core.color('#42B983');
            series.tooltipText = '[bold]{valueY}[/] €';

            // Add cursor
            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineY.disabled = true;
            chart.cursor.lineX.disabled = true;
        },
    },
    async mounted() {
        am4core.useTheme(am4themesAnimated);
        await this.loadForYear();
        await this.createChart();
    },
};
