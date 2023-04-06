<script lang="ts">
    import {stepCountStore} from "$stores/game-state-store";

    export let color: string;
    export let position: number = 0;
</script>

<div style="border: thin solid {color}">
    {position}
    {#each Array.from({length: $stepCountStore}, (_, i) => i) as step}
        <div class="trackStep" style="border: thin solid {color}; background-color: {(step === position) ? color: ''}">
            {step}
        </div>
    {/each}
</div>

<style>
    div {
        padding: 1rem;
        display: flex;
        align-content: space-between;
    }

    .trackStep {
        flex-grow: 1;
        margin: 1rem;
    }
</style>