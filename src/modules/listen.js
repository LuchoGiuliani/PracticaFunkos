module.exports = {
    port: process.env.PORT || 2022,
    callback: function (text){
        console.log(text);
    }
}