var should = require('chai').should();
import tplLoader from '../src/index.es6';
describe('tpl-loader', function() {
  it('should return compiled function in string', function(){
    var templateStr = `
    <div>
      <%= it %>
    </div>`;
    var data = 'test';
    tplLoader.call({cacheable: ()=>{}}, templateStr).should.to.be.a('string');
    eval(tplLoader.call({cacheable: ()=>{}}, templateStr).replace(/\s*module.exports\s*=\s*([\s\S]*);$/, `($1)('${data}');`)).should.to.contain(data);
  });
});
