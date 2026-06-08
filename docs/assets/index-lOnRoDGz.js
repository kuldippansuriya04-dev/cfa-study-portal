(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.body.innerHTML=`
<div style="
font-family: Arial;
padding:40px;
background:#f3f4f6;
min-height:100vh;
">

<h1>CFA Study Portal</h1>

<div style="
display:flex;
flex-direction:column;
gap:18px;
margin-top:30px;
font-size:22px;
">

<a href="/flashcards/derivatives.html">Derivatives</a>

<a href="/flashcards/economics.html">Economics</a>

<a href="/flashcards/equity.html">Equity</a>

<a href="/flashcards/ethics.html">Ethics</a>

<a href="/flashcards/fixed-income.html">Fixed Income</a>

<a href="/flashcards/fsa.html">FSA</a>

<a href="/flashcards/qm.html">Quantitative Methods</a>

<a href="/flashcards/pm.html">Portfolio Management</a>

</div>

</div>
`;