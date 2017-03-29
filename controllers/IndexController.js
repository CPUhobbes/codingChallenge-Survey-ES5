//Index router that will load the main page
var controllers = {
    
    loadIndex: function(req, res){
        
        res.send('index.html');
    }
}

module.exports = controllers;