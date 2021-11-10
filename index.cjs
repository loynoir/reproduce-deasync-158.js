const path = require('path')
const deasync = require('deasync')

var specifier = './index.mjs'
var done = false
var mod
import(specifier).then(
    x => {
        done = true
        mod = x
    },
    e => {
        done = true
        mod = e
    }
)

if (process.env['reproduce_deasync_158_cpu']) {
    deasync.loopWhile(function(){return !done;});
} else {
    while(!done) {
        console.warn(`${path.basename(__filename)} waiting for ${specifier}`)
        deasync.sleep(500)
    }
}


module.exports = mod.default
