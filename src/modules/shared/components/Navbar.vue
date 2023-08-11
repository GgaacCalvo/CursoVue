<template>
    <div>
        <!-- <router-link :to="{ name:'home' }"> Pokemon List </router-link>
        <router-link :to="{ name:'pokemon-id', params: { id: 85 } }"> Pokemon por ID </router-link>
        <router-link :to="{ name:'about' }"> About </router-link> -->
            <CustomLink 
                v-for="link in links"
                :key="link.to"
                :link="link"
            />
    </div>    

</template>

<script>
import { defineAsyncComponent } from 'vue'
export default{
    data(){
        return{
            links: [
                {to: 'pokemon-home', name: 'Pokemons'},
                {to: 'pokemon-id', name: 'Por ID', id: 154},
                {to: 'pokemon-about', name: 'About'},
                {to: 'dbz-characters', name: 'Personajes'},
                {to: 'dbz-about', name: 'DBZ-About'},
                {to: 'https://google.com', name: 'Google'},
            ]
        }
    },
    components:{
        CustomLink: defineAsyncComponent(()=> import('./CustomLink.vue'))
    },


}
</script>

<style scoped>
    div{
        padding: 0 50px;
    }
    div a {
        font-weight: bold;
        color: #303030;
        margin: 0 10px;
    }
    /* div .router-link-exact-active{
        color: #42b983
    } */
</style>