const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const prototypeData = require('../src/data.js');
const expect = chai.expect;

describe('Deck', function () {
it('Should be a function', function () {
    const deck = new Deck()
    expect(Deck).to.be.a('function')
})
it('Should have a cards array', function () {
    const deck = new Deck()
    expect(deck.cards).to.be.an('array')
})
it('Should be able to have multiple cards', function () {
    const deck = new Deck() 
    expect(deck.cards).to.have.lengthOf(30)
})
it('Should return length of array', function (){
    const deck = new Deck() 
    expect(deck.countCards()).to.equal(30)
})
})