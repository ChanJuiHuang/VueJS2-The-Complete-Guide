<template>
    <div class="col-xs-6 col-md-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
    .quote {
        font-family: Arizonia;
        font-size: 24px;
        cursor: pointer;
    }
    .quote:hover {
        background: gainsboro;
    }
</style>