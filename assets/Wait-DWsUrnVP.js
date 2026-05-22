const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Demo-B8jbJL0a.js","./Index-Delbj31k.js","./init-ClRsA0Z4.js","./Index-D2nR6Vig.css","./legacy-CxYYy28h.js"])))=>i.map(i=>d[i]);
import{t as e}from"./Index-Delbj31k.js";var t=[`加载动画与表单提交遮罩

## 功能

- **独立加载**：元素添加 \`.wait\` 类显示加载图标
- **表单遮罩**：表单添加 \`.ing\` 类显示遮罩与加载图标，防止重复提交

## 使用

\`\`\`svelte
<template lang="pug">
// 独立加载动画
b.wait

// 表单提交遮罩
form.ing
  input(type="text")
  button(type="submit") 提交
</template>

<style lang="stylus">
@import "com/Wait/Wait.styl"
</style>
\`\`\`
`,()=>e(()=>import(`./Demo-B8jbJL0a.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url),[{name:`--waitSvg`,data_url:`/lib/svg/-oloHJiPWtJPJs8g_0WIaA.svg`,file_path:`./svg/wait.svg`}]];export{t as default};