<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div>
    <div i-carbon:hole-filling-cursor inline-block text-4xl />

    <p>
      <em text-sm op75> A simple JavaScript tool for converting any layout you have to drag-to-swap layout
      </em>
    </p>
    <div py-4 />

    <DragAndDrop />
  </div>
</template>
