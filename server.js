import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import renderApp from './dist/server/ServerApp.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = process.env.PORT || 3001

const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString()

const parts = html.split('not rendered')

const app = express()
app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')))

app.use((req, res) => {
    res.write(parts[0])

    const stream = renderApp(req.url, {
        onShellReady() {
            stream.pipe(res)
        },
        onShellError() {
            //error handle
        },
        onAllReady() {
            // if we want to please google crawler
            // put this here
            // res.write(parts[0])

            // lrest thing to write
            res.write(parts[1])
            res.end
        },
        onError(error) {
            console.error(error)
        }
    })
})

console.log(`listing on http://localhost:${PORT}`)
app.listen(PORT)