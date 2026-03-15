import { defineStore } from "pinia"
import { ref } from "vue"

export const useSettingsStore = defineStore("settings", () => {
    const settings = ref({
        darkMode: true,
        autoSwitchTheme: true,
        notifications: true,
        showLastOnline: true,
    });

    return { settings };
}, {
    persist: true // Плагин сам сохранит всё, что есть в return
});