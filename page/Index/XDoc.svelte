<script>
import codeUrl from "~/sh/example/conf/url/CODE.js";
import readme from "~/gen/x_readme.js";
import list from "~/gen/x.js";
import Md from "~/page/lib/Md.svelte";
import Github from "~/page/lib/MdGithub.svelte";
import Top from "~/page/lib/MdTop.svelte";

const readme_title = readme[0],
  readme_desc = readme[1];
</script>

<template lang="pug">
v-scroll
  b
    article
      Top(name={ readme_title } title={ readme_desc } prefix)

      b.util-list
        +each list as [name, title, doc, code]
          details
            summary
              b
                h2 {name}
                b {title}
              b
                i.icon-arrow

            b
              +if doc
                Md(readme={ doc })
              b.code-header
                | 源代码
                Github(url!={ codeUrl('x/' + name + '.js') })
              b
                Md(readme="```javascript\n{code}\n```")
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
    display block
    line-height 1.7
    color #333336
    padding var(--gap) var(--gap) var(--gap) 0
    box-sizing border-box

    @media $mobile
      padding var(--gap) 0

    article
      padding 0 0 var(--gap)
      box-sizing border-box
      max-width 800px
      margin 0 auto

      .util-list
        display flex
        flex-direction column
        gap var(--gap)
        margin-top var(--gap)

        details
          display flex
          flex-direction column
          border-radius 16px
          border 1px solid #0000000a
          background #ffffff55
          backdrop-filter blur(20px)
          box-shadow 0 4px 12px #00000003, inset 0 1px 1px #ffffffb3
          overflow hidden
          transition all 0.25s ease

          &:hover
            background #ffffff80
            border-color #00000010
            box-shadow 0 8px 24px #00000008

          &[open]
            .icon-arrow
              transform rotate(180deg)
              filter opacity(80%)

          summary
            display flex
            align-items center
            justify-content space-between
            padding var(--gap)
            background #00000002
            gap var(--gap)
            cursor pointer
            user-select none
            outline none
            list-style none
            transition background-color 0.25s ease

            &::-webkit-details-marker
              display none

            &:hover
              background #00000006

            > b:first-child
              display flex
              align-items baseline
              gap 12px
              flex-wrap wrap

              h2
                font-size 18px
                font-weight 600
                color #1d1d1f
                margin 0

              b
                font-size 13px
                color #86868b
                font-weight 400

            > b:last-child
              display flex
              align-items center
              gap 16px
              flex-shrink 0

              .icon-arrow
                width 16px
                height 16px
                background url('/svg/down.svg') no-repeat center / contain
                filter opacity(40%)
                transition transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), filter 0.25s ease

          > b
            display block
            padding var(--gap)
            border-top 1px solid #00000005
            background #ffffff22
            animation fadeIn 0.25s ease

            .code-header
              display flex
              align-items center
              gap 6px
              font-size 14px
              font-weight 600
              color #1d1d1f
              margin-top var(--gap)
              margin-bottom 8px

              :global(a)
                width 14px
                height 14px
                border none
                background none
                backdrop-filter none
                box-shadow none
                color #86868b
                padding 0
                transition color 0.25s ease

                &::before
                  width 14px
                  height 14px

                &:hover
                  color #0071e3
                  background none
                  transform none
                  box-shadow none

            :global(pre)
              margin-top 0
              margin-bottom 0

    @media $mobile
      font-size 14px

      article
        padding 0 20px var(--gap)

@keyframes fadeIn
  from
    opacity 0
    transform translateY(-4px)

  to
    opacity 1
    transform translateY(0)
</style>