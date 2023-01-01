

const login = async(req,res) =>{
    res.send('fake login/register')
}

const dashboard = async(req,res) =>{
    const luckyNumer = Math.floor(Math.random()*100)
}

module.exports = {login, dashboard}