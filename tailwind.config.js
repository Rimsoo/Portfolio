module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'axe': "url('src/assets/axe.jpg')",
                'tour': "url('src/assets/tour.jpg')",
                'moi': "url('src/assets/moi.jpg')",
                'skill': "url('src/assets/skill.jpg')",
                'career': "url('src/assets/career.jpg')",
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
