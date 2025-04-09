import test from 'ava'

import { formatExplicit } from '../../src/utilities/format-currency/format-explicit.js'

test('KWD 1', function (t) {
  t.plan(7)
  t.deepEqual(formatExplicit('KWD 1', 'en'), 'KWD 1.000')
  t.deepEqual(formatExplicit('KWD 1,', 'en'), 'KWD 1.000,')
  t.deepEqual(formatExplicit('X KWD 1', 'en'), 'X KWD 1.000')
  t.deepEqual(formatExplicit('X KWD 1 ABC', 'en'), 'X KWD 1.000 ABC')
  t.deepEqual(formatExplicit('X KWD 1 ABC DEF', 'en'), 'X KWD 1.000 ABC DEF')
  t.deepEqual(formatExplicit('KWD 1 ABC', 'en'), 'KWD 1.000 ABC')
  t.deepEqual(formatExplicit('KWD 1 ABC DEF', 'en'), 'KWD 1.000 ABC DEF')
})

test('1 KWD', function (t) {
  t.plan(7)
  t.deepEqual(formatExplicit('1 KWD', 'en'), 'KWD 1.000')
  t.deepEqual(formatExplicit('1 KWD,', 'en'), 'KWD 1.000,')
  t.deepEqual(formatExplicit('X 1 KWD', 'en'), 'X KWD 1.000')
  t.deepEqual(formatExplicit('X 1 KWD ABC', 'en'), 'X KWD 1.000 ABC')
  t.deepEqual(formatExplicit('X 1 KWD ABC DEF', 'en'), 'X KWD 1.000 ABC DEF')
  t.deepEqual(formatExplicit('1 KWD ABC', 'en'), 'KWD 1.000 ABC')
  t.deepEqual(formatExplicit('1 KWD ABC DEF', 'en'), 'KWD 1.000 ABC DEF')
})

test('KWD 3.141', function (t) {
  t.plan(7)
  t.deepEqual(formatExplicit('KWD 3.141', 'en'), 'KWD 3.141')
  t.deepEqual(formatExplicit('KWD 3.141,', 'en'), 'KWD 3.141,')
  t.deepEqual(formatExplicit('X KWD 3.141', 'en'), 'X KWD 3.141')
  t.deepEqual(formatExplicit('X KWD 3.141 ABC', 'en'), 'X KWD 3.141 ABC')
  t.deepEqual(
    formatExplicit('X KWD 3.141 ABC DEF', 'en'),
    'X KWD 3.141 ABC DEF'
  )
  t.deepEqual(formatExplicit('KWD 3.141 ABC', 'en'), 'KWD 3.141 ABC')
  t.deepEqual(formatExplicit('KWD 3.141 ABC DEF', 'en'), 'KWD 3.141 ABC DEF')
})

test('3,141 KWD', function (t) {
  t.plan(7)
  t.deepEqual(formatExplicit('3,141 KWD', 'en'), 'KWD 3.141')
  t.deepEqual(formatExplicit('3,141 KWD,', 'en'), 'KWD 3.141,')
  t.deepEqual(formatExplicit('X 3,141 KWD', 'en'), 'X KWD 3.141')
  t.deepEqual(formatExplicit('X 3,141 KWD ABC', 'en'), 'X KWD 3.141 ABC')
  t.deepEqual(
    formatExplicit('X 3,141 KWD ABC DEF', 'en'),
    'X KWD 3.141 ABC DEF'
  )
  t.deepEqual(formatExplicit('3,141 KWD ABC', 'en'), 'KWD 3.141 ABC')
  t.deepEqual(formatExplicit('3,141 KWD ABC DEF', 'en'), 'KWD 3.141 ABC DEF')
})

