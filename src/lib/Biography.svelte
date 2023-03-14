<section class="info-container">
    <img class="photo" src="../../assets/person.png" alt="Successful person" loading="lazy">
    <div class="info">
        <h2 class="info-title">About me</h2>
        <ul class="facts-list">
            <li>Evdokimov Aleksandr, 20 y.o.</li>
            <li>Innopolis B20 SD-01 student</li>
            <li>Cat and dogs enjoyer</li>
            <li>Senior Front-End develop at NASA</li>
            <li>Website design hater</li>
        </ul>
    </div>
</section>

<style>
    .info-container {
        padding: 50px 0 50px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: azure;
    }

    .photo {
        width: 200px;
        margin-right: 50px;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-self: stretch;
        margin-left: 50px;
    }

    .info-title {
        margin-left: 1em;
        font-size: 24px;
    }

    .facts-list li {
        margin-bottom: 15px;
    }
</style>