{"version":3,"file":"block_preview_card.map.js","names":["BX","namespace","addClass","Landing","Utils","append","create","UI","Card","BlockPreviewCard","data","BaseCard","apply","this","arguments","layout","classList","add","mode","title","appExpired","app_expired","repoId","repo_id","imageSrc","image","code","favorite","favoriteMy","isNew","imageContainer","props","className","body","appendChild","header","innerText","dataset","requiresUpdates","requires_updates","text","Loc","getMessage","outerHTML","innerHTML","labels","insertAfter","getHeader","marketLabel","hint","hintNoIcon","Hint","init","blockId","split","length","Runtime","loadExtension","then","deleteMyButton","getRemoveButton","onclick","event","stopPropagation","Dialogs","MessageBox","show","message","buttons","MessageBoxButtons","YES_CANCEL","popupOptions","targetContainer","parent","document","onYes","Backend","getInstance","action","mainInstance","Main","removeBlockFromList","catch","error","console","log","getBody","addWarning","onClickHandler","style","backgroundImage","src","attrs","overlay","children","html","prototype","constructor","__proto__"],"sources":["block_preview_card.js"],"mappings":"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"}