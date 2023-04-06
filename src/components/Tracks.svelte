<script lang="ts">
    import colors from "$lib/colors.js";
    import Track from "./Track.svelte";

    import {stepCountStore} from "$stores/game-state-store";
</script>

{#each colors as color}
    <Track {color} position={Math.floor(Math.random()*$stepCountStore)}/>
{/each}
