import React, { useState, useEffect, useRef, useLayoutEffect, useMemo, createContext } from 'react'

function usePrevious(theme) {
    const ref = useRef()
    useEffect(() => {
        ref.current = theme
    })
    return ref.current
}

function useStorageTheme(key) {
    const userPreference =
        !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    const [theme, setTheme] = useState(
        // use stored theme; fallback to user preference
        localStorage.getItem(key) || userPreference
    )

    // update stored theme
    useEffect(() => {
        localStorage.setItem(key, theme)
    }, [theme, key])

    return [theme, setTheme]
}

// create context
export const ThemeContext = createContext()

// create context provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useStorageTheme('theme')

    // update root element class on theme change
    const oldTheme = usePrevious(theme)
    useLayoutEffect(() => {
        document.documentElement.classList.remove(`theme-${oldTheme}`)
        document.documentElement.classList.add(`theme-${theme}`)
    }, [theme, oldTheme])

    function toggleTheme() {
        if (theme === 'light') setTheme('dark')
        else setTheme('light')
    }

    const value = useMemo(
        () => ({
            theme,
            toggleTheme,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [theme]
    )

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}