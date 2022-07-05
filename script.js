class TrucoCount {

    constructor() {

        this.$container = $('body');
        this.timeA = new time(this.$container.find('div.time-a'));
        this.timeB = new time(this.$container.find('div.time-b'));
        this.$reset = this.$container.find('.btn-reset');

        console.log(this);

        this.listen();
    }

    listen() {
        this.$reset.on('click', this.reset.bind(this));
    }

    reset() {
        this.timeA.reset();
        this.timeB.reset();
    }
}
/postgresql-tutorial/postgresql-select-distinct/
class time {

    constructor($container) {

        this.$container = $container;
        this.$score = $container.find('label.score');
        this.$counter = $container.find('label.counter');
        this.$incre = $container.find('button.btn-incre');
        this.$decre = $container.find('button.btn-decre');
        this.$sum = $container.find('button.btn-sum');
        this.$sub = $container.find('button.btn-sub');
        this.name = $container.find('h1').text();

        this.listen();
        this.reset();
    }

    listen() {

        this.$incre.on('click', this.incre.bind(this));
        this.$decre.on('click', this.decre.bind(this));
        this.$sum.on('click', this.sum.bind(this));
        this.$sub.on('click', this.sub.bind(this));
    }

    incre() {
        let current = Number.parseInt(this.$counter.text());
        let incre = (current == 1? 2 : 3);
        let counter = current += incre;

        if (counter > 12)
            counter = 12;

        this.$counter.text(counter);
    }

    decre() {
        let current = Number.parseInt(this.$counter.text());
        let inc = (current == 3 ? 2 : 3);
        let counter = current -= inc;

        if (counter < 1)
            counter = 1;

        this.$counter.text(counter);
    }

    sum() {
        let score = Number.parseInt(this.$score.text());
        let counter = Number.parseInt(this.$counter.text());

        let value = score + counter;

        if (value > 12)
            value = 12;
        this.$score.text(value);
    }

    sub() {
        let score = Number.parseInt(this.$score.text());
        let counter = Number.parseInt(this.$counter.text());

        let value = score - counter;

        if (value < 0)
            value = 0;

        this.$score.text(value);
        this.checkVictory(value);
    }

    reset() {
        this.$score.text(0);
        this.$counter.text(0);
    }


}

$(() => {
    new TrucoCount();
})