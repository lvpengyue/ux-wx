import { mapActions, mapGetters } from 'vuex';



export default {
    computed: {
        ...mapGetters([
            'demoInput',
            'demoResult'
        ])
    },
    methods: {
        ...mapActions([
            'demoSetInput',
            'demoGetWeathers'
        ])
    }
};
