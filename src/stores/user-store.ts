import { defineStore } from 'pinia';
import { Dark } from 'quasar';
import { i18n } from 'boot/i18n';

interface Language {
  label: string
  value: 'en-US' | 'fr-FR'
  flag: string
}

const language_list: Language[] = [
  {
    label: 'English',
    value: 'en-US',
    flag: 'uk'
  },
  {
    label: 'Français',
    value: 'fr-FR',
    flag: 'fr'
  },
]

export const useUserStore = defineStore('user', {
  state: () => ({
    dark_mode: true,

    language_list: language_list,
    language: language_list[0]
  }),
  getters: {

  },
  actions: {
    initDarkMode() {
      Dark.set(this.dark_mode)
    },
    toggleDarkMode() {
      this.dark_mode = !this.dark_mode;
      Dark.set(this.dark_mode)
    },

    selectLanguage() {
      i18n.global.locale.value = this.language.value
    }
  },
  persist: true,
});
