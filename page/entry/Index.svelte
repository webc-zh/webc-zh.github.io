<script>
import { onMount } from "svelte";
import { routeDelay } from "x/routeDelay.js";
import coms from "~/gen/com/index.js";
import Aside from "~/page/Index/Aside.svelte";
import ComDoc from "~/page/Index/ComDoc.svelte";
import ReadmeDoc from "~/page/Index/ReadmeDoc.svelte";
import XDoc from "~/page/Index/XDoc.svelte";

let active_index = $state(-1),
  active_readme = $state(""),
  active_demo = $state.raw(null),
  active_svgs = $state.raw([]),
  active_files = $state.raw([]),
  aside_open = $state(false),
  loading = $state(false),
  readme_name = $state(""),
  readme_content = $state("");

const active_comp_info = $derived(coms[active_index]),
  toggleAside = () => {
    aside_open = !aside_open;
  },
  loadHomepage = async () => {
    active_index = -2;
    aside_open = false;
    if (!readme_content) {
      loading = true;
      const m = await import("../../gen/com/readme.js");
      [readme_name, readme_content] = m.default;
      loading = false;
    }
    active_readme = readme_content;
    active_svgs = [];
    active_files = [];
    active_demo = null;
  },
  load = async (index) => {
    active_index = index;
    aside_open = false;
    const info = coms[index];
    if (info) {
      loading = true;
      const [name, title, load_func] = info,
        m = await load_func(),
        [readme, demo_func, svgs, files] = m.default;

      active_readme = readme;
      active_svgs = svgs || [];
      active_files = files || [];
      if (demo_func) {
        const demo_mod = await demo_func();
        active_demo = demo_mod.default;
      } else {
        active_demo = null;
      }
      loading = false;
    } else {
      active_readme = "";
      active_demo = null;
      active_svgs = [];
      active_files = [];
    }
  },
  loadX = () => {
    active_index = -3;
    aside_open = false;
    active_readme = "";
    active_svgs = [];
    active_files = [];
    active_demo = null;
  };

onMount(() => {
  return routeDelay((url) => {
    if (!url) {
      loadHomepage();
      return;
    }
    const index = coms.findIndex(([name]) => name.toLowerCase() == url.toLowerCase());
    if (index == -1) {
      if (url.toLowerCase() == "x") {
        loadX();
      } else {
        loadHomepage();
      }
    } else {
      load(index);
    }
  });
});
</script>

<template lang="pug">
main
  +if !aside_open
    button.menu-toggle(aria-label="菜单" onclick!={ toggleAside })
      b
      b
      b
  +if aside_open
    button.overlay(aria-label="关闭" onclick!={ toggleAside })
  Aside(
    bind:active_index={ active_index }
    bind:aside_open={ aside_open }
    class!={ aside_open ? 'show' : '' }
  )
  section
    +if active_index == -2
      ReadmeDoc(name={ readme_name } readme={ readme_content })
      +elseif active_index == -3
        XDoc
      +elseif active_comp_info
        ComDoc(
          info={ active_comp_info }
          readme={ active_readme }
          svgs={ active_svgs }
          files={ active_files }
          active_demo={ active_demo }
          loading={ loading }
        )
        +else
          article.LG
            h2 请选择一个组件查看文档
</template>

<style lang="stylus">
@import '~/styl/var.styl'

main
  display flex
  height 100dvh
  width 100vw
  background url('/svg/bg.svg') no-repeat center / cover
  color #1d1d1f
  font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  overflow hidden
  gap var(--gap)
  box-sizing border-box
  position relative

.menu-toggle
  display none

  @media $mobile
    display inline-flex
    flex-direction column
    align-items center
    justify-content center
    gap 3px
    position absolute
    top var(--gap)
    right 20px
    z-index 102
    width 32px
    height 32px
    border-radius 50%
    border 1px solid #00000014
    color #1d1d1f
    background linear-gradient(135deg, #ffffff66, #ffffff1f)
    backdrop-filter blur(8px)
    box-shadow inset 0 1px 1px #ffffff99, 0 1px 2px #0000000a
    transition all 0.25s cubic-bezier(0.4, 0, 0.2, 1)
    cursor pointer
    padding 0

    &:hover
      color #0071e3
      border-color #0047e333
      background linear-gradient(135deg, #ffffff99, #ffffff33)
      transform scale(1.06) translateY(-1px)
      box-shadow inset 0 1px 1px #ffffffcc, 0 4px 12px #0000000f, 0 1px 2px #0000000a

      > b
        background currentColor

    &:active
      transform scale(0.96)
      background linear-gradient(135deg, #ffffff4d, #ffffff0f)
      box-shadow inset 0 1px 2px #0000000d

    > b
      width 14px
      height 2px
      background currentColor
      border-radius 1px
      transition all 0.3s ease

.overlay
  display none

  @media $mobile
    display block
    position fixed
    inset 0
    z-index 99
    background #00000033
    backdrop-filter blur(4px)
    animation fadeIn 0.25s ease

section
  flex 1
  display flex
  flex-direction column
  overflow hidden

  > article
    flex 1
    display flex
    align-items center
    justify-content center
    color #86868b
    border-radius 24px

  @media $mobile
    padding 0

    > article
      border-radius 16px

@keyframes fadeIn
  from
    opacity 0

  to
    opacity 1
</style>