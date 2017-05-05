new Vue({
    el: '#app',
    data: {
        health: {
            monster: 100,
            player: 100,
        },
        logTeamplate: {
            player: 'PLAYER HITS MONSTER FOR ',
            monster: 'MONSTER HITS PLAYER FOR ',
            hp: 'PLAYER HEALTH HIMSELF FOR 10' // hp is health player,
        },
        logs: [],
        isStart: false,
    },
    computed: {
        healthWidth(){
            return (health) => `width: ${health <10 ? 10 : health}%;`;
        }
    },
    methods: {
        startGame(){
            this.isStart = true;
            this.health.monster = 100;
            this.health.player = 100;
            this.logs = [];
        },
        giveUp(){
            this.isStart = false;
        },
        attack(type){
            const playerHitMonster = Math.ceil(Math.random()*10) + (type === 'special' ? 10 : 0);
            const monsterHitPlayer = Math.ceil(Math.random()*10);
            this.health.monster -= playerHitMonster;
            if (this.health.monster > 0){
                this.health.player -= monsterHitPlayer;
                this.logs.unshift(['monster', monsterHitPlayer], ['player', playerHitMonster]);
            } else {
                this.logs.unshift(['player', playerHitMonster]);
            }
            this.newGameAlert();
        },
        heal(){
            const monsterHitPlayer = Math.ceil(Math.random()*10);
            this.health.player = this.health.player - monsterHitPlayer + 10;
            if (this.health.player > 100) this.health.player = 100;
            this.logs.unshift(['monster', monsterHitPlayer], ['hp']);
        },
        showLogs(log){
            return `${this.logTeamplate[log[0]]}${log[1] ? log[1] : ''}`;
        }, 
        newGameAlert(){
            let result;
            if (this.health.monster <= 0) result = 'win';
            else if (this.health.player <= 0) result = 'lose';

            if (result) {
                const isConfirm = confirm(`You ${result}! New Game?`);
                if (isConfirm) this.startGame();
                else this.isStart = false;
            }
        }
    }
}); 