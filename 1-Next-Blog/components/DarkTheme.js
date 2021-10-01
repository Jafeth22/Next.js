function DarkTheme() {
    return (
        <style jsx global>{`
            /* Light Theme */
            :root {
                --background-color: black;
                --link-color: rgb(62, 211, 17);
                --text-color: white;
            }
        `}</style>
    )
}

export default DarkTheme;