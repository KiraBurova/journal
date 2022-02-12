module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/registration',
                permanent: true,
            },
        ]
    },
}
