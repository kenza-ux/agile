export default {
    state: {
        currentUser: null,
        users: [
            // Mock database
            {
                id: 1,
                email: 'artisan@test.com',
                password: 'artisan123',
                role: 'artisan',
                name: 'Artisan Test'
            },
            {
                id: 2,
                email: 'client@test.com',
                password: 'client123',
                role: 'client',
                name: 'Client Test'
            }
        ]
    },
    mutations: {
        SET_USER(state, user) {
            state.currentUser = user
            localStorage.setItem('currentUser', JSON.stringify(user))
        },
        ADD_USER(state, user) {
            state.users.push(user)
        },
        LOGOUT(state) {
            state.currentUser = null
            localStorage.removeItem('currentUser')
        }
    },
    actions: {
        login({ commit, state }, { email, password }) {
            const user = state.users.find(u =>
                u.email === email && u.password === password
            )
            if (user) {
                commit('SET_USER', user)
                return Promise.resolve(user)
            }
            return Promise.reject(new Error('Identifiants incorrects'))
        },
        register({ commit }, userData) {
            const newUser = {
                id: Date.now(),
                ...userData
            }
            commit('ADD_USER', newUser)
            commit('SET_USER', newUser)
            return Promise.resolve(newUser)
        },
        logout({ commit }) {
            commit('LOGOUT')
        }
    },
    getters: {
        isAuthenticated: state => !!state.currentUser,
        currentUser: state => state.currentUser,
        userRole: state => state.currentUser?.role
    }
}
