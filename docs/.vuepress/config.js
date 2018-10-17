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
                        text: 'Buttons',
                        link: '/css/components/buttons.html'
                    }, {
                        text: 'Forms',
                        link: '/css/components/forms.html'
                    }]
                }]
            },
            {
                text: 'Github',
                link: 'https://github.com/axel-springer-kugawana/iwb_serenity',
                external: true
            },
        ]
    }
}