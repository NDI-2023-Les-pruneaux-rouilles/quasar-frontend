<template>
  <q-page class="row items-center justify-evenly">

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'quasar';

const metaData = {
  title: 'Prune Concept',
  titleTemplate: (title: string) => `${title} – Learn`,
}

export default defineComponent({
  name: 'LearnPage',
  setup() {
    useMeta(metaData)
  }
});
</script>
