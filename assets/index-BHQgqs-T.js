(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`app`);e.innerHTML=`
<div style="font-family: Arial; padding: 40px">
  <h1>CFA Study Portal</h1>

  <h2>Flashcards</h2>

  <ul>
    <li><a href="./flashcards/economics.html">Economics</a></li>
    <li><a href="./flashcards/ethics.html">Ethics</a></li>
    <li><a href="./flashcards/equity.html">Equity</a></li>
    <li><a href="./flashcards/fixed-income.html">Fixed Income</a></li>
    <li><a href="./flashcards/derivatives.html">Derivatives</a></li>
    <li><a href="./flashcards/fsa.html">FSA</a></li>
    <li><a href="./flashcards/pm.html">Portfolio Management</a></li>
    <li><a href="./flashcards/qm.html">Quant Methods</a></li>
  </ul>

  <h2>Comics</h2>

  <ul>
    <li><a href="./comics/cfa_economics_comics.html">Economics</a></li>
    <li><a href="./comics/cfa_ethics_comics.html">Ethics</a></li>
    <li><a href="./comics/cfa_equity_comics.html">Equity</a></li>
    <li><a href="./comics/cfa_fixed_income_comics.html">Fixed Income</a></li>
    <li><a href="./comics/cfa_derivatives_comics.html">Derivatives</a></li>
    <li><a href="./comics/cfa_fsa_comics.html">FSA</a></li>
    <li><a href="./comics/cfa_portfolio_management_comics.html">Portfolio Management</a></li>
    <li><a href="./comics/cfa_quant_comics.html">Quant Methods</a></li>
    <li><a href="./comics/cfa_corporate_issuers_comics.html">Corporate Issuers</a></li>
    <li><a href="./comics/cfa_alternative_investments_comics.html">Alternative Investments</a></li>
  </ul>
</div>
`;