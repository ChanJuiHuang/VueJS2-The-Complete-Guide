<template>
    <div class="row">
        <div class="col-md-12">
            <h1>Quotes Added</h1>
            <div class="progress">
                <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    :style="{width: `${progress*10}%`}">
                    <span>{{ progress }} / 10</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            progress: Number
        }
    }
</script>

<style scoped>
    h1, span {
        font-weight: bold;
    }
</style>
