function Sentence(noun, verb, adverb, adjective){
    this.noun = noun;
    this.verb = verb;
    this.adverb = adverb;
    this.adjective = adjective;
}

let nounPro = prompt('write a noun it could be anything');
let verbPro = prompt('write a verb');
let adverbPro = prompt('give me an adverb');
let adjectivePro = prompt('what adjective do you like? write it down');

let wordInjection = (n,v,adv,adj,)=>{
    let newSentence = new Sentence(n,v,adv,adj);
    console.log(`once ${newSentence.noun} said: I will ${newSentence.verb} ${newSentence.adverb} like ${newSentence.adjective} person`);
}

wordInjection(nounPro,verbPro,adverbPro,adjectivePro);

