<template>
  <q-page class="row items-center justify-evenly q-mx-md q-mb-md">
    <div v-if="loading" class="flex column justify-center items-center">
      <q-spinner-ball size="xl"/>
      <div class="text-body1 q-mt-lg" style="opacity: 0.5">
        {{ $t('tooltip_learn_input_query') }}...
      </div>
    </div>
    <div v-else-if="localGPT_response == null" class="text-body1 q-mt-lg" style="opacity: 0.5">
      {{ $t('tooltip_learn_query') }}
    </div>


    <div v-if="localGPT_response !== null">
      <div>
        <h3 class="text-weight-thin">Answer</h3>
        <div :class="'rounded-borders q-pa-md text-justify ' + ($q.dark.isActive ? 'bg-grey-10':'bg-grey-3')">
          {{ localGPT_response.Answer }}
        </div>
      </div>
      <div>
        <h3 class="text-weight-thin">Sources</h3>
        <q-list>
          <q-expansion-item
            v-for="source in localGPT_response.Sources"
            :key="source"

            :label="source[0]"
            group="sources"

            :class="$q.dark.isActive ? 'bg-grey-10':'bg-grey-3'"
          >
            <q-card class="q-pa-lg text-justify">
              {{ source[1] }}
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>

    <q-page-sticky position="top" :offset="[0, 25]">
      <q-input
        standout

        :label="$t('learn_input_query')"

        style="width: 25vw"

        v-model="query_input"
        :disable="loading"

        @keydown.enter="queryLocalGPT"
      >
        <template v-slot:append>
          <q-btn
            flat
            round

            icon="send"

            @click="queryLocalGPT"

            :disable="loading"
          />
        </template>
      </q-input>
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMeta } from 'quasar';

const metaData = {
  title: 'Prune Concept',
  titleTemplate: (title: string) => `${title} – Learn`,
}

export default defineComponent({
  name: 'LearnPage',
  setup() {
    useMeta(metaData)

    const query_input = ref('')
    const localGPT_response = ref(null)
    const loading = ref(false)

    return {
      query_input,
      localGPT_response,
      loading
    }
  },
  methods: {
    async queryLocalGPT() {
      if (this.query_input == '') {
        return
      }

      const query = new FormData()
      query.append('user_prompt', this.query_input)

      this.loading = true

      const response = await this.$api({
        url: 'http://127.0.0.1:5110/api/prompt_route',
        method: 'POST',
        data: query,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log('response', response);

      this.localGPT_response = response.data

      this.loading = false
    }
  }
});
</script>
