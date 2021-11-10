const path = require('path')
const deasync = require('deasync')

var specifier = './dependency.mjs'
var done = false
var data
import('./dependency.mjs').then(
    x => {
        done = true
        data = x
    },
    e => {
        done = true
        data = e
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


module.exports = data

if (require.main === module) {
    console.log('foobar() ...')
}
