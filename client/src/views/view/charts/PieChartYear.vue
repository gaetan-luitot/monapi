<script src='@/scripts/charts/PieChartYear.js'></script>

<template>
  <div class="piechart-year">
    <h1>{{ account }} - {{ $route.params.year }}</h1>
    <div class="category-chart" style="max-width: 100vw; height: 75vh">
    </div>
  </div>
</template>
