# save-my-filters
this npm plugin will save your applied filters to session storage with a url as the key,
to use this module pass the url alone with filters object into saveFilters function, it will convert the filters object 
into json stringify and store it inside the session storage of the web browser under the provided url as the key

example code : 

step 1 : import saveFilters func from the module

step 2 : pass the prefered url as first parameter and second parameter should be a json object which contains filter params

     let baseParams = {
        'keyword':'',
        'customerType':1,
    }

    saveFilters(Routes.Customers.path,baseParams);


step 3 : to retrieve filter params, first in your react component get the current url, pass that into the checkAndGetFilters func in the module, if there are applied filters saved in the session storage with the matching url to the current route you provided then it will return the data as json object or else returns false

    let filters = checkAndGetFilters(Routes.Customers.path);