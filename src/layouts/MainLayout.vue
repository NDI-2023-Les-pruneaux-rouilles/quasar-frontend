<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header q-py-lg q-px-lg">
      <q-toolbar>
        <div class="flex row items-center q-mr-xl">
          <q-img
            class="q-mr-md"
            width="45px"
            src="prune.png"
          />
          <div
            :class="'flex column header-title ' + (dark_mode ? 'text-white':'text-grey-7')"
          >
            <div class="text-left">PRUNE</div>
            <div class="text-right">&nbsp;&nbsp;&nbsp;&nbsp;CONCEPT</div>
          </div>
        </div>

        <q-tabs inline-label class="text-grey-6">
          <q-route-tab
            :label="$t('header_home')"
            icon="home"
            to="/"
            exact
          />
          <q-route-tab
            :label="$t('header_learn')"
            icon="school"
            to="/learn"
            exact
          />
          <q-route-tab
            :label="$t('header_swipe')"
            icon="swipe"
            to="/swipe"
            exact
          />
          <q-route-tab
            :label="$t('header_tools')"
            icon="construction"
            to="/tools"
            exact
          />
          <q-route-tab
            :label="$t('header_get_involved')"
            icon="groups"
            to="/get-involved"
            exact
          />
        </q-tabs>


        <q-space />

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
            :color="dark_mode ? 'white':'grey-8'"

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
      <router-view class="q-px-xl q-py-md"/>
    </q-page-container>


    <q-footer class="bg-transparent">
      <div class="q-py-sm q-mx-auto text-center text-caption text-grey">
        <a href="https://nuitdelinfo.com/" class="text-grey">Nuit de l'info 2023</a>  — &copy; Julien CAPOSIENA Johan PANCHON
      </div>
    </q-footer>
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

<style lang="scss">

.header {
  background: linear-gradient(0deg, rgb(0, 0, 0, 0), transparentize($brown, 0.75));
}

.header-title {
  font-family: "Segoe UI Black", sans-serif;
  font-weight: bolder;
}

</style>
