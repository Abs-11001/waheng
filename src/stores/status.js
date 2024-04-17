import {defineStore} from "pinia";

// 侧边栏折叠状态
export const useStatusStore = defineStore('status', {
    state: () => ({
        sidebarCollapsed: false
    }),
    actions: {
        changeCollapseStatus() {
            this.sidebarCollapsed = ! this.sidebarCollapsed
        }
    }
})