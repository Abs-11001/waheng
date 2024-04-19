import request from "@/utils/request";

export function getSmartTipsBaidu(query) {
    return request({
        url: '/baidu/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=iowenHot',
        method: 'get',
        params: query,
    })
}

export function getHitokoto(query) {
    return request({
        url: '/hitokoto',
        method: 'get',
    })
}