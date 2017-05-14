export const addTextLengthMixin = {
    computed: {
        addTextLengthMixin(){
            return `${this.text} (${this.text.length})`;
        }
    }
};