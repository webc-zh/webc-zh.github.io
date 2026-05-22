<script>
import { onMount } from "svelte";

let { keys = [], active = $bindable() } = $props();

const STORAGE_KEY = "cdn",
  setActive = (name) => {
    active = name;
    localStorage.setItem(STORAGE_KEY, name);
  };

onMount(() => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && keys.includes(stored)) {
    active = stored;
  } else if (!active && keys.length > 0) {
    active = keys[0];
  }
});
</script>

<template lang="pug">
nav
  +each keys as name
    button(
      class!={ active == name ? 'active' : '' }
      onclick!={ setActive.bind(null, name) }
    ) {name}
</template>

<style lang="stylus">
nav
  display inline-flex
  align-items center
  background #7878801f
  padding 2px
  border-radius 8px
  height 28px
  box-sizing border-box

  button
    border 0
    background transparent
    padding 0 10px
    height 24px
    display inline-flex
    align-items center
    font-size 12px
    font-weight 500
    color #86868b
    border-radius 6px
    cursor pointer
    transition all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    outline none
    user-select none

    &:hover
      color #1d1d1f

    &.active
      background #ffffff
      color #1d1d1f
      box-shadow 0 1px 3px #0000001a, 0 1px 1px #0000000d
</style>