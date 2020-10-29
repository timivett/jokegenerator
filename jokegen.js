
let jokeArray = ["A man walks into a bar... Ouch!",
"Two peanuts walked into a bar. One was assaulted.", 
"Two antennas got married. The wedding wasn't much but the reception was excellent!",
"What's red and sits in the corner?... A naughty Firetruck.",
"When life gives you melons, you might be dyslexic.",
"Don't you hate it when people answer their own questions? I do.",
"Most people are shocked when they find out how bad I am as an electrican.",
"People who use selfie sticks really need to have a good, long look at themselves.",
"When my wife found out I replaced our bed with a trampoline she hit the ceiling!",
"I’m reading a book about anti-gravity. It’s impossible to put down."
];

const randomIndex = Math.floor(Math.random() * jokeArray.length);
const pickRandomJoke = () => {
    return jokeArray[randomIndex];
}

console.log(pickRandomJoke());


