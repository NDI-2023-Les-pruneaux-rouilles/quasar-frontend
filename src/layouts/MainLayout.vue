<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div class="flex row justify-around items-center q-ml-sm">
          <q-select
            borderless

            :options="language_list"
            v-model="language"

            @update:model-value="selectLanguage"
          >
            <q-tooltip>
              {{ $t('tooltip_select_language') }}
            </q-tooltip>


            <template v-slot:selected>
              <q-img width="25px" :src="'flags/' + language.flag + '_flag.png'" :alt="language.flag + '_flag'" :ratio="3/2"/>
            </template>

            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                  <q-img width="50px" :src="'flags/' + scope.opt.flag + '_flag.png'" :alt="scope.opt.flag + '_flag'" :ratio="3/2"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>


          <q-btn
            flat
            round

            size="md"
            padding="sm"

            :icon="dark_mode ? 'dark_mode':'light_mode'"

            @click="toggleDarkMode"
          >
            <q-tooltip>
              {{ $t('tooltip_dark_mode') }}
            </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from 'stores/user-store'
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    const userStore = useUserStore()

    userStore.initDarkMode()
    userStore.selectLanguage()

    return {
      locale
    }
  },

  computed: {
    ...mapWritableState(useUserStore, ['dark_mode', 'language']),
    ...mapState(useUserStore, ['language_list']),
  },

  methods: {
    ...mapActions(useUserStore, ['toggleDarkMode', 'selectLanguage']),
  }
});
</script>
