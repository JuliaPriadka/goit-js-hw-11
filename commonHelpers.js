import{S as m,i}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(o){const s=new URLSearchParams({key:"43250270-1f98e5ae52bb69b689c51c131",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function h(o){return o.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:a,downloads:u})=>`<li class="card">
        <a href="${r}">
        <img src="${s}" alt="${n}" class="card-img">
        </a>
        <ul class="card-stats">
          <li>
            <h3 class="card-stats-name">Likes</h3>
            <p class="card-stats-info">${e}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Views</h3>
            <p class="card-stats-info">${t}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Comments</h3>
            <p class="card-stats-info">${a}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Downloads</h3>
            <p class="card-stats-info">${u}</p>
          </li>
        </ul>
      </li>`).join("")}const p=new m(".card a",{captionsData:"alt"}),f=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");f.addEventListener("submit",g);c.style.display="none";function g(o){o.preventDefault(),l.innerHTML="",c.style.display="";const s=o.target.elements.input.value.trim();if(s.length===0){i.show({message:'Please, fill in the "Search" params',backgroundColor:"#ef4040",messageColor:"#fff",position:"center"});return}d(s).then(r=>{r.hits.length===0&&i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:" #ffa000",messageColor:"#fff",position:"center"}),c.style.display="none",l.innerHTML=h(r.hits),p.refresh()}).catch(r=>{i.show({message:`${r}`,backgroundColor:" #ffa000",messageColor:"#fff",position:"center"})}).finally(()=>f.reset())}
//# sourceMappingURL=commonHelpers.js.map
