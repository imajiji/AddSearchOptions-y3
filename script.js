window.onload = function(){
  var observer = new MutationObserver(function(mutations){
    if(!document.getElementById('qdr_y3')){
      addThreeYear();
    }
  });
  var options = { subtree: true, childList: true, characterData: true }
  observer.observe(document.body, options);
}

function addThreeYear(){
  if(document.getElementById('qdr_y') && document.getElementById('qdr_y').childNodes[0].nodeType !== 3){
    var y3 = document.getElementById('qdr_y').cloneNode(true);
    var yHref = y3.childNodes[0].getAttribute('href');
    var y3Href = yHref.replace(/qdr:y/, 'qdr:y3');
  }else if(document.getElementById('qdr_y')){
    var y3 = document.getElementById('qdr_y').cloneNode(true);
    var yHref = y3.childNodes[0].getAttribute('href');
    var y3Href = yHref.replace(/qdr:y/, 'qdr:y3');
  }else{
    return false;
  }
  y3.childNodes[0].setAttribute('href', y3Href);
  y3.setAttribute('id', 'qdr_y3');
  y3.childNodes[0].textContent = '3 年以内';
  document.getElementById('qdr_y').parentNode.insertBefore(y3, document.getElementById('qdr_y').nextSibling);
}
