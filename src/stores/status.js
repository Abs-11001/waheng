import {defineStore} from "pinia";

// 侧边栏折叠状态
export const useStatusStore = defineStore('status', {
    state: () => ({
        sidebarCollapsed: false
    }),
    actions: {
        changeCollapseStatus(status) {
            /**
             * 修改sidebarCollapsed状态
             * 可选是否传入status状态，如果没穿将进行取反操作，如果传了就按照传入的设置
             */
            if(!status)  this.sidebarCollapsed = ! this.sidebarCollapsed
            else {
                this.sidebarCollapsed = status
            }
            localStorage.setItem('sidebarCollapsed', this.sidebarCollapsed)
        }
    }
})