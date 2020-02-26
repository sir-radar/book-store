<template>
  <div
    class="notify col-md-3 text-white text-center rounded"
    :class="{'bg-danger': notify.type == 'danger', 'bg-success': notify.type == 'success'}"
    >
    {{ notify.message }}
  </div>
</template>

<script>
export default {
  name: 'Notify',
  props: {
    notify: Object
  }
}
</script>
<style lang="scss" scoped>
.notify{
  position: fixed;
  top: 2rem;
  left: .5rem;
}
</style>
