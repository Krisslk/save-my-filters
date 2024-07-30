function saveFilters(url,filters){

    let jsonFromatted = JSON.stringify(filters);
    sessionStorage.setItem(url,jsonFromatted );
   
}

function checkAndGetFilters(url){

    let isDataExists = sessionStorage.getItem(url);

    if(isDataExists){

        let jsonParsedData = JSON.parse(sessionStorage.getItem(url));
        return jsonParsedData;
        
    }else{

        return false;

    }

}


function clearFilters(){
    sessionStorage.clear();
}


module.exports.saveFilters = saveFilters;
module.exports.checkAndGetFilters = checkAndGetFilters;
module.exports.clearFilters = clearFilters;

