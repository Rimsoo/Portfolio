module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'axe': "url('@/assets/axe.jpg')",
                'tour': "url('@/assets/tour.jpg')",
                'moi': "url('@/assets/moi.jpg')",
                'skill': "url('@/assets/skill.jpg')",
                'career': "url('@/assets/career.jpg')",
                'code': "url('@/assets/code.jpg')",
                'clonewars': "url('@/assets/clonewars.webp')",
                'mysql_to_postgresql': "url('@/assets/mysql_to_postgresql.png')",
                'stargate': "url('@/assets/stargate.jpg')",
                'contact': "url('@/assets/contact.jpg')",
            },
            colors: {
                "cream": "#f0f7ee",
                "lightblue": "#c4d7f2",
                "powderblue" : "#afdedc",
                "grayblue": "#91a8a4",
                "lavender": "#776871",
                "lightlavender" : "#a08695",
                "noisette": "#DA6B34",
                "jade" : "#00A771",
                "nuit" : "#6983ea",
                "menu" : "#424242",
                "lightmenu" : "#6b6969"
            }
        }, 
    },
    plugins: [],
}
