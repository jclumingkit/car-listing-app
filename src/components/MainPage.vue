<script setup ts>

import { onBeforeMount, ref, watch } from 'vue';
import CarItem from './CarItem.vue';

defineProps({
  msg: String,
});

const apiUrl = `https://freetestapi.com/api/v1/cars?limit=12`;

const carList = ref(null);
const selectedCar = ref(null);

onBeforeMount(async () => {
  carList.value = await (await fetch(apiUrl)).json();
});

function buyCar(carId) {
    selectedCar.value = carId;
}

</script>

<template>
  <ILayout>
    <ILayoutContent>
      <h1>{{ msg }}</h1>
      <template class="carListContainer" >
        <CarItem v-for="carItem in carList" :key="carItem.id" :carItem="carItem" :selectedCar="selectedCar" @buyCar="buyCar"  />
      </template>
    </ILayoutContent>
  </ILayout>
</template>

<style>

.carListContainer {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

</style>
