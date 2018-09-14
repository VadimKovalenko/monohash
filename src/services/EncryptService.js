import Api from '@/services/Api'

export default {
    ecnryptPost(text, password) {
        return Api().post('encrypt', {text, password})
    }
}
