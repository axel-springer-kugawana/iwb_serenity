module.exports = {
    title: "Immoweb Serenity",
    description: "Immoweb Frontend Framework",
    base: "/iwb_serenity/",
    head: [
        ['link', { rel: 'stylesheet', href: '/css/serenity.min.css' }],
        ['link', { rel: 'stylesheet', href: '/css/prism-a11y-dark.css' }],
        ['link', { rel: 'stylesheet', href: '/css/vue-press-serenity.css' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicons/favicon-16x16.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicons/favicon-32x32.png' }],
        ['link', { rel: 'mask-icon', color: '#3d6ca9', href: '/images/favicons/safari-pinned-tab.svg' }],
        ['link', { rel: 'shortcut icon', href: '/images/favicons/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
    ],
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Css',
                link: '/css/',
                children: [{
                    text: 'Bases',
                    link: '/css/bases/',
                    children: [{
                        text: 'Reset',
                        link: '/css/bases/reset.html'
                    },
                    {
                        text: 'Typography',
                        link: '/css/bases/typography.html'
                    }]
                }, {
                    text: 'Layout',
                    link: '/css/layout/',
                    children: [{
                        text: 'Grid',
                        link: '/css/layout/grid.html'
                    }]
                }, {
                    text: 'Components',
                    link: '/css/components/',
                    children: [{
                        text: 'Alerts',
                        link: '/css/components/alerts.html'
                    }, {
                        text: 'Buttons',
                        link: '/css/components/buttons.html'
                    }, {
                        text: 'Forms',
                        link: '/css/components/forms.html'
                    }]
                }]
            }, {
                text: 'Js',
                link: '/js/',
                children: [{
                    text: 'Inputs',
                    link: '/js/inputs/',
                    children: [{
                        text: 'Input Select',
                        link: '/js/inputs/input-select.html'
                    }, {
                        text: 'Input Group Stepper',
                        link: '/js/inputs/input-group-stepper.html'
                    }]
                }]
            }, {
                text: 'Github',
                link: 'https://github.com/axel-springer-kugawana/iwb_serenity',
                external: true
            },
        ]
    }
}