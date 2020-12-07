/**
 * d.js
 */

interface DutilsTypes {}

class Dutils {
    /**
     * 字符串格式化
     * @param string 需要传入的字符串
     * @param chars 
     */
    static trim(string: string, chars?: string) {
        if (string && chars === undefined) {
            return string.trim()
        }
        if(!string || !chars) {
            return (string || '')
        }
    }

    /**
     * 字符串转数组
     * @param str 需要处理的字符串
     */
    static formatArr(str: string) {
        let arr: any[] = []
        Object.keys(str).forEach((v: any) => {
            let obj: any = {}
            obj[v] = str[v]
            arr.push(v)
        })
        return arr
    }

    /**
     * 处理时间函数
     * @param time 时间
     * @param cFromat 时间格式
     * @returns 返回结果 字符串
     */
    static formatTime(time: number, cFromat: string) {
        if (arguments.length === 0) return null
        if ((time + '').length === 10) {
            time = time * 1000
        }
        let format = cFromat || '{y}-{m}-{d}:{h}:{i}:{s}',
            date
        if (typeof time === 'object') {
            date = time
        } else {
            date = new Date(time)
        }

        let formatObj: any = {
            y: date.getFullYear(),
            m: date.getMonth(),
            d: date.getDate(),
            h: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds(),
            a: date.getDay()
        }

        let time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result: any, key: any): any => {
            let val: any = formatObj[key]
            if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日']
            if (result.length > 0 && val < 10) {
                val = '0' + val
            }
            return val || 0
        })

        return time_str
    }

}

export default Dutils
