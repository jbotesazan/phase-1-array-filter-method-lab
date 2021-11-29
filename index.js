function findMatching(item, driver) {

    const filt = item.filter(function (name) {
          return name.toLowerCase() === driver.toLowerCase()
     });
     return filt;
  
  }
  

function fuzzyMatch(item, string) {
    
    const filta = item.filter(function (name) {
           return (name.startsWith(string))       
    });
    return filta
}

function matchName(item, string) {
   return item.filter(function (element) {
        return   element.name === string
    })
}