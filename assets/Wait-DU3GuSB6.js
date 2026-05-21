const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Demo-CHM7h9fl.js","./Index-DUA0-TLm.js","./init-Dn_bkzmJ.js","./init-DaNCkYCS.css","./legacy-4Krf3onC.js"])))=>i.map(i=>d[i]);
import{t as e}from"./Index-DUA0-TLm.js";var t=[`加载动画与表单提交遮罩

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
`,()=>e(()=>import(`./Demo-CHM7h9fl.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url)];export{t as default};