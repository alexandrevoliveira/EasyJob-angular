const mailer = require('../../config/mailer')

module.exports = {
  async sendMail(req, res) {
    try {
        Object.keys(req.body).forEach(key => {
            if(req.body[key] == "") return res.status(404).json({ message: "Por favor, preencha todos os campos!"})
        })
        
        const {email, subject , text} = req.body 

        await mailer.sendMail({
            from: `projeto-ess@easyjob.com.br`, // sender address
            to: `${email}`, // list of receivers
            subject: `${subject}`, // Subject line
            text: `${text}` // plain text body\
        })

        return res.status(200).json({ 
            message: "E-mail enviado com sucesso!"
        })
    } 
    catch (err) {
        console.error(err) 
        return res.status(404).json({ 
            message: "Houve algum erro!"
        })
    }
  }
}