<script>
import mdRender from "~/js/mdRender.js";

let { readme } = $props(),
  element = $state(null);

$effect(() => {
  mdRender(element, readme);
});
</script>

<template lang="pug">
b(bind:this={ element })
</template>

<style lang="stylus">
@import '~/styl/var.styl'

b
  display block

  :global(h1), :global(h2), :global(h3), :global(h4)
    color #1d1d1f
    font-weight 600
    margin-top 24px
    margin-bottom 16px

  :global(h1)
    font-size 26px

  :global(h2)
    font-size 20px

  :global(h3)
    font-size 16px

  :global(p)
    margin-bottom 16px

  :global(ul)
    margin-bottom 16px
    padding-left 20px
    list-style-type disc

    :global(li)
      margin-bottom 6px

  :global(code)
    font-family SFMono-Regular, SF Mono, Menlo, Monaco, Consolas, monospace
    font-size 13px
    padding 2px 6px
    border-radius 4px
    color #0071e3
    border 1px solid #0071e31a
    background #0071e30d

  :global(pre)
    border 1px solid #00000012
    border-radius 12px
    padding 14px 16px
    overflow-x auto
    margin-bottom 20px
    margin-top 12px
    background #ffffff80
    backdrop-filter blur(25px) saturate(180%)
    box-shadow inset 0 1px 0 0 #ffffffa6, 0 4px 12px #00000005

    :global(code)
      background transparent
      border 0
      padding 0
      border-radius 0
      color #1d1d1f
      line-height 1.6

    //Modern Light syntax coloring:
    :global(.token.comment), :global(.token.prolog), :global(.token.doctype), :global(.token.cdata)
      color #86868b
      font-style italic

    :global(.token.punctuation)
      color #6e7681

    :global(.token.keyword)
      color #ad208e
      font-weight 600

    :global(.token.string), :global(.token.char), :global(.token.attr-value)
      color #248a3d

    :global(.token.number), :global(.token.boolean)
      color #1c00cf

    :global(.token.function)
      color #0071e3

    :global(.token.class-name), :global(.token.maybe-class-name)
      color #5c2699

    :global(.token.tag), :global(.token.operator)
      color #ad208e

    :global(.token.attr-name)
      color #8a3ffc

    :global(.token.selector)
      color #5c2699

    :global(.token.property)
      color #1d1d1f

    :global(.token.regex)
      color #c41a16

  :global(pre[class*='language-']), :global(code[class*='language-']), :global(:not(pre) > code[class*='language-'])
    background transparent

  :global(a)
    color #0071e3
    text-decoration none
    border-bottom 1px solid #0071e333
    transition all 0.25s ease

    &:hover
      color #0077ed
      border-bottom-color #0077ed

  :global(blockquote.alert)
    margin 20px 0
    padding 16px 20px 16px 52px
    border-left 4px solid
    border-radius 12px
    box-sizing border-box
    position relative
    background #ffffff73
    backdrop-filter blur(25px) saturate(180%)
    box-shadow inset 0 1px 0 0 #ffffffa6, 0 4px 12px #00000005
    border 1px solid #ffffff33

    :global(.alert-title)
      position absolute
      left 16px
      top 16px
      font-size 0
      margin 0
      padding 0

      :global(.alert-icon)
        display block
        width 22px
        height 22px
        mask-size contain
        mask-repeat no-repeat
        mask-position center
        flex-shrink 0

    :global(p)
      margin 0
      color #1d1d1f

      &:not(:last-child)
        margin-bottom 8px

  :global(blockquote.alert-note)
    border-left-color #0071e3

    :global(.alert-icon)
      mask-image url('/svg/note.svg')
      background #0071e3

  :global(blockquote.alert-tip)
    border-left-color #34c759

    :global(.alert-icon)
      mask-image url('/svg/tip.svg')
      background #24b24b

  :global(blockquote.alert-important)
    border-left-color #af52de

    :global(.alert-icon)
      mask-image url('/svg/important.svg')
      background #af52de

  :global(blockquote.alert-warning)
    border-left-color #ff9500

    :global(.alert-icon)
      mask-image url('/svg/warning.svg')
      background #e08200

  :global(blockquote.alert-caution)
    border-left-color #ff3b30

    :global(.alert-icon)
      mask-image url('/svg/caution.svg')
      background #ff3b30

  @media $mobile
    :global(h1)
      font-size 20px

    :global(h2)
      font-size 17px

    :global(pre)
      padding 12px
      border-radius 8px
      font-size 12px

    :global(blockquote.alert)
      padding 12px 14px 12px 42px
      border-radius 8px

      :global(.alert-title)
        left 12px
        top 12px

        :global(.alert-icon)
          width 18px
          height 18px
</style>