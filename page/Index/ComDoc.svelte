<script>
import MdDoc from "~/page/Index/MdDoc.svelte";
import Preview from "~/page/Index/Preview/Preview.svelte";

let { info, readme, svgs = [], files = [], active_demo = null, loading = false } = $props();
</script>

<template lang="pug">
b.wrap
  +if loading
    b.wait
    +else
      MdDoc(
        name={ info[0] }
        title={ info[1] }
        readme={ readme }
        svgs={ svgs }
      )
      b.divider
      b.right
        Preview(
          name={ info[0] }
          active_demo={ active_demo }
          files={ files }
        )
</template>

<style lang="stylus">
@import '~/styl/var.styl'

.wrap
  flex 1
  display flex
  gap var(--gap)
  overflow hidden

  .divider
    display none

    @media $narrow
      display block
      height 2px
      width 100%
      background url('/svg/divider.svg') no-repeat center / 100% 100%
      margin 8px 0

  .right
    display flex
    flex-direction column
    flex 1
    min-width 0
    min-height 0
    gap var(--gap)
    padding 0
    box-sizing border-box

  .wait
    margin auto

@media $narrow
  .wrap
    flex-direction column
    gap 0

    > :global(v-scroll)
      flex 1
      min-height 260px
      mask-image linear-gradient(to bottom, #000 calc(100% - var(--gap)), transparent 100%)

    .right
      flex 1
      min-height 200px
      gap var(--gap)
      padding 0
</style>