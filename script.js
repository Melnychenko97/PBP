var cows = [
    {
        name: "Legolas",
        type: "calf",
        hadCalf: false
    },
    {
        name: "Gimli",
        type: "bull",
        hadCalf: false
    },
    {
        name: "Arwen",
        type: "cow",
        hadCalf: false
    },
    {
        name: "Galadriel",
        type: "cow",
        hadCalf: false
    },
    {
        name: "Eowyn",
        type: "cow",
        hadCalf: "Legolas"
    }
];

Object.prototype.noCalves = function() {
    return (this.type === 'cow' && this.hadCalf === false);
};

console.log( cows[1].noCalves() );
console.log( cows[2].noCalves() );

Array.prototype.countCows = function () {

   return  this.reduce(function (prev, current) {
        if( current.noCalves() ){
            prev++;
        }
        return prev;
    }, 0);
};
console.log( cows.countCows() );