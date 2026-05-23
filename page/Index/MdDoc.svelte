<script>
import Svg from "~/page/Index/Preview/MdSvg.svelte";
import Md from "~/page/lib/Md.svelte";
import Top from "~/page/lib/MdTop.svelte";

let { name = "", title = "", readme, svgs = [] } = $props();
</script>

<template lang="pug">
v-scroll
  b
    article.LG
      Top(name={ name } title={ title })
      Md(readme={ readme })
    Svg(svgs={ svgs })
</template>

<style lang="stylus">
@import '~/styl/var.styl'

v-scroll
  flex 1
  min-width 0
  min-height 0

  &::part(scroll)
    box-sizing border-box
    overflow-x hidden

  > b
    display flex
    flex-direction column
    gap var(--gap)
    line-height 1.7
    color #333336
    padding var(--gap) 0
    box-sizing border-box

    @media $narrow
      padding var(--gap) var(--gap) var(--gap) 0

    @media $mobile
      padding var(--gap) 0

    article
      border-radius 24px
      padding var(--gap)
      box-sizing border-box

    @media $mobile
      font-size 14px

      article
        padding-top 0
        border-radius 16px
</style>