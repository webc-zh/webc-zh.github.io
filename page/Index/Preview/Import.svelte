<script>
import cdn from "../../../conf/cdn.npm.js";
import cdn_pkg from "../../../conf/npm/CDN_PKG.js";
import ver from "../../../conf/ver/webc.site.js";
import Copy from "../../lib/Copy.svelte";
import CdnTabs from "./CdnTabs.svelte";
import Fiddle from "./Fiddle.svelte";

let { name, files = [] } = $props();

const cdn_keys = Object.keys(cdn);
let active_cdn = $state(cdn_keys[0]);

const urls_text = $derived(
  files
    .map((file) => {
      const url = cdn[active_cdn](cdn_pkg, ver) + "/" + file;
      if (file.endsWith(".css")) {
        return '<link href="' + url + '" rel="stylesheet">';
      }
      if (file.endsWith(".js")) {
        return '<script type="module">import "' + url + '"</' + "script>";
      }
      return url;
    })
    .join("\n"),
);
</script>

<template lang="pug">
+if files.length > 0
  article.LG
    h2
      | 代码引用
      b
        Fiddle(name={ name } urls_text={ urls_text })
        Copy(text={ urls_text })
        CdnTabs(keys={ cdn_keys } bind:active={ active_cdn })
    b
      pre {urls_text}
</template>

<style lang="stylus">
article
  border-radius 24px
  padding 24px 32px
  box-sizing border-box
  line-height normal
  width 100%

  h2
    font-size 15px
    font-weight 600
    color #1d1d1f
    margin 0 0 16px
    display flex
    align-items center
    justify-content space-between

    > b
      display flex
      align-items center
      gap 12px

  b
    display flex
    align-items flex-start
    gap 16px

    pre
      flex 1
      min-width 0
      margin 0
      overflow-x auto
      font-family source-code-pro, Menlo, Monaco, Consolas, monospace
      font-size 13px
      color #1d1d1f
      white-space pre-wrap
      word-break break-all
      line-height 1.5

  @media (max-width 767px)
    border-radius 16px
    padding 16px 20px

    h2
      font-size 13px
      margin-bottom 12px
      flex-direction column
      align-items flex-start
      gap 12px

      > b
        width 100%
        justify-content flex-start
        flex-wrap wrap
        gap 8px

    b
      gap 12px

      pre
        font-size 11px
</style>