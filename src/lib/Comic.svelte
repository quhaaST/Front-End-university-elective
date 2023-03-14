<script lang="ts">
    import {fetchData} from "./fetcher";
    import {mapDate} from "./mapper";

    let comicDataPromise = fetchData()
</script>

<section class="comic-info-container">
    {#await comicDataPromise}
        <h2 class="block-title">Loading...</h2>
        <div class="comic-info fixed-size-info-block">
            <p class="date">Loading...</p>
        </div>

    {:then comicData}
        <h2 class="block-title">{comicData.safe_title}</h2>
        <div class="comic-info fixed-size-info-block">
            <img class="comic-img" src="{comicData.img}" alt="{comicData.alt}">
            <p class="date">{mapDate(comicData).toLocaleDateString()}</p>
        </div>
    {:catch _}
        <h2 class="block-title">Error occurred...</h2>

    {/await}
</section>

<style>
    .comic-info-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        background: azure;
    }

    .comic-img {
        width: 80%;
        padding: 15px 0 15px 0;
    }

    .date {
        width: 100%;
        text-align: end;
    }
</style>