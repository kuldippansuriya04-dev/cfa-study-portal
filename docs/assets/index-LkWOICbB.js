(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`app`);e.innerHTML=`
<div style="font-family: Arial; padding:40px">
  <h1>CFA Study Portal</h1>
  <p>Website successfully deployed 🚀</p>

  <h2>Flashcards</h2>
  <ul>
    <li><a href="./flashcards/ethics.html">Ethics</a></li>
    <li><a href="./flashcards/economics.html">Economics</a></li>
    <li><a href="./flashcards/equity.html">Equity</a></li>
    <li><a href="./flashcards/fixed-income.html">Fixed Income</a></li>
  </ul>
</div>
`;