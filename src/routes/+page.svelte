<script lang="ts">
    import Winner from "$components/Winner.svelte";
    import Tracks from "$components/Tracks.svelte";
    import Dice from "$components/Dice.svelte";
</script>

<svelte:head>
    <title>Tempo, Kleine Schnecken - Svelte Game</title>
    <meta name="description" content="The popular snail racing game for children."/>
</svelte:head>

<section>
    <Winner/>
    <Tracks/>
    <Dice/>
</section>
