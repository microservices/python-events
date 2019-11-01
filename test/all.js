#!/usr/bin/env node
// iterate over all payloads and run them

const assert = require('assert').strict
const { readdirSync } = require('fs')
const { join } = require('path')
const spawnSync = require('cross-spawn')

const payloadDir = join(__dirname, 'payloads')
const runner = join(__dirname, 'runner.js')

readdirSync(payloadDir).forEach(payload => {
  const file = join(payloadDir, payload)
  console.log(`Testing: ${payload}`)
  const oms = spawnSync('node', [runner, file], {
    stdio: [process.stdin, process.stdout, process.stderr]
  })

  assert(oms.status === 0)
  // assert(oms.stderr === null)
})
