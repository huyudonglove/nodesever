import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './langs/zh'
import en from './langs/en'


Vue.use(VueI18n)

const messages = {
  en: Object.assign(en),
  zh: Object.assign(zh)
}

console.log(messages.zh)

const i18n = new VueI18n({
  locale: 'zh',
  messages
})


export default i18n
