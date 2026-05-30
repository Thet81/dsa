import {test} from 'node:test'
import assert from 'assert'
import List from './list.js'

test('appending elements to a list increases the size property',()=> {
    let list = new List()
    list.append(3)
    list.append(4)
    list.append(10)
    assert.strictEqual(list.listSize,3) 
})

test('it should finds the provided element and returns -1 if an element can not be found ',()=> {
    const list = new List()
    list.append(100)
    list.append(200)
    const nonExisting = list.find(300)
    const existing = list.find(100)
    assert.strictEqual(nonExisting,-1)
    assert.strictEqual(typeof existing,'number')
})

test('it should remove the provided element if it is there',()=> {
    const list = new List()
    list.append(20)
    list.append(30)

    let result = list.remove(30)
    assert.strictEqual(list.listSize,1)
    assert.strictEqual(result,true)
})

test('it should not do anything if an element is not found when removing',()=> {
    const list = new List()
    list.append(30)
    list.append(400)
    list.append(50)

    let result = list.remove(600)
    assert.strictEqual(list.listSize,3)
    assert.strictEqual(result,false)
})

test('adding and removing should works properly',()=> {
    const list = new List()
    list.append('Maya')
    list.append('Arto')
    list.append('Mia')

    list.remove('Arto')
    list.remove('John Doe')
    assert.strictEqual(list.listSize, 2)
})

test('Inserting an element should works well',()=> {
    const list = new List()

    list.append('JohnDoe')
    list.insert('James','JohnDoe')

    // non existing
    let result = list.insert('Cathy','Arto')
    console.log(list.dataStore)
    assert.strictEqual(list.listSize,2)
    // assert.equal(result,'false')
    assert.strictEqual(list.find('Cathy'),-1)
})