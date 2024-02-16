<script setup>
import { watchEffect, ref, toRefs, watch } from 'vue';

const emit = defineEmits(['buyCar']);

const props = defineProps({
    carItem: {
        id: String,
        make: String,
        model: String,
        year: Number,
        color: String,
        transmission: String,
        image: String,
        price: Number
    },
    selectedCar: String | null
});

const {id, make, model, year, price, transmission, mileage} = props.carItem;

const isSelected = ref(false);

watchEffect(() => {
    if (props.selectedCar && id === props.selectedCar) {
        isSelected.value = true
    } else {
        isSelected.value = false
    }
});

</script>



<template>
    <ICard class="cardContainer">

        <template #image>
            <img :src="`https://source.unsplash.com/random/?${make},${model}`" alt="Card Image" />
        </template>
       
        <h5>{{ make }} {{ model }} {{ year }}</h5>
        <IListGroup :border="false" size="sm">
            <IListGroupItem>{{ transmission }}</IListGroupItem>
            <IListGroupItem>{{ mileage }}km</IListGroupItem>
            <IListGroupItem>${{ price }}</IListGroupItem>
        </IListGroup>

        <template #footer>
            <IButton color="primary" size="md" @click="$emit('buyCar', id)" v-if="!isSelected">Buy</IButton>   
            <IAlert color="success" size="sm" v-else="!isSelected">
                <template #icon>
                    <IIcon name="ink-check" />
                </template>
                You successfully bought this car.
            </IAlert> 
           
        </template>
    </ICard>
</template>

<style>

.cardContainer {
    width: 300px
}

.cardContainer img {
    width: 150px;
    height: 150px;
    object-fit: cover;
}

</style>