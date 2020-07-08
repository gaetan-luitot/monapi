<script src='@/scripts/charts/ChartYear.js'></script>

<template>
  <div class="chart-year">
    <h1>{{ account }} - {{ $route.params.year }}</h1>
    <div class="month-chart" style="max-width: 100vw; height: 75vh">
    </div>
  </div>
</template>
