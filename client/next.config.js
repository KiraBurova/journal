const { withEffectorReactAliases } = require('effector-next/tools')

const enhance = withEffectorReactAliases()

module.exports = enhance({
    async redirects() {
        return [
            {
                source: '/',
                destination: '/registration',
                permanent: true,
            },
        ]
    },
})
