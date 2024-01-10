console.log('JS OK');

//! Griglia Dinamica
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//todo MILESTONE 1
// Prepariamo l'HTML ed il CSS.

//todo MILESTONE 2
// Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

//todo #MILESTONE 3
// In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

//todo #MILESTONE 4
// Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

//todo BONUS
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

//todo Note:
// - questo bonus richiederà un evento diverso dal 'click'
// - questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle;)

//todo ----------------------------------------------------------------------------- \\

// Informazioni note
const rows = 10;
const cols = 10;

//*  Recupero gli elementi dal DOM
const rangeSelect = document.getElementById('range-select');
const confirmButton = document.getElementById('confirm-button');
const gridElement = document.querySelector('section .grid');
