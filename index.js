var path = require('path')

setupChaiAsPromised.$inject = ['config.files']

function setupChaiAsPromised(files) {
    files.unshift({
        pattern: path.resolve(require.resolve('chai-subset')),
        included: true,
        served: true,
        watched: false,
    })
}

module.exports = {
    'framework:chai-subset': ['factory', setupChaiAsPromised]
}
