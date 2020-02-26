<template>
  <button class="p-1 mr-4 rounded" @click.prevent="$router.go(-1)">{{ $t('util.prev_btn') }}</button>
</template>