test('KWD 123,456.789', function (t) {
  t.plan(7)
  t.deepEqual(formatExplicit('KWD 123,456.789', 'en'), 'KWD 123,456.789')
  t.deepEqual(formatExplicit('KWD 123,456.789,', 'en'), 'KWD 123,456.789,')
  t.deepEqual(formatExplicit('X KWD 123,456.789', 'en'), 'X KWD 123,456.789')
  t.deepEqual(
    formatExplicit('X KWD 123,456.789 ABC', 'en'),
    'X KWD 123,456.789 ABC'
  )
  t.deepEqual(
    formatExplicit('X KWD 123,456.789 ABC DEF', 'en'),
    'X KWD 123,456.789 ABC DEF'
  )
  t.deepEqual(
    formatExplicit('KWD 123,456.789 ABC', 'en'),
    'KWD 123,456.789 ABC'
  )
  t.deepEqual(
    formatExplicit('KWD 123,456.789 ABC DEF', 'en'),
    'KWD 123,456.789 ABC DEF'
  )
})

test('123.456,789 KWD', function (t) {
  t.plan(7)
  t.deepEqual(formatExplicit('123.456,789 KWD', 'en'), 'KWD 123,456.789')
  t.deepEqual(formatExplicit('123.456,789 KWD,', 'en'), 'KWD 123,456.789,')
  t.deepEqual(formatExplicit('X 123.456,789 KWD', 'en'), 'X KWD 123,456.789')
  t.deepEqual(
    formatExplicit('X 123.456,789 KWD ABC', 'en'),
    'X KWD 123,456.789 ABC'
  )
  t.deepEqual(
    formatExplicit('X 123.456,789 KWD ABC DEF', 'en'),
    'X KWD 123,456.789 ABC DEF'
  )
  t.deepEqual(
    formatExplicit('123.456,789 KWD ABC', 'en'),
    'KWD 123,456.789 ABC'
  )
  t.deepEqual(
    formatExplicit('123.456,789 KWD ABC DEF', 'en'),
    'KWD 123,456.789 ABC DEF'
  )
})

test('KWD 123,456,789.000', function (t) {
  t.plan(7)
  t.deepEqual(
    formatExplicit('KWD 123,456,789.000', 'en'),
    'KWD 123,456,789.000'
  )
  t.deepEqual(
    formatExplicit('KWD 123,456,789.000,', 'en'),
    'KWD 123,456,789.000,'
  )
  t.deepEqual(
    formatExplicit('X KWD 123,456,789.000', 'en'),
    'X KWD 123,456,789.000'
  )
  t.deepEqual(
    formatExplicit('X KWD 123,456,789.000 ABC', 'en'),
    'X KWD 123,456,789.000 ABC'
  )
  t.deepEqual(
    formatExplicit('X KWD 123,456,789.000 ABC DEF', 'en'),
    'X KWD 123,456,789.000 ABC DEF'
  )
  t.deepEqual(
    formatExplicit('KWD 123,456,789.000 ABC', 'en'),
    'KWD 123,456,789.000 ABC'
  )
  t.deepEqual(
    formatExplicit('KWD 123,456,789.000 ABC DEF', 'en'),
    'KWD 123,456,789.000 ABC DEF'
  )
})

test('123.456.789,000 KWD', function (t) {
  t.plan(7)
  t.deepEqual(
    formatExplicit('123.456.789,000 KWD', 'en'),
    'KWD 123,456,789.000'
  )
  t.deepEqual(
    formatExplicit('123.456.789,000 KWD,', 'en'),
    'KWD 123,456,789.000,'
  )
  t.deepEqual(
    formatExplicit('X 123.456.789,000 KWD', 'en'),
    'X KWD 123,456,789.000'
  )
  t.deepEqual(
    formatExplicit('X 123.456.789,000 KWD ABC', 'en'),
    'X KWD 123,456,789.000 ABC'
  )
  t.deepEqual(
    formatExplicit('X 123.456.789,000 KWD ABC DEF', 'en'),
    'X KWD 123,456,789.000 ABC DEF'
  )
  t.deepEqual(
    formatExplicit('123.456.789,000 KWD ABC', 'en'),
    'KWD 123,456,789.000 ABC'
  )
  t.deepEqual(
    formatExplicit('123.456.789,000 KWD ABC DEF', 'en'),
    'KWD 123,456,789.000 ABC DEF'
  )
})
