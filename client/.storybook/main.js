const custom = require('../webpack.config')

module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/react',
    webpackFinal: async config => {
        return {
            ...config,
            module: { ...config.module, rules: custom.module.rules },
        }
    },
}
