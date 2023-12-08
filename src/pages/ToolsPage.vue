<template>
  <q-page class="row items-center justify-evenly">
    <div class="flex column justify-center items-center" style="width: 75%">
      <div v-if="image_url !== ''" class="flex row justify-between items-center q-mb-lg">
        <div class="flex column justify-center items-center" style="width: 45%">
          <h2>Original</h2>
          <q-img width="100%" :src="image_url" class="q-mb-lg"/>
        </div>
        <q-separator vertical class="q-mx-md"/>
        <div class="flex column justify-center items-center" style="width: 45%">
          <h2>Compressed</h2>
          <q-img width="100%" :src="image_url" class="q-mb-lg"/>
        </div>
      </div>

      <q-file
        standout

        :label="$t('label_image_upload')"

        style="width: 50%"

        v-model="file"
        :disable="loading"

        @keydown.enter="uploadImage"
      >
        <template v-slot:append>
          <q-btn
            flat
            round

            icon="send"

            @click="uploadImage"
            :disable="loading"
          />
        </template>
      </q-file>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMeta } from 'quasar';

const metaData = {
  title: 'Prune Concept',
  titleTemplate: (title: string) => `${title} – Tools`,
}

export default defineComponent({
  name: 'ToolsPage',
  setup() {
    const image_url = ref('')
    const file = ref()
    const loading = ref(false)

    useMeta(metaData)

    return {
      file,
      loading,
      image_url
    }
  },
  methods: {
    async uploadImage() {
      this.image_url = URL.createObjectURL(this.file)

      const query = new FormData()
      query.append('file', this.file)

      this.loading = true

      const response = await this.$api({
        url:'http://192.168.202.244:4000/cdn/images',
        method: 'POST',
        data: query,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(response);

      this.loading = false
    }
  }
});
</script>
