import { uuid } from '@/utils/index'

const state = () => ({
    userList: [
        {
            id: uuid(),
            name: 'Tony',
            age: 29
        },
        {
            id: uuid(),
            name: 'Jey',
            age: 31
        }
    ],
})

const mutations = {
    setUserList(state, userList) {
        state.userList = userList
    }
}

export default {
    state, mutations,
}