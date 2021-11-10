### What
1. Nesting `deasync.loopWhile` cause endless loop + 100% CPU.
2. Nesting `deasync.sleep` cause endless loop.


### Reproduce
```sh
$ git clone <repo>
$ npm install
$ npm test
```

### Actual
```txt
$ reproduce_deasync_158_cpu=1 pnpm test
... // No output, 100% CPU.

$ unset reproduce_deasync_158_cpu
$ npm test
index.cjs waiting for ./index.mjs
plugin.cjs waiting for ./dependency.mjs
plugin.cjs waiting for ./dependency.mjs
plugin.cjs waiting for ./dependency.mjs
plugin.cjs waiting for ./dependency.mjs
plugin.cjs waiting for ./dependency.mjs
plugin.cjs waiting for ./dependency.mjs
plugin.cjs waiting for ./dependency.mjs
plugin.cjs waiting for ./dependency.mjs
plugin.cjs waiting for ./dependency.mjs
... // endless


```

### Expected
No endlessloop. No 100% CPU.
