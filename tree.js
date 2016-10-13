const root = {
  name: 'foo',
  children: [{
    name: 'bar',
    children: [{
      name: 'bar',
      children: []
    }, {
      name: 'baz',
      children: []
    }]
  }]
}

console.log(document.querySelector('.container'));

const tree = require('electron-tree-view')({
  root,
  container: document.querySelector('.container'),
  children: c => c.children,
  label: c => c.name
})

tree.on('selected', item => {
  // adding a new children to every selected item
  item.children.push({ name: 'foo', children: [] })

  tree.loop.update({ root })

  console.log('item selected')
})
