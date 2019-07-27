<template>
    <div class="Home">
        <FilterBtn></FilterBtn>
        <Item></Item>
    </div>
</template>
<script>
import FilterBtn from './FilterBtn.vue'   
import Item from './Item.vue'
export default {
    name:'Home',
    components: {
        FilterBtn,  
        Item
    },
    mounted:function(){
        this.$store.dispatch('initItem')   
    }
}
</script>

