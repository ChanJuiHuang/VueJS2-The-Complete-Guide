export const fruitMixin = {
    data(){
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(new RegExp(this.filterText,'i'));
            });
        }
    },
    created(){
        console.log('in the fruitMixin.js');
    }
};