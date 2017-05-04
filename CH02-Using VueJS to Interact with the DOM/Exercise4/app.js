new Vue({
  el: '#exercise',
  data: {
    highlight: false,
    shrink: true,
    fontSize: 'fontSize',
    class3: 'shrink',
    class4: 'highlight',
    isActive: 'true',
    myStyle: 'border: 2px solid red',
    progessWidth: 0
  },
  computed: {
    class4Output(){
      return {[this.class4]: this.isActive === 'true' ? true : false};
    },
    progress(){
      return {
        background: 'gray',
        width: this.progessWidth + '%',
        height: '100%'
      };
    }
  },
  methods: {
    startEffect() {
      setInterval(() => {
        this.highlight = !this.highlight;
        this.shrink = !this.shrink;
      }, 1000);
    },
    startProgress(){
      const myProgress = setInterval(() => {
        if (this.progessWidth === 100) {
          clearInterval(myProgress);
          this.progessWidth = 0;
        } else this.progessWidth += 20
      }, 1000);
    }
  }
});
