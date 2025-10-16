(function(){
  fetch('../metadata.json').then(r=>r.json()).then(meta=>{
    var v=document.getElementById('ver'); if(v) v.textContent = 'v' + (meta.version||'1.0.0');
    var b=document.getElementById('build'); if(b) b.textContent = meta.build || '';
    var role=document.getElementById('role'); if(role) role.textContent = meta.model_role || '';
  }).catch(()=>{});
})();