import '@testing-library/jest-dom'
import 'jest-styled-components'

//Snippet para que o jest possa aceitar SVG
var createElementNSOrig = global.document.createElementNS
global.document.createElementNS = function(namespaceURI, qualifiedName) {
  if (namespaceURI==='http://www.w3.org/2000/svg' && qualifiedName==='svg'){
    var element = createElementNSOrig.apply(this,arguments)
    element.createSVGRect = function(){};
    return element;
  }
  return createElementNSOrig.apply(this,arguments)
}
