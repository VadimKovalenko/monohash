import Api from '@/services/Api'

export default {
    decryptPost(text, password) {
        return Api().post('decrypt', {text, password})
    }
}
