<script lang="ts" setup>
import { createSwapy } from 'swapy'
import A from './A.vue'
import C from './C.vue'
import D from './D.vue'

const DEFAULT = {
  1: 'a',
  3: 'c',
  4: 'd',
  2: null,
}
const slotItems: Record<string, 'a' | 'c' | 'd' | null> = localStorage.getItem('slotItem') ? JSON.parse(localStorage.getItem('slotItem')!) : DEFAULT

const container = ref()

onMounted(() => {
  if (container.value) {
    const swapy = createSwapy(container.value)
    swapy.onSwap(({ data }) => {
      localStorage.setItem('slotItem', JSON.stringify(data.object))
    })
  }
})

function getItemById(itemId: 'a' | 'c' | 'd' | null) {
  switch (itemId) {
    case 'a':
      return A
    case 'c':
      return C
    case 'd':
      return D
  }
}
</script>

<template>
  <div
    ref="container"
    class="container"
  >
    <div
      class="slot a"
      data-swapy-slot="1"
    >
      <component :is="getItemById(slotItems['1'])" />
    </div>
    <div class="second-row">
      <div
        class="slot b"
        data-swapy-slot="2"
      >
        <component :is="getItemById(slotItems['2'])" />
      </div>
      <div
        class="slot c"
        data-swapy-slot="3"
      >
        <component :is="getItemById(slotItems['3'])" />
      </div>
    </div>
    <div
      class="slot d"
      data-swapy-slot="4"
    >
      <component :is="getItemById(slotItems['4'])" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 0 auto;
}

.second-row {
  display: flex;
  gap: 5px;
}

.slot {
  background: #111;
  flex: 1;
}

.slot.a {
  flex-basis: 150px;
  height: 150px;
}

.slot.b {
  flex: 2;
}

.second-row {
  height: 100px;
}

.slot.d {
  flex-basis: 120px;
  height: 120px;
}

.item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  position: relative;
}

.item.a {
  background: #b95050;
}

.item.b {
  background: #50b97f;
}

.item.c {
  background: #508db9;
}

.item.d {
  background: #b95096;
}

[data-swapy-highlighted] {
  background: #444;
}

.handle {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.enable-input {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
}
</style>
