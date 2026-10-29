(()=>{
  const root=document.querySelector('[data-project]');
  if(!root)return;
  const type=root.dataset.project;
  const cols=type==='vit'?[0,2,1]:[0,1,2];
  const labels=type==='vit'?['Preoperative input','ViT3Flow','Postoperative ground truth']:['Ground-truth grounding','SpineChat','Qwen3.5-4B'];
  let request=0;
  async function update(current){
    const id=++request;
    root.setAttribute('aria-busy','true');
    const paths=Array.from({length:7},(_,i)=>`assets/cases/${type}-${current}-${i}.png`);
    try{
      await Promise.all(paths.map(src=>new Promise((resolve,reject)=>{const image=new Image();image.onload=resolve;image.onerror=reject;image.src=src;})));
      if(id!==request)return;
      cols.forEach((c,i)=>{const image=document.querySelector('#panel-'+i);image.src=paths[c];image.alt=`Case ${current+1}: ${labels[i]}`;});
      root.querySelectorAll('[data-method]').forEach(image=>{image.src=paths[+image.dataset.method];image.alt=`Case ${current+1}: ${image.nextElementSibling.textContent}`;});
      root.querySelectorAll('[data-case]').forEach(button=>button.setAttribute('aria-pressed',+button.dataset.case===current));
      root.dataset.currentCase=current;
    }catch(error){console.error('Could not load the selected case; previous case retained.',error);}
    finally{if(id===request)root.setAttribute('aria-busy','false');}
  }
  root.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>update(+button.dataset.case)));
  update(0);
})();
