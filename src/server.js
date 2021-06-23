const express = require('express')
const ejs = require('ejs')
const path = require('path')
const puppeteer = require('puppeteer')
const app = express()

const passengers = [
    {
        name: "Joyce",
        flightNumber: 7859,
        time: "18h00",
    },
    {
        name: "Brock",
        flightNumber: 7859,
        time: "18h00",
    },
    {
        name: "Eve",
        flightNumber: 7859,
        time: "18h00",
    },
];


var conteudo = {
    lista: [
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
    ]
}


app.get('/pdf', async(request, response) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:3000/', {
        waitUntil: 'networkidle0'
    })

    const pdf = await page.pdf({
        printBackground: true,
        format: 'A4'
    })

    await browser.close()

    response.contentType("application/pdf")

    return response.send(pdf)

})

app.get('/', (request, response) => {

    const filePath = path.join(__dirname, "print.ejs")
    ejs.renderFile(filePath, { passengers }, (err, html) => {
        if(err) {
            return response.send('Erro na leitura do arquivo')
        }
    
        // enviar para o navegador
        return response.send(html)
    })
   
})

app.get('/lista', (request, response) => {
    const filePath = path.join(__dirname, "lista.ejs")
    ejs.renderFile(filePath, conteudo, (err, html) => {
    //ejs.renderFile("./src/lista.ejs", conteudo, (err, html) => {
        if(err) {
            return response.send(err.message)
        }
    
        // enviar para o navegador
        return response.send(html)
    })
})

app.get('/lista/pdf', async(request, response) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:3000/lista', {
        waitUntil: 'networkidle0'
    })

    const pdf = await page.pdf({
        printBackground: true,
        format: 'A4',
        // margin: { top: "2.0cm" },
        // displayHeaderFooter: true,
        // headerTemplate: '<span style="font-size: 25px; margin-left: 1.5cm; margin-right: 1.5cm"> <span>HEADER</span>',
        //footerTemplate: '<span style="font-size: 30px"> <span>FOOTER</span>'
        
        //landscape: true
    })

    await browser.close()

    response.contentType("application/pdf")

    return response.send(pdf)
})

app.get('/testar/pdf', async(request, response) => {

    const footer = `<footer style="margin: auto; width: 40%">
            <p style="font-family: arial; float: right; width: 55%; color: red; margin-top: 24px; font-size: 10px">
                <b>My footer</b>
            </p>
        </footer>`

    const content = `<!DOCTYPE html>
        <html>
            <head>
                <meta charSet="utf-8"/>
                <style type="text/css">
                    body { backgroundColor: "red" }
                </style>
            </head>
            <body>
                <h1>Hello</h1>
            </body>
        </html>`

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.setContent(content, { waitUntil: "networkidle0" })
    const pdf = await page.pdf({
        format: "A4",
        displayHeaderFooter: true,
        //headerTemplate: '<span style="font-size: 30px"> <span class="pageNumber"></span> of <span class="totalPages"></span></span>',
        headerTemplate: '<span style="font-size: 30px"> <span>HEADER</span>',
        footerTemplate: footer,
        margin: { top: "100px", bottom: "200px" },
        printBackground: true,
    })


    await browser.close()

    response.contentType("application/pdf")

    return response.send(pdf)
})

app.listen(3000)
