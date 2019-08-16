<template lang="pug">
  #user 
    |UserID: {{ $route.params.id }}
    br
    |UserName: {{ $route.query.name }}
    br
    |UserAge: {{ $route.query.age }}
    router-view
</template>

<script>
export default {

}
</script>

<style>

</style>